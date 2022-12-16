import React, { useEffect, useState } from 'react';
import Card from '../../../components/Card';
import Header from '../../../components/Header';
import Table from '../../../components/Table';
import api from '../../../services/api';

import { Container } from './styles';
interface CategoryIE {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
  };
}
const Category: React.FC = () => {
  const [categories, setCategories] = useState<Array<CategoryIE> | undefined>();
  useEffect(() => {
    api.get('/categories').then((res) => {
      const { data } = res.data;
      console.log('res', data);
      setCategories(data);
    });
  }, []);
  return (
    <>
      <Header />
      <Container>
        <Card>
          <>
            <h2>Categories</h2>
            <Table th={['ID', 'Title', 'Created At', 'Updated At']}>
              <>
                {categories?.map((post) => (
                  <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.attributes.name}</td>
                    <td>{post.attributes.createdAt.slice(0, 10)}</td>
                    <td>{post.attributes.updatedAt.slice(0, 10)}</td>
                  </tr>
                ))}
              </>
            </Table>
          </>
        </Card>
      </Container>
    </>
  );
};

export default Category;
