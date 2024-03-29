import React from "react";

const Allreviews = ({ allrevw }) => {
  const { name, userImg, text, date  } = allrevw;

  return (
    <section className="bg-gray-800 text-gray-100">
      <div className="container  2xl:text-left lg:text-left xl:text-left text-center mx-auto flex flex-col justify-center px-4 py-8  md:p-8">
        <div className="divide-y divide-gray-700">
          <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <div className="font-semibold md:col-span-5">
              <div>
                <p>{date}</p>
              </div>
              <div>
                <img
                  className="w-[80px] mx-auto 2xl:mx-0 xl:mx-0 lg:mx-0 md:mx-0 rounded-full"
                  src={userImg}
                  alt=""
                />
              </div>
            </div>
            <div className="md:pl-0 md:col-span-7">
              <h1 className="my-2">
                <span className="text-amber-500">Service Name:</span> {name}
              </h1>
              <h1 className="my-2 mt-4">
                <span className="text-green-500">Review :</span> {text}
              </h1>
            </div>
          </div>
          <p className="border"></p>
        </div>
      </div>
    </section>
  );
};

export default Allreviews;
