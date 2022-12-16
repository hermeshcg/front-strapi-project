import { Container } from './styles';

type Props = {
  children: JSX.Element;
};
const Card: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Card;
