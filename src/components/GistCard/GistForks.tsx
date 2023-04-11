import { styled } from '@mui/material/styles';
import Skeleton from '@mui/material/Skeleton';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import { useGistForks } from '../../services/gist';

const Container = styled('div')`
  display: flex;
  gap: 1rem;
`;

const ForkContent = styled(CardContent)`
  padding-top: 0;
`;

const GistForks = () => {
  const { data, isLoading, error } = useGistForks('904343');
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
        {data?.map((val) => (
          <Avatar
            alt={val.owner.login}
            src={val.owner.avatar_url}
            component="a"
            href={val.html_url}
          />
        ))}
      </Container>
    </ForkContent>
  );
};

export default GistForks;
