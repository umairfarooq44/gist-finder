import { Inter } from 'next/font/google';
import Header from '../components/Header';
import Container from '@mui/material/Container';
import GistCard from '../components/GistCard';
import Search from '../components/Search';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <Search />
        <GistCard />
      </Container>
    </>
  );
}
