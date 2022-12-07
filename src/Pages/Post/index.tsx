import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import Card from './Card';
import { Container } from './styles';

interface PostIF {
  id: number;
}

const Posts: React.FC = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [post, setPost] = useState();
  const { id } = useParams();

  return (
    <Container>
      <Card />
      <h1>POSTS</h1>
      {!isLoading ? null : <Loading />}
    </Container>
  );
};

export default Posts;
