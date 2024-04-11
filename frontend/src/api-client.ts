import { RegisterFormData } from "./pages/Register";
import { SingInFormData } from "./pages/SignIn";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export const register = async (formData: RegisterFormData) => {
  const response = await fetch(`${API_BASE_URL}/api/users/register`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const reponseBody = await response.json();
  if (!response.ok) {
    throw new Error(reponseBody.message);
  }
};

export const sigin = async (formData: SingInFormData) => {
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData),
  });

  const body = await response.json();
  if(!response.ok){
    throw new Error(body.message);
  }

  return body;

}

export const validateToken  = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`, {
    credentials: "include"
  });

  if(!response.ok){
    throw new Error("Token Invalid");
  }

  return response.json();
}

export const signout = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
    credentials: "include",
    method: 'POSt'
  });

  if(!response.ok){
    throw new Error("Error during sign out");
  }
}

export const addMyHotel = async (hotelFormData:FormData) => {
  const response = await fetch(`${API_BASE_URL}/api/my-hotels`, {
    method:"POST",
    credentials: "include",
    body: hotelFormData
  });

  if(!response.ok){
    throw new Error("Failed to add hotel");
  }

  return response.json(); 
}

