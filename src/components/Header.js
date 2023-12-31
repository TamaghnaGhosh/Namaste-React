import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { useNavigate, NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnState, setBtnstate] = useState("Logout");
  const onLineStatus = useOnlineStatus();
  const navigate = useNavigate();
  const { loggedInUser } = useContext(UserContext);

  // subscribing to the store using a selector
  const cartItems = useSelector((store) => store?.cart?.items);

  // console.log(cartItems)

  const ReturnHome = () => {
    navigate("");
    window.location.reload(true)
  }
  const navLinkStyle = (props) => {
    const { isActive } = props;

    return {
      color: isActive ? "#00ab41" : "black",
      textDecoration: isActive ? "none" : "none",
    }
  }
  return (
    <div className="flex items-center justify-between flex-col md:flex-row bg-gray-200 shadow-xl w-auto">
      <div className="logo-container">
        <div onClick={() => ReturnHome()}><img className="h-[80px] w-[150px] rounded-full border border-black cursor-pointer m-4" src={LOGO_URL} /></div>
      </div>
      <div className="flex items-center text-sl">
        <ul className="flex p-4 m-4 flex-col md:flex-row">
          <li className="px-4 text-lg hover:text-yellow-500">Online Status: {onLineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4 font-semibold text-lg"><NavLink to={""} style={navLinkStyle}>Home</NavLink></li>
          <li className="px-4 text-lg font-semibold"><NavLink to={"about"} style={navLinkStyle}>About us</NavLink></li>
          <li className="px-4 text-lg font-semibold"><NavLink to={"contact"} style={navLinkStyle}>contact us</NavLink></li>
          <li className="px-4 text-lg font-semibold"><NavLink to={"groceries"} style={navLinkStyle}>Grocery</NavLink></li>
          <li className="px-4 text-lg font-semibold hover:text-yellow-500 cursor-pointer"><span className="text-green-600 font-semibold text-lg ">({cartItems.length})</span> <NavLink to={"cart"} style={navLinkStyle}>Cart</NavLink></li>
          <li className="px-4 text-lg hover:text-yellow-500 font-bold">{loggedInUser}</li>
          <button
            className="button-logIn-logOut px-1 py-1 bg-slate-400 rounded-lg text-zinc-50"
            onClick={() =>
              btnState === "Logout"
                ? setBtnstate("Login")
                : setBtnstate("Logout")
            }
          >
            {btnState}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
