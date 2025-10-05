import React from 'react';
import bookImage from '../../assets/books.jpg'

const Banner = () => {
    return (
      <div className='flex items-center p-16 justify-around w-full bg-gray-200 rounded-2xl'>
        <div>
          <h1 className='mb-4 text-6xl text-black'>Books are freshen up your bookshelf</h1>
          <button className="btn btn-success">View the list</button>
        </div>
        <div>
          <img className='w-6/12' src={bookImage} alt="" />
        </div>
      </div>
    );
};

export default Banner;