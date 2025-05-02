import axios from "axios";
import api from "./api";

const API_BASE_URL = "http://127.0.0.1:8000/api"; // Update if needed

export const signup = async (data: {
  name: string;
  email: string;
  password: string;
  city: string;
}) => {
  const response = await api.post("/signup/", data);
  if (response.status === 201) {
    localStorage.setItem("auth-token", response.data.token);
    document.cookie = `auth-token=${response.data.token}; path=/`;
  } else {
    throw new Error("Signup failed");
  }
  return response.data;
};

export const login = async (email: string, password: string) => {
  const response = await api.post("/login/", {
    email,
    password,
  });
  if (response.status === 200) {
    localStorage.setItem("auth-token", response.data.token);
    document.cookie = `auth-token=${response.data.token}; path=/`;
  } else {
    throw new Error("Login failed");
  }
  return response.data.token;
};

export const logout = async () => {
  const response = await api.post("/logout/");
  if (response.status === 200) {
    localStorage.removeItem("auth-token");
    document.cookie = "auth-token=; path=/; max-age=0";
  }
  return response.data;
};

export const createBooking = async (data: {
  package: string;
  car_make: string;
  car_model: string;
  year: string;
  registration_number: string;
  schedule_date: string;
  schedule_time: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  card_number: string;
  expiry_date: string;
  cvv: string;
  card_holder_name: string;
}) => {
  const token = localStorage.getItem("auth-token");

  if (!token) {
    throw new Error("User not authenticated");
  }

  const response = await api.post("/bookings/create/", data, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });

  return response.data;
};
