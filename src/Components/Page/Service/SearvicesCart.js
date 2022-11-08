import React from 'react';
import { Link } from 'react-router-dom';

const SearvicesCart = ({service}) => {
  const { img, _id, name, title } = service;
  return (
    <div className="max-w-xs  my-6 rounded-md mx-auto  justify-center shadow-lg shadow-cyan-500/50  items-center 2xl:ml-10 lg:ml-10 xl:ml-10  dark:bg-gray-900 dark:text-gray-100">
      <img
        src={img}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
          <p className="dark:text-gray-100">
            {title.length === 100 ? title : title.slice(0, 100) + "..."}
          </p>
        </div>
        <Link to={`/detels/${_id}`}>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-blue-400 dark:text-gray-900"
          >
            Read more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SearvicesCart;