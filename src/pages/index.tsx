import { Inter } from 'next/font/google';
import Header from '../components/Header';
import HomeContainer from '../containers/Home';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Header />
      <HomeContainer />
    </>
  );
}
