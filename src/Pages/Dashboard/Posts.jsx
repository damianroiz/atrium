import Row from './ui/Row';
import Heading from './ui/Heading';
import { useEffect } from 'react';
import { getPosts } from '../../services/apiPosts';

function Posts() {
  useEffect(() => {
    getPosts().then((posts) => console.log(posts));
  });
  return (
    <Row type="horizontal">
      <Heading as="h1">Posts</Heading>
      <p>test</p>
    </Row>
  );
}

export default Posts;