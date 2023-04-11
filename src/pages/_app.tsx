import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { SnackbarProvider, closeSnackbar } from 'notistack';
import { IconButton } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { SwrProvider } from '../components/SwrProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      action={(snackbarId) => (
        <IconButton
          sx={{ color: '#fff' }}
          onClick={() => closeSnackbar(snackbarId)}
        >
          <CloseRoundedIcon />
        </IconButton>
      )}
    >
      <SwrProvider>
        <Component {...pageProps} />
      </SwrProvider>
    </SnackbarProvider>
  );
}
