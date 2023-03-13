import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

import { DatasType } from "../utils/type/Type";
import Layout from "../components/Layout";
import Card from "../components/Card";
import { useDispatch } from "react-redux/es/exports";
import { setFavorites } from "../utils/redux/reducers/reducers";

const index = () => {
  const [datas, setDatas] = useState<DatasType[]>([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  function onClickDetail(id: number) {
    navigate(`/detail/${id}`);
  }

  function onClickFav(data: DatasType) {
    const checkExist = localStorage.getItem("FavUser");
    if (checkExist) {
      let parseFav: DatasType[] = JSON.parse(checkExist);
      let doubleExist = parseFav.some((item) => item.id === data.id);
      if (doubleExist) {    
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "The user is already in the favorites list",
        });
      } else {
        parseFav.push(data);
        localStorage.setItem("FavUser", JSON.stringify(parseFav));
        dispatch(setFavorites(parseFav));
        Swal.fire({
          position: "center",
          icon: "success",
          text: "User added to favorite",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } else {
      localStorage.setItem("FavUser", JSON.stringify([data]));
      Swal.fire({
        position: "center",
        icon: "success",
        text: "User added to favorite",
        showConfirmButton: false,
        timer: 1500,
      });
    }
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
              onclickDetail={() => onClickDetail(data.id)}
              onclickFav={() => onClickFav(data)}
              nameButton="Add to favorite"
            />
          );
        })}
      </div>
    </Layout>
  );
};

export default index;
