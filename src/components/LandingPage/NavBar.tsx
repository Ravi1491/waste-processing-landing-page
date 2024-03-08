import LogoIcon from '@/assets/LogoIcon';
import React from 'react';

const NavBar = ({ selected }: { selected: string }) => {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white border mt-12 mx-32 py-4 px-8">
      <div>
        <LogoIcon />
      </div>
      <div className="flex gap-7 ">
        <span className={selected === 'home' ? 'text-primary font-semibold' : ''}>Home</span>
        <span className={selected === 'service' ? 'text-primary font-semibold' : ''}>Service</span>
        <span className={selected === 'about' ? 'text-primary font-semibold' : ''}>About</span>
      </div>
    </div>
  );
};

export default NavBar;
