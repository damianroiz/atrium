import supabase from './supabase';

export async function getBlogs() {
  const { data, error } = await supabase.from('blogs').select('*');

  if (error) {
    console.log(error);
    throw new Error('blogs could not be loaded');
  }

  return data;
}

export async function createBlog(newBlog) {
  const { data, error } = await supabase.from('blogs').insert([newBlog]);

  if (error) {
    console.log(error);
    throw new Error('blog could not be created');
  }

  return data;
}

export async function deleteBlog(id) {
  const { data, error } = await supabase.from('blogs').delete().eq('id', id);

  if (error) {
    console.log(error);
    throw new Error('blog could not be deleted');
  }

  return data;
}
