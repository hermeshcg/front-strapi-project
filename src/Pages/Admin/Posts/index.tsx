/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Card from '../../../components/Card';
import Header from '../../../components/Header';
import Table from '../../../components/Table';
import api from '../../../services/api';

import { Container } from './styles';

interface PostIE {
  id: number;
  attributes: {
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Array<PostIE> | undefined>();
  useEffect(() => {
    api.get('/posts').then((res) => {
      const { data } = res.data;
      console.log('res', data);
      setPosts(data);
    });
  }, []);
  console.log(posts);
  return (
    <>
      <Header />
      <Container>
        <Card>
          <>
            <h2>Posts</h2>
            <h2>Posts</h2>
            <Table
              th={['ID', 'Title', 'Created At', 'Updated At', 'Published At']}
            >
              <>
                {posts?.map((post) => (
                  <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.attributes.title}</td>
                    <td>{post.attributes.createdAt.slice(0, 10)}</td>
                    <td>{post.attributes.updatedAt.slice(0, 10)}</td>
                    <td>{post.attributes.publishedAt.slice(0, 10)}</td>
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

export default Posts;
