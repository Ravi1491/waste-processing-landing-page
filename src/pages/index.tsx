import PageMetaData from '@/components/PageMetaData';
import HomeHeader from '@/components/LandingPage/HomeHeader';
import NavBar from '@/components/LandingPage/NavBar';
import { useState } from 'react';
import HomeStats from '@/components/LandingPage/HomeStats';

export default function Home() {
  const [selected, setSelected] = useState('home');

  return (
    <PageMetaData title="Landing Page">
      <div className="min-h-screen min-w-screen">
        <div className="flex flex-col">
          <div className="bg-primary py-12 h-screen">
            <NavBar selected={selected} />
            <HomeHeader />
          </div>
          <HomeStats />
        </div>
      </div>
    </PageMetaData>
  );
}
