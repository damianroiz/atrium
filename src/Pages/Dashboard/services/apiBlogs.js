import supabase from './supabase';

export async function getBlogs() {
  const { data, error } = await supabase.from('blogs').select('*');

  if (error) {
    console.log(error);
    throw new error('blogs could not be loaded');
  }

  return data;
}

export async function deleteBlog(id) {
  const { data, error } = await supabase.from('blogs').delete().eq('id', id);

  if (error) {
    console.log(error);
    throw new error('blog could not be deleted');
  }

  return data;
}
