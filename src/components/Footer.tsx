import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className={`footer items-center p-4 bg-blue-500 text-neutral-content shadow-xl`}
    >
      <div className="items-center grid grid-cols-2 w-full">
        <Link
          to="/"
          className={`btn btn-ghost normal-case text-xl text-white `}
        >
          <p>Users App</p>
        </Link>
        <div className="w-full">
          <p className="text-right mr-4 text-sm md:text-base">
            Copyright © 2023 - All right reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
