import Image from 'next/image';
import React from 'react';

import MagokitPack from '@/assets/images/Magobox-mini-Fullset.png';
import CompostingEcoBali from '../../assets/images/Composting-Ecobali.png';
import CompostingTools2 from '../../assets/images/Composting-tools-2.png';
import WasteSorters from '../../assets/images/Mesin-Conveyor-Belt.png';
import BiogasStove from '../../assets/images/Home-Biogas.png';
import WasteBin2in1 from '../../assets/images/Flip-2in1-1.png';

const HomeTopSelling = () => {
  const topSellingData = [
    {
      title: 'Magokits Pack',
      price: 'Rp. 150.000',
      img: MagokitPack,
    },
    {
      title: 'Composing Tools',
      price: 'Rp. 1.550.000',
      img: CompostingEcoBali,
    },
    {
      title: 'Composter Full Pack',
      price: 'Rp. 300.000',
      img: CompostingTools2,
    },
    {
      title: 'Waste Sorters',
      price: 'Rp. 15.000.000',
      img: WasteSorters,
    },
    {
      title: 'Biogas Stove',
      price: 'Rp. 4.000.000',
      img: BiogasStove,
    },
    {
      title: 'Waste Bin 2in1',
      price: 'Rp. 300.000',
      img: WasteBin2in1,
    },
  ];

  return (
    <div className="flex items-center justify-center flex-col my-10 w-8/12 gap-10 mx-auto text-[#393E46]">
      <div className="text-center leading-7 mb-4 font-poppins">
        <p className="text-xl">Top Selling</p>
        <p className="text-2xl font-bold">Water Processing Product</p>
      </div>
      <div className="flex flex-wrap items-center justify-between text-left font-poppins gap-8">
        {topSellingData.map((product, index) => (
          <div key={index} className="flex">
            <div className="flex flex-col">
              <Image src={product.img} alt="img" width={300} />
              <div className="bg-primary p-4 text-white rounded-b-2xl">
                <p className="font-semibold text-lg">{product.title}</p>
                <p>{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeTopSelling;
