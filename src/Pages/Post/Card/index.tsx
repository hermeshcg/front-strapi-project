import React from 'react';
import { Container } from './styles';
interface Props {
  title: string;
  cover: string | null | undefined;
  content: string;
  category: string | null | undefined;
}

const Card = ({ title, cover, category, content }: Props) => {
  return <Container></Container>;
};

export default Card;
