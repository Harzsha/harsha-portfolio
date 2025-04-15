import React from 'react';

const Home = () => {
  return (
    <div className='w-full rounded-b-full h-5/6'>
    <div className='flex justify-center gap-4'>
      <div className='w-60 h-60 overflow-hidden rounded-full'>
        <img
          src='/harsha.jpeg'
          alt='Harsha'
          className='w-full h-full object-cover'
        />
      </div>
      <div>item 2</div>
    </div>
    </div>
  );
};

export default Home;
