import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import { isAxiosError } from 'axios';
import { useSnackbar } from 'notistack';
import { useGistForks } from '../../services/gist';

const Container = styled('div')`
  display: flex;
  gap: 1rem;
`;

const ForkContent = styled(CardContent)`
  padding-top: 0;
`;

interface IGistForksProps {
  id: string;
}

const GistForks = (props: IGistForksProps) => {
  const { enqueueSnackbar } = useSnackbar();
  const { id } = props;
  const { data, isLoading, error } = useGistForks(id);

  useEffect(() => {
    if (error && isAxiosError(error)) {
      enqueueSnackbar(error.response?.data?.message || error.message, {
        variant: 'error',
        autoHideDuration: 3000,
      });
    }
  }, [error, enqueueSnackbar]);

  if (isLoading) {
    return (
      <ForkContent>
        <Container>
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="circular" width={40} height={40} />
        </Container>
      </ForkContent>
    );
  }
  return (
    <ForkContent>
      <Container>
        {data?.length === 0 && (
          <Typography color="red" variant="subtitle2">
            No Forks available
          </Typography>
        )}
        {data?.map((val) => (
          <Avatar
            key={val.id}
            alt={val.owner.login}
            src={val.owner.avatar_url}
            component="a"
            href={val.html_url}
            rel="noopener noreferrer"
            target="_blank"
          />
        ))}
      </Container>
    </ForkContent>
  );
};

export default GistForks;
