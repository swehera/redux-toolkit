import { Link } from "react-router-dom";
import Container from "./ui/Container";

const Header = () => {
  return (
    <div className="bg-slate-800 sticky top-0 z-50">
      <Container className=" flex justify-between py-6 px-6">
        <div>
          <Link to="/" className=" text-2xl font-bold text-white">
            TodoAPP
          </Link>
        </div>
        <div>
          <Link
            to="/alltodo"
            className=" text-white hover:text-gray-400 duration-300 font-semibold"
          >
            All-Todo
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Header;
