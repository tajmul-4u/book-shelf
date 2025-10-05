import React from 'react';
import bookImage from '../../assets/books.jpg'

const Banner = () => {
    return (
      <div className="hero bg-base-200 rounded-3xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={bookImage} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold mb-2.5">
              Books to fresh up your bookshelf.
            </h1>
            <button className="btn btn-primary">View thr List</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;