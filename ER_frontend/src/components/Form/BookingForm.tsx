import { useState, useEffect } from "react";
import { useNavigate,  } from "react-router-dom";


const BookingForm: React.FC = () => {
  const [ownerName, setOwnerName] = useState<string>("");
  const [flatNumber, setFlatNumber] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const [email, setEmail] = useState<string>("");


  const [error, setError] = useState<string>("");



  const navigate = useNavigate();

  useEffect(() => {
    // Function to fetch login information
    const fetchLoginInfo = () => {
      const sessionDetail = window.sessionStorage.getItem("sessionDetail");  
      const storedMobile = sessionDetail ? JSON.parse(sessionDetail).mobileNumber : "";
      const storedEmail = sessionDetail ? JSON.parse(sessionDetail).email : "";


      if (storedMobile) setMobile(storedMobile);
      if (storedEmail) setEmail(storedEmail);
    };

    // Call the function to fetch login information
    fetchLoginInfo();
  }, []);
  
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validOwnerNameStatus = validateOwnerName(ownerName);
    const validFlatNumberStatus = validateFlatNumber(flatNumber)
    console.log(ownerName);
    console.log(`Owner Name validation status: ${validOwnerNameStatus}`);
    console.log(`Flat Number validation status: ${validFlatNumberStatus}`);
    if (validOwnerNameStatus === true && validFlatNumberStatus === true) {
      console.log("Form submitted successfully");
      navigate("/thankyou", { replace: true });
      setError("");
    return;
    }
    setError("Invalid Details");

  };


  const validateOwnerName = ( aname: string) => {
    //  validate only alphabet and space
    const reg = /^[a-zA-Z\s]*$/;
    if (!reg.test(aname)) {
      setError("Please enter a valid Owner's Name");
      return false;
    }
    setError("");
    return true;
  }

  const validateFlatNumber = (flatNumber: string) => {
    // alpha numeric like /a-bc/
    const reg = /^[a-zA-Z0-9]+$/;
    if (!reg.test(flatNumber)) {
      setError("Please enter a valid Flat Number");
      return false;
    }
    setError("");

    return true;
    }

  return (
    <form
      className="max-w-lg mx-auto p-6 shadow-lg bg-white rounded-md mb-4 "
      onSubmit={handleSubmit}
    >
      <h1 className="text-center font-bold text-3xl mb-6">Registration Form</h1>
      <div className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">
            Apartment Owner's Name <span className="text-red-400">*</span>{" "}
          </label>
          <input
            type="text"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
            required
            className="border w-full px-3 py-2 mt-1 hover:outline-none focus:outline-none focus:ring-purple-400 rounded-md"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">
            Flat Number <span className="text-red-400">*</span>{" "}
          </label>
          <input
            type="text"
            value={flatNumber}
            onChange={(e) => setFlatNumber(e.target.value)}
            required
            className="border w-full px-3 py-2 mt-1 hover:outline-none focus:outline-none focus:ring-purple-400 rounded-md"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">
            Mobile <span className="text-red-400">*</span>{" "}
          </label>
          <input
            type="text"
            value={mobile}
            // onChange={(e) => setMobile(e.target.value)}
            required
            disabled
            className="border w-full px-3 py-2 mt-1 hover:outline-none focus:outline-none focus:ring-purple-400 rounded-md"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">
            Email ID <span className="text-red-400">*</span>{" "}
          </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setOwnerName(e.target.value)}
            required
            disabled
            className="border w-full px-3 py-2 mt-1 hover:outline-none focus:outline-none focus:ring-purple-400 rounded-md"
          />
        </div>

        {/*  Question with check box */}
        <p className="mr-4 font-semibold">How would you like to participate in the event?</p>

        <div className="flex items-center space-x-4">
         
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="typeofparticipant"
              value="green"
              className="form-radio text-green-600"
            />
            <span className="ml-2">Online</span>
          </label>

          <label className="inline-flex items-center">
            <input
              type="radio"
              name="typeofparticipant"
              value="blue"
              className="form-radio text-blue-600"
            />
            <span className="ml-2">In-Person</span>
          </label>
        </div>

        <p className="mr-4 font-semibold">Are you authorized to vote on behalf of your flat?</p>

<div className="flex items-center space-x-4">
  <label className="inline-flex items-center">
    <input
      type="radio"
      name="authorizedperson"
      value="red"
      className="form-radio text-red-600"
    />
    <span className="ml-2">Yes</span>
  </label>

  <label className="inline-flex items-center">
    <input
      type="radio"
      name="authorizedperson"
      value="green"
      className="form-radio text-green-600"
    />
    <span className="ml-2">No</span>
  </label>

</div>

<p className="mr-4 font-semibold">Would you like to speak during the event?'</p>

<div className="flex items-center space-x-4">
  <label className="inline-flex items-center">
    <input
      type="radio"
      name="speakOnEvent"
      value="red"
      className="form-radio text-red-600"
    />
    <span className="ml-2">Yes</span>
  </label>

  <label className="inline-flex items-center">
    <input
      type="radio"
      name="speakOnEvent"
      value="green"
      className="form-radio text-green-600"
    />
    <span className="ml-2">No</span>
  </label>

  
</div>
      </div>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      <div className="flex justify-center items-baseline mt-6">
        <button
          type="submit"
          className="bg-gray-700 text-white py-2 px-6 rounded-md hover:bg-gray-800"
        >
          Submit
        </button>
      </div>
      {/* <textarea
        className="w-full h-24 border p-2 rounded-md mt-4"
        value={summary}
        disabled
      /> */}
    </form>
  );
};

export default BookingForm;
