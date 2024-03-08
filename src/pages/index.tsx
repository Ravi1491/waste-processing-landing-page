import PageMetaData from '@/components/PageMetaData';
import HomeHeader from '@/components/LandingPage/HomeHeader';
import NavBar from '@/components/LandingPage/NavBar';
import { useState } from 'react';

export default function Home() {
  const [selected, setSelected] = useState('home');

  return (
    <PageMetaData title="Landing Page">
      <div className="min-h-screen min-w-screen bg-primary">
        <div className="flex flex-col">
          <NavBar selected={selected} />
          <HomeHeader />
        </div>
      </div>
    </PageMetaData>
  );
}
