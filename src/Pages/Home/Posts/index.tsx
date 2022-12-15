import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillImageFill } from 'react-icons/bs';
import { Container } from './styles';

interface Props {
  id: number;
  title: string;
  cover: string;
  category: string;
}
const Posts = ({ id, title, cover, category }: Props) => {
  return (
    <Container>
      <Link to={`/post/${id}`} key={title} className="post-card">
        {cover && cover !== undefined ? (
          <img src={`http://localhost:1337${cover}`} alt={title} />
        ) : (
          <BsFillImageFill size={126} className="img-blank" color="#000" />
        )}
        <h3>{title}</h3>
        <span>{category}</span>
      </Link>
    </Container>
  );
};

export default Posts;
