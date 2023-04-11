import { Inter } from 'next/font/google';
import Header from '../components/Header';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Header />
      <div>My app</div>
    </>
  );
}
