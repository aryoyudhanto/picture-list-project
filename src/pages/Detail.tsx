import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import Layout from "../components/Layout";
import { DatasType, DetailDatasType } from "../utils/Type";

const Detail = () => {
  const [datas, setDatas] = useState<DatasType[]>([]);
  const [detail, setDetail] = useState<DetailDatasType>({});
  const { id } = useParams();
  console.log(id);

  const users = datas;
  const user = users.find((user) => user.id === parseInt(id ? id : "1"));

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        const { data } = res;
        console.log(data);
        setDatas(data);
        setDetail(data);
      })
      .catch((err) => {
        console.log(err);
        const { message } = err;
        console.log(message);
      });
  }

  return (
    <Layout>
      <p className="text-2xl font-bold text-black mx-5 mt-12 mb-5">
        Detail User
      </p>
      <div className="w-full">
        <div className="h-full bg-blue-500 my-3 mx-5 md:mx-16 rounded-2xl opacity-80 lg:flex lg:my-10">
          <div className="w-full flex justify-center lg:items-center lg:w-1/2 ">
            <img
              src="https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/landscape-photography/CODERED_B1_landscape_P2d_714x348.jpg.img.jpg"
              className="my-10 rounded-2xl px-5"
            />
          </div>
          <div className="flex w-full lg:w-1/2 justify-center pb-5 px-5 lg:py-10 lg:justify-start">
            <div className="w-full">
              <p className="text-center text-3xl md:text-5xl font-bold uppercase text-black">
                {user?.name}
              </p>
              <p className="text-center text-md md:text-xl font-semibold lowercase mb-10 italic text-black">
                @{user?.username}
              </p>
              <p className="text-left text-md md:text-xl pb-2 font-semibold text-black">
                Email:{" "}
                <span className="font-normal lowercase">{user?.email} </span>
              </p>
              <p className="text-left text-md md:text-xl pb-2 font-semibold text-black">
                Address:{" "}
                <span className="font-normal">{`${user?.address.street}, ${user?.address.suite}, ${user?.address.city}, ${user?.address.zipcode}`}</span>
              </p>
              <p className="text-left text-md md:text-xl pb-2 font-semibold text-black">
                Phone: <span className="font-normal">{user?.phone}</span>
              </p>
              <p className="text-left text-md md:text-xl pb-2 font-semibold text-black">
                Company:{" "}
                <span className="font-normal">{user?.company.name}</span>
              </p>
              <p className="text-left text-md md:text-xl pb-10 font-semibold text-black">
                Website:{" "}
                <span className="font-normal lowercase">{user?.website}</span>
              </p>
              <Link to="/">
                <button className="mb-5 md:mb-0 btn w-1/2 md:w-1/4 capitalize bg-white border-none text-black text-lg md:text-xl hover:scale-105 hover:bg-[#f5f5f5]">
                  Back
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Detail;
