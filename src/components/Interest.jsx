import React from 'react';
import GlassCard from './Glasscard';

const Interest = () => {
  return (
    <div className="lg:m-10">
        <h3 className="text-pink text-2xl text-center mt-12 mb-6">
        Pourquoi avoir un site web ? 
      </h3>
      <div className='lg:grid grid-cols-1 gap-4'>
        <GlassCard />
      </div>
    </div>
  )
}

export default Interest