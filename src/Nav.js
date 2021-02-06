import React, { useState, useEffect } from "react";
import "./Nav.css";
import { useHistory } from "react-router-dom";
import { auth } from "./firebase";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function Nav() {
  const [show, handleShow] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const history = useHistory();
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  const handleDropdown = () => {
    if (!dropdown) {
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <div className="nav__contents1">
          <img
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt=""
            className="nav__logo"
            onClick={() => history.push("/")}
          />
          <ul className="nav__contents1-navItems">
            <li
              style={{ fontWeight: "bolder" }}
              onClick={() => history.push("/")}
            >
              Home
            </li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>News & Popular</li>
            <li>My List</li>
          </ul>
        </div>
        <div className="nav__contents2">
          <div className="nav__contents2-profile" onClick={handleDropdown}>
            <img
              onClick={() => history.push("/profile")}
              src="https://occ-0-3934-3933.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABa4D3GTp_NJnmsRwEPccmkPZWlwBTq-sKIpw1gOo1zbhAcixgwzKnVm_87jCYX3hQsrIZesG79mmISXxs_NrXAM.png?r=88c"
              alt=""
              className="nav__avatar"
            />
            <ArrowDropDownIcon style={{ color: "white", size: 40 }} />
            {dropdown && (
              <div
                className="nav__account-dropdown"
                onMouseLeave={handleDropdown}
              >
                <ul className="nav__dropdown-profiles">
                  <li className="nav__dropdown-profile">
                    <img
                      src="https://occ-0-3934-3933.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABeeinKf4qjR-VAaPOviRjcglAoSBnJKs2fY1tfA0nEj-xw-O_KK3gcSUYa2BOh9hE6ThxPEvcS4djBufuLM2ZV0.png?r=535"
                      alt=""
                    />
                    <p>Avneesh</p>
                  </li>
                  <li className="nav__dropdown-profile">
                    <img
                      src="https://occ-0-3934-3933.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABZIK6jqsRHlhlEmDoON8jYhl3g9VML7tmyNKM-HIpNkeAJJRKEyUVCig6fqILzcM_dspEFHOczXgfQgtHCGxiUI.png?r=a29"
                      alt=""
                    />
                    <p>Sonny</p>
                  </li>
                  <li className="nav__dropdown-profile">
                    <img
                      src="https://occ-0-3934-3933.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABa4D3GTp_NJnmsRwEPccmkPZWlwBTq-sKIpw1gOo1zbhAcixgwzKnVm_87jCYX3hQsrIZesG79mmISXxs_NrXAM.png?r=88c"
                      alt=""
                    />
                    <p>Jay</p>
                  </li>
                  <li className="nav__dropdown-profile">
                    <img
                      src="https://occ-0-3934-3933.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABeWhh90Jhr88FfkPPsQzlkfArIFv6ztxOLHR3gweFd7iqahxtOH8Cqw7GuSfQJBcxkbMkINDQDx1oFQw3c2gPH0.png?r=cea"
                      alt=""
                    />
                    <p>Ben</p>
                  </li>
                  <li className="nav__dropdown-profile">
                    <img
                      src="https://occ-0-3934-3933.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABeW5HcypgSvS07jaMxDem7uIudk2vYwvVAYKBiwj9QJdRhHAxjwdVSvYJ1dlXVqACKABoBnzlVZehSG-VzhEp5A.png?r=8fb"
                      alt=""
                    />
                    <p>David</p>
                  </li>
                </ul>
                <div className="nav__dropdown-manage">
                  <p onClick={() => history.push("/profiles")}>
                    Manage Profiles
                  </p>
                </div>
                <ul className="nav__dropdown-account">
                  <li onClick={() => history.push("/profile")}>Account</li>
                  <li>Help center</li>
                  <li onClick={() => auth.signOut()}>Sign out of Netflix</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
