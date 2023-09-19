import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Gymer from './Pages/components/assets/asd.png';
const Layout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return ( 
    <>
      <nav
        className="flex w-full 	 bg-[#1d1d1d] p-5 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-center"
        data-te-navbar-ref
      >
        <div className="flex w-full flex-wrap  	px-3">
          <div className="flex ">
            {/* <!-- Hamburger menu button --> */}
            <button
              id="hamburgerButton"
              className="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
              type="button"
              onClick={toggleMobileMenu}
            >
              {/* <!-- Hamburger menu icon --> */}
              <span className="w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-7 w-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </span>
            </button>
          </div>

          {/* <!-- Navigation links --> */}
          <div
            className={`${
              isMobileMenuOpen ? "" : "hidden"
            } w-full lg:flex lg:pr-[5rem] p-6 lg:justify-end`}
            id="navbarSupportedContentY"
            data-te-collapse-item
          ><img src={Gymer} alt="Gymer-logo" className="w-[20rem] h-[5rem] absolute top-5 left-5 "/>
            <ul className="flex flex-col lg:justify-end  justify-items-end	  text-xl  text-white  lg:flex-row">
              <li className=" lg:mb-0 lg:pr-10" data-te-nav-item-ref>
                <Link
                  to="/"
                  className="  "
                >
                  Home
                </Link>
              </li>
              <li className=" lg:mb-0 lg:pr-4" data-te-nav-item-ref>
                <Link to="Contact">Contact</Link>
              </li>
              <li className="mb-4 lg:mb-0 lg:pr-4" data-te-nav-item-ref>
                <Link className="" to="Pricing">
                  Pricing
                </Link>
              </li>
              <li className="mb-2 lg:mb-0 lg:pr-4" data-te-nav-item-ref>
                <Link className="" to="About">
                  About
                </Link>
              </li>
              <li className="mb-2 lg:mb-0 lg:pr-4" data-te-nav-item-ref>
                <Link className="" to="About">
                  Trainer
                </Link>
              </li>
              <li className="mb-2 lg:mb-0" data-te-nav-item-ref>
                <Link className="" to="About">
                  FACILITY
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
