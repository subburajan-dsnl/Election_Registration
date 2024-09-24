import React, { useState } from "react";
// import { login } from '../../service/authService';
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [otp, setOTP] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isOTPSent, setIsOTPSent] = useState<boolean>(false);
  const navigate = useNavigate();

  const validatePhonenumber = (mobileNumber: string) => {
    const reg = /^[6-9]\d{9}$/;
    if (!reg.test(mobileNumber)) {
      setError("Please enter a valid mobile number");
      return false;
    }
    setError("");
    return true;
    // return reg.test(mobileNumber);
  };

  //  validate email
  const validateEmail = (email: string): boolean => {
    // Regular expression for validating an email address
    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Check if the email matches the regex
    const isValid = emailRegex.test(email);

    // Set error message based on validation result
    if (!isValid) {
      setError("Please enter a valid email address");
    } else {
      setError("");
    }

    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // const data = await login(mobileNumber, email, otp);
    // sessionStorage.setItem('token', data.access_token);
    // console.log('Login successful:', data);
    navigate("/booking");
    setError("");
  };

  const handleOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    const validMobileStatus = validatePhonenumber(mobileNumber);
    const validEmailStatus = validateEmail(email);
    console.log(validMobileStatus);
    console.log(validEmailStatus);
    if (validMobileStatus === true && validEmailStatus === true) {
      console.log("OTP sent successfully");
      setIsOTPSent(true);
      console.log(isOTPSent);
      window.sessionStorage.setItem("sessionDetail" , JSON.stringify({mobileNumber, email}));
    }
  };
  return (
    <form
      className="w-96 p-6 shadow-lg  bg-white rounded-md mt-4 "
      onSubmit={handleSubmit}
    >
      <h1 className="flex justify-center font-bold text-3xl">
        Building Association
      </h1>
      <div className="px-8 py-6">
        <label className="block font-semibold">Mobile Number</label>

        <input
          type="text"
          value={mobileNumber}
          placeholder="Enter your mobile number"
          onChange={(e) => {
            setMobileNumber(e.target.value);
          }}
          required
          className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-purple-400 rounded-md"
        />
        <label className="block mt-3 font-semibold">Email ID</label>
        <input
          type="email"
          value={email}
          placeholder="Enter your Email ID"
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border w-full h-5 px-3 py-5 rounded-md mt-2"
        />
        <div className="flex justify-center items-baseline pb-5  ">
          <button
            type="button"
            onClick={handleOTP}
            className="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md"
          >
            Send OTP
          </button>
        </div>

        {isOTPSent && (
          <div className="flex justify-center">
            <p style={{ color: "green" }}>OTP sent successfully</p>
          </div>
        )}
        <label className="block mt-3 font-semibold">OTP</label>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOTP(e.target.value)}
          required
          disabled={!isOTPSent}
          className="border w-full h-5 px-3 py-5 rounded-md"
        />
      </div>

      <div className="flex justify-center items-baseline pb-5">
        <button
          type="submit"
          disabled={!isOTPSent}
          className={`mt-4 py-2 px-6 rounded-md ${
            !isOTPSent ? 'bg-gray-400 text-gray-700' : 'bg-purple-500 text-white'
          }`}
        >
          Verify
        </button>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default LoginForm;
