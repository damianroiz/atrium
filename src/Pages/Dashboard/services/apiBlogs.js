import supabase from './supabase';

export async function getBlogs() {
  const { data, error } = await supabase.from('blogs').select('*');

  if (error) {
    console.log(error);
    throw new error('Posts could not be loaded');
  }

  return data;
}
