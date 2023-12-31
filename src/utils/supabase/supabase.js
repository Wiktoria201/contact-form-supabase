import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

// how to use this later
// ExampleComponent.js

// import supabase from './path/to/supabase'; // Adjust the path based on your file structure

// Now, you can use `supabase` to interact with Supabase in this component
