import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mkozrcjyhzmhwuutaovz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rb3pyY2p5aHptaHd1dXRhb3Z6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2MDc0MzYsImV4cCI6MjA4NTE4MzQzNn0.wcRzzWstItaX5Bg-1LDOowulPGpwPdYGLif3aK6VxJ4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);