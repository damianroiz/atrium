import PageHeader from '../../Components/PageHeader';
import BlogCard from '../../Components/BlogCard';
import styled from 'styled-components';

const StyledLink = styled.a`
  font-size: 1.5rem;
  color: #000;
`;

export default function Blog() {
  return (
    <>
      <PageHeader title="Blog" />
      <BlogCard
        img={
          'https://tzxlnpsumiqvxelgwwlf.supabase.co/storage/v1/object/public/posts-images/band-stretching.jpg'
        }
        title={
          'Unraveling the Truth About Joint Cracking: Insights from Physiotherapy'
        }
        tags={['Lifestyle', 'Fitness']}
        date={'December 21, 2024'}
        content={
          'Joint cracking is a familiar sensation for many, often bringing about instant relief or a sense of release. But amidst the commonality of this experience, misconceptions abound. Let’s delve into'
        }
      />
      <BlogCard
        img={
          'https://tzxlnpsumiqvxelgwwlf.supabase.co/storage/v1/object/public/posts-images/people-jogging.jpg'
        }
        title={'Understanding Heel Pain in Runners'}
        tags={['Fitness', 'Running']}
        date={'November 21, 2024'}
        content={
          'Heel pain is a common complaint among runners, often leading to discomfort and hindrance in their training routines. While plantar fasciitis is a well-known cause, it’s crucial to'
        }
      />
    </>
  );
}
