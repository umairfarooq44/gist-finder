import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';
import Masonry from '@mui/lab/Masonry';
import { isAxiosError } from 'axios';
import { useSnackbar } from 'notistack';
import GistCard from '../../components/GistCard';
import Search from '../../components/Search';
import { useInfiniteGists } from '../../services/gist';
import { Languages } from '@/utils/languageColorCode';

const LoadMore = styled('div')`
  display: flex;
  justify-content: center;
`;

const Home = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [user, setUser] = useState('');

  const onSearch = (searchUser: string) => {
    setUser(searchUser);
  };

  const {
    data: gists,
    isLoading,
    isLoadingMore,
    isReachingEnd,
    size,
    setSize,
    error,
  } = useInfiniteGists(user);

  const onLoadMore = () => {
    setSize(size + 1);
  };
  useEffect(() => {
    if (error && isAxiosError(error)) {
      enqueueSnackbar(error.response?.data?.message || error.message, {
        variant: 'error',
        autoHideDuration: 3000,
      });
    }
  }, [error, enqueueSnackbar]);

  return (
    <Container sx={{ marginBottom: '2rem' }}>
      <Search onSearch={onSearch} />
      {!error && (
        <Masonry columns={3} spacing={3}>
          {user && isLoading ? (
            <>
              <Skeleton variant="rectangular" width={345} height={270} />
              <Skeleton variant="rectangular" width={345} height={270} />
              <Skeleton variant="rectangular" width={345} height={270} />
            </>
          ) : (
            gists.map((gist) => (
              <GistCard
                key={gist.id}
                id={gist.id}
                files={Object.values(gist.files)}
                description={gist.description}
                avatarUrl={gist.owner.avatar_url}
                languages={gist.languages as Languages[]}
              />
            ))
          )}
        </Masonry>
      )}
      {user && !isReachingEnd && !error && (
        <LoadMore>
          <Button
            onClick={onLoadMore}
            variant="outlined"
            disabled={isLoadingMore}
            startIcon={
              isLoadingMore && <CircularProgress size={16} color="inherit" />
            }
          >
            Load More
          </Button>
        </LoadMore>
      )}
    </Container>
  );
};

export default Home;
