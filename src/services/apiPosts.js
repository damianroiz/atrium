import supabase from './supabase';

export async function getPosts() {
  const { data, error } = await supabase.from('posts').select('*');

  if (error) {
    console.log(error);
    throw new error('Posts could not be loaded');
  }

  return data;
}
