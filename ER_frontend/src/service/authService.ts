import axios from 'axios';

export interface LoginResponse {
  access_token: string;
}

const AUTH_API = 'http://localhost:5000/';
export const login = async (tenantId: string, username: string, password: string): Promise<LoginResponse> => {
  const response = await axios.post<LoginResponse>(`${AUTH_API}login`, {
    tenant_id: tenantId,
    username,
    password,
  });
  return response.data;
};

export const logout = async ()=>{
  sessionStorage.removeItem('token')
  alert("Logout Success")
}