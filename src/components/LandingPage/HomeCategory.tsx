import HealthTrainingIcon from '@/assets/HealthTraining';
import HeartBeatIcon from '@/assets/HeartBeatIcon';
import TrashCanIcon from '@/assets/TrashCanIcon';
import React from 'react';

const HomeCategory = () => {
  const categoryData = [
    {
      title: 'Information & Education',
    },
    {
      title: 'Course & Training',
    },
    {
      title: 'Waste Recycling',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center mx-auto w-8/12 gap-10 text-[#393E46] my-10">
      <div className="text-center font-poppins leading-7 mb-4">
        <p className="text-xl">Category</p>
        <p className="text-2xl font-bold">We offer Best Service</p>
      </div>
      <div className="flex items-center justify-between w-full h-full text-center font-poppins gap-9">
        {categoryData.map((category, index) => (
          <div
            key={index}
            className="flex w-1/3 border-l-2 border-b-2 border-r-2 rounded-xl items-center justify-center shadow-lg"
          >
            <div className="flex flex-col items-center justify-center px-2 py-10">
              {index === 0 && <HeartBeatIcon width={80} height={80} />}
              {index === 1 && <HealthTrainingIcon width={80} height={80} />}
              {index === 2 && <TrashCanIcon width={80} height={80} />}
              <div className="leading-7 pt-4">
                <p className="text-lg leading-loose font-semibold tracking-wide">
                  {category.title}
                </p>
                <p className="leading-5">
                  Built Wicket longer <br /> admire do barton <br />
                  vanity itself do in it.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCategory;
