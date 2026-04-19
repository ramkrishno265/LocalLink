import { supabase } from "./supabase";

const handleSignup = async () => {
  // STEP 1: Auth create
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) return alert(error.message);

  const user = data.user;

  // STEP 2: provider_data insert
  const { error: dbError } = await supabase
    .from("provider_data")
    .insert([
      {
        user_id: user.id,
        name,
        email,
        phone,
        role: "provider",
      },
    ]);

  if (dbError) {
    alert(dbError.message);
  } else {
    alert("Provider created successfully!");
  }
};