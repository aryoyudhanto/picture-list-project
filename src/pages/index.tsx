import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { DatasType } from "../utils/Type";
import Layout from "../components/Layout";
import Card from "../components/Card";

const index = () => {
  const [datas, setDatas] = useState<DatasType[]>([]);
  const navigate = useNavigate()

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

  function onclickDetail(id: number){
    navigate(`/detail/${id}`)
  }

  return (
    <Layout>
      <p className="text-2xl font-bold text-black mx-5 mt-12 mb-5">User List</p>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3 xl:grid-cols-3 xl:gap-3 mx-5 my-3">
        {datas.map((data) => {
          return (
            <Card
              key={data.id}
              name={data.name}
              username={data.username}
              onclickDetail={()=>onclickDetail(data.id)}
            />
          );
        })}
      </div>
    </Layout>
  );
};

export default index;
