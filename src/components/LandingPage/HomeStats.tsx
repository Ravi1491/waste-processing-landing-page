import React from 'react';

const HomeStats = () => {
  return (
    <div className="flex items-center justify-center gap-32 my-10 mx-auto font-poppins">
      <div className="text-center">
        <p className="text-2xl font-bold">200+</p>
        <p className="text-xl font-semibold">Member</p>
      </div>
      <div className="text-center">
        <p className="text-2xl font-bold">20</p>
        <p className="text-xl font-semibold">Waste Bank</p>
      </div>
      <div className="text-center">
        <p className="text-2xl font-bold">50</p>
        <p className="text-xl font-semibold">Products</p>
      </div>
      <div className="text-center">
        <p className="text-2xl font-bold">150</p>
        <p className="text-xl font-semibold">Course Education</p>
      </div>
    </div>
  );
};

export default HomeStats;
