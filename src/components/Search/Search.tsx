import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Controller, useForm } from 'react-hook-form';

interface IFormValues {
  user: string;
}

interface ISearchProps {
  onSearch: (user: string) => void;
}

const Container = styled('div')`
  margin-top: 5rem;
  margin-bottom: 2rem;
  display: flex;
  gap: 2rem;
`;

const Search = (props: ISearchProps) => {
  const { onSearch } = props;
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormValues>({ defaultValues: { user: '' } });
  const onSubmit = (data: IFormValues) => {
    onSearch(data.user);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Controller
          name="user"
          control={control}
          rules={{ required: 'Please enter user to search' }}
          render={({ field: { onChange, value } }) => (
            <TextField
              label="Search for user"
              placeholder="Search for user"
              variant="outlined"
              fullWidth
              onChange={onChange}
              value={value}
              helperText={errors?.user?.message}
              error={!!errors?.user?.message}
            />
          )}
        />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </Container>
    </form>
  );
};

export default Search;
