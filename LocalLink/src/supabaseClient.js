import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://cothkkztypnqhiykrahh.supabase.co'
const supabaseKey = 'sb_publishable_xd90di30ll71sD_cYbKXXQ_g__6Kvhp'

export const supabase = createClient(supabaseUrl, supabaseKey);