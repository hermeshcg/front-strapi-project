import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import api from '../../services/api';
import Posts from './Posts';
import { Container } from './styles';

const Home: React.FC = () => {
  const [posts, setPosts] = useState<
    | [
        {
          id: number;
          attributes: {
            title: string;
            cover: { data?: { attributes: { url: string } } | null };
            category: { data?: { attributes: { name: string } } | null };
          };
        }
      ]
    | undefined
  >();
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  useEffect(() => {
    api
      .get('/posts?populate=*')
      .then((res) => {
        const { data } = res;
        setPosts(data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        toast.error('An error occured, reload the page', {
          position: 'top-right',
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      });
  }, []);
  return (
    <>
      <Header />
      <Container>
        {!isLoading ? (
          <div className="posts-container">
            {posts!.map((post) => (
              <Posts
                key={post.id}
                id={post.id}
                title={post.attributes.title}
                cover={
                  post.attributes.cover.data?.attributes.url !== undefined
                    ? post.attributes.cover.data?.attributes.url
                    : ''
                }
                category={
                  post.attributes.category.data?.attributes.name !== undefined
                    ? post.attributes.category.data?.attributes.name
                    : ''
                }
              />
            ))}
          </div>
        ) : (
          <Loading />
        )}
      </Container>
    </>
  );
};

export default Home;
