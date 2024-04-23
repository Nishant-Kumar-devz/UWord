import { Avatar } from "./PostCard";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const AppBar = () => {
  const navigate = useNavigate();
  return (
    <div className="border-b flex justify-between px-5">
      <Link to={"/posts"}>
        <div className="font-bold border-b px-6 py-3 text-lg">UWORD</div>
      </Link>
      <div className="flex justify-center flex-col">
        <div>
          <Link to={'/publish'}>
          <button 
            onClick={()=>{
              navigate("/publish");
            }}
            type="button"
            className="focus:outline-none text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-4 py-2 me-2 mb-2">
            New
          </button>
          </Link>
          <Avatar name="Nishant" />
        </div>
      </div>
    </div>
  );
};
