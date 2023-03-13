import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";

import Card from "../components/Card";
import Layout from "../components/Layout";
import { setFavorites } from "../utils/redux/reducers/reducers";

import { RootState } from "../utils/type/Redux";
import { DatasType } from "../utils/type/Type";

const Favorite = () => {
  const dispatch = useDispatch();
  const datas = useSelector((state: RootState) => state.data.favorites);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadingPage();
  }, []);

  function loadingPage() {
    setLoading(false);
  }

  function deleteFav(data: DatasType) {
    let delDatas: DatasType[] = datas.slice();
    const filterData = delDatas.filter((item) => item.id !== data.id);

    localStorage.setItem("FavUser", JSON.stringify(filterData));
    dispatch(setFavorites(filterData));
    alert(`Delete ${data.name} from favorite list`);
  }

  return (
    <Layout>
      <p className="text-2xl font-bold text-black mx-5 mt-12 mb-5">
        Favorite List
      </p>

      {datas.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3 xl:grid-cols-3 xl:gap-3 mx-5 my-3">
            {datas.map((data) => {
              return (
                <Card
                  key={data.id}
                  name={data.name}
                  username={data.username}
                  onclickFav={() => deleteFav(data)}
                  nameButton="Delete from favorite"
                />
                );
              })
            }
          </div>
        </>
      ) : (
        <p className="text-gray-400 animate-pulse text-center text-3xl md:text-5xl capitalize font-bold my-5">
          data kosong
        </p>
      )}
    </Layout>
  );
};

export default Favorite;
