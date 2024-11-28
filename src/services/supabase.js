import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://dapohxpdnviqguabyrip.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRhcG9oeHBkbnZpcWd1YWJ5cmlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA4OTU4ODcsImV4cCI6MjA0NjQ3MTg4N30.dLcqZzXCyfvF5_CXnwncWISXb3PcsWhU2u_KnRy3RLM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
