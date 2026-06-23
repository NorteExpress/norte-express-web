import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ntbhzqhpeukwdzzhdunj.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_mZ4CWzQal3-WcSR1C9Ur9A_EMeKz8_d';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
