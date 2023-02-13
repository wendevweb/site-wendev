import React from 'react';
import GlassCard from './Glasscard';

const Interest = () => {
  return (
    <div className="lg:m-10 p-10">
        <h3 className="text-pink text-2xl text-center mt-12 mb-6">
        Pourquoi avoir un site web ? 
      </h3>
      <p className="text-black font-quicksand text-center pb-10">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
        nisi hic error inventore, sint, voluptatem nulla qui perferendis quis
        sit laborum voluptate deserunt magnam nemo totam magni, corrupti
        quisquam delectus.
      </p>
      <div className='lg:grid grid-cols-1 gap-4'>
        <GlassCard />
      </div>
    </div>
  )
}

export default Interest