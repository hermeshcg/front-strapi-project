import React from 'react';
import { Container } from './styles';
import { BsFillImageFill } from 'react-icons/bs';
interface Props {
  title: string;
  cover: string | null | undefined;
  content: string;
  category: string | null | undefined;
}

const Card = ({ title, cover, category, content }: Props) => {
  return (
    <Container>
      {cover && cover !== undefined ? (
        <img src={`http://localhost:1337${cover}`} alt={title} />
      ) : (
        <BsFillImageFill size={126} className="img-blank" color="#000" />
      )}
      <h1>{title}</h1>
      <p>{content}</p>
      <span>{category}</span>
    </Container>
  );
};

export default Card;
