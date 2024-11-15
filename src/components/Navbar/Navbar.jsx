import { useId } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../components/context/UserContext";

export default function Navbar({ onSearchChange }) {
  const inputId = useId();
  const { isLoggedIn, login, logout } = useUser();

  const handleSearchInput = (e) => {
    onSearchChange(e.target.value);
  };
  return (
    <nav className="grid grid-cols-3 justify-between px-24 py-4 bg-[#DB4444] items-center">
      <ul>
        <li className="flex items-center justify-center font-serif">
          <Link to="/" className="text-[#F2F4FF] hover:text-[#702727] active:text-[#f2a1a1]">
            Home
          </Link>
        </li>
      </ul>
      <ul className="flex justify-center items-center font-serif">
        <li className="w-full">
          <input type="text" className="text-black active:text-black focus:text-black px-4 py-2 w-full" name="search" id={inputId} placeholder="Search product..." onChange={handleSearchInput} />
        </li>
      </ul>
      {!isLoggedIn ? (
        <ul className="flex gap-2 justify-end font-serif">
          <li className="text-[#F2F4FF]hover:text-[#702727] active:text-[#f2a1a1]">
            {/* <Link to="">Sign in</Link> */}
            <button onClick={login}>Sign in</button>
          </li>
          <li>
            <Link className="text-[#F2F4FF] font-serif hover:text-[#702727] active:text-[#f2a1a1]" to="/singup">
              Sign up
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="flex justify-end gap-2 font-serif">
          <li>
            <Link className="text-[#F2F4FF] hover:text-[#702727] active:text-[#f2a1a1]" to="/cart">
              Cart
            </Link>
          </li>
          <li>
            <Link to="/orders" className="text-[#F2F4FF] hover:text-[#702727]  active:text-[#f2a1a1] font-serif">
              My Orders
            </Link>
          </li>
          <li>
            <button onClick={logout} className="text-[#F2F4FF] hover:text-[#702727] active:text-[#f2a1a1] font-serif">
              Sign out
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
