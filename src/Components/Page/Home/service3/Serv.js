import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ServCart from "./ServCart";

const Serv = () => {
  const [api, setapi] = useState([]);
  useEffect(() => {
    fetch(`https://e-theacher-server.vercel.app/searvices?lemet=3`)
      .then((res) => res.json())
      .then((data) => setapi(data));
  }, []);
  return (
    <div className="my-6">
      <div className="justify-center  md:grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-5 my-6">
        {api.map((ser) => (
          <ServCart key={ser._id} data={ser}></ServCart>
        ))}
      </div>

      {api.length === 0 ? undefined : (
        <div className="justify-center text-center  mx-auto shadow-lg  mb-24 items-center w-36">
          <Link to="/services">
            <button className="btn btn-primary  shadow-orange-800-500/50  w-36 shadow-lg shadow-cyan-500/50">
              see all
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Serv;
