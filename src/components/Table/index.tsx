import { Container } from './styles';

interface Props {
  th: string[];
  children: JSX.Element;
}
const Table: React.FC<Props> = ({ th, children }) => {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            {th.map((head) => (
              <th key={head}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </Container>
  );
};

export default Table;
