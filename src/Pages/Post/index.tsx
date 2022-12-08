import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import api from '../../services/api';
import Card from './Card';
import { Container } from './styles';

interface PostIF {
  id: number;
  attributes: {
    title: string;
    content: string;
    category?: {
      data: {
        attributes: {
          name: string;
        };
      };
    };
    cover?: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}

const Posts: React.FC = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [post, setPost] = useState<PostIF>();
  const { id } = useParams();

  useEffect(() => {
    api
      .get(`/posts/${id}?populate=*`)
      .then((res) => {
        const { data } = res.data;
        setPost(data);
        setIsLoading(false);
      })
      .catch((err) => {
        toast.error('An error occured, reload the page' + err, {
          position: 'top-right',
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      });
    return;
  }, [id]);

  return (
    <>
      <Header />
      <Container>
        {!isLoading ? (
          <Card
            title={post!.attributes.title}
            content={post!.attributes.content}
            category={
              post!.attributes.category?.data !== undefined
                ? post?.attributes.category?.data.attributes.name
                : ''
            }
            cover={
              post!.attributes.cover?.data !== undefined
                ? post?.attributes.cover?.data.attributes.url
                : ''
            }
          />
        ) : (
          <Loading />
        )}
      </Container>
    </>
  );
};

export default Posts;
