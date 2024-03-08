import HomeHeaderIcon from '@/assets/HomeHeaderIcon';
import React from 'react';

const HomeHeader = () => {
  return (
    <div className="flex flex-col mt-16 mx-48">
      <div className="flex items-center justify-center">
        <div className="flex flex-col mx-6 pr-8">
          <div className="text-white text-start my-7 font-poppins">
            <div className="leading-loose">
              <p className="font-semibold text-lg">Hi Folks!</p>
              <p className="text-3xl font-bold">
                Inovation Dedication <br /> and Sustainable Solution
              </p>
            </div>
            <div>
              <p className="mt-6">
                Lorem ipsum dolor sit amet consectetur. Nisl donec tortor volutpat id pharetra
                ultricies mauris. Eget augue at egestas et consequat quis ultricies. At vel aenean
                posuere neque a fermentum donec eros ut. Nullam mi egestas sed facilisis.
              </p>
            </div>
          </div>
          <div>
            <button className="border-2 px-4 text-center py-1 font-poppins font-semibold text-sm text-white rounded-lg">
              View Details
            </button>
          </div>
        </div>
        <div className="flex items-end mx-auto">
          <HomeHeaderIcon width={350} height={350} />
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
