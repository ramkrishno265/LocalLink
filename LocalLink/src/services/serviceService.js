import { supabase } from "./supabase";

export const getServices = () => {
  return supabase.from("services").select("*");
};

export const addService = (data) => {
  return supabase.from("services").insert([data]);
};