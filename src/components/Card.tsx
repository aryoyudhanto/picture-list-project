import React, { FC } from "react";

interface CardProps {
  id?: number;
  name?: string;
  username?: string;
  onclickDetail?: () => void;
  onclickFav?: () => void;
}

const Card: FC<CardProps> = ({
  id,
  name,
  username,
  onclickDetail,
  onclickFav,
}) => {
  return (
    <div className="card bg-base-100 shadow-xl image-full mt-3 md:mt-0 hover:scale-95">
      <figure>
        <img
          src="https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/landscape-photography/CODERED_B1_landscape_P2d_714x348.jpg.img.jpg"
          onClick={onclickDetail}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title" onClick={onclickDetail}>
          {name}
        </h2>
        <p className="lowercase" onClick={onclickDetail}>
          @{username}
        </p>
        <div className="card-actions justify-end">
          <button className="btn capitalize bg-blue-500 hover:bg-blue-600 border-none hover:scale-105" onClick={onclickFav}>
            Add to Favorite
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
