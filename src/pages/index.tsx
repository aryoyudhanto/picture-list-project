import React, { useEffect, useState } from "react";
import axios from "axios";

import { DatasType } from "../utils/Type";
import Layout from "../components/Layout";

const index = () => {
  const [datas, setDatas] = useState<DatasType[]>([]);

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
      })
      .catch((err) => {
        console.log(err);
        const { message } = err;
        console.log(message);
      });
  }
  return (
    <Layout>
      <p className="text-7xl text-red-500">Project</p>
      {datas.map((data) => {
        return (
          <div className="card card-compact w-96 bg-base-100 shadow-xl" key={data.id}>
            <figure>
              <img
                src=""
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{data.name}</h2>
              <p>{data.username}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        );
      })}
    </Layout>
  );
};

export default index;
