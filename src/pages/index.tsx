import PageMetaData from '@/components/PageMetaData';
import HomeHeader from '@/components/LandingPage/HomeHeader';
import NavBar from '@/components/LandingPage/NavBar';
import { useState } from 'react';
import HomeStats from '@/components/LandingPage/HomeStats';
import HomeCategory from '@/components/LandingPage/HomeCategory';
import HomeTopSelling from '@/components/LandingPage/HomeTopSelling';

export default function Home() {
  const [selected, setSelected] = useState('home');

  return (
    <PageMetaData title="Landing Page">
      <div className="min-h-screen min-w-screen bg-white">
        <div className="flex flex-col">
          <div className="bg-primary py-12 h-full">
            <NavBar selected={selected} />
            <HomeHeader />
          </div>
          <HomeStats />
          <HomeCategory />
          <HomeTopSelling />
        </div>
      </div>
    </PageMetaData>
  );
}
