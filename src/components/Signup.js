import React from "react";
import { Outlet, Link } from "react-router-dom";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="contSigncont flex justify-center ">
        <div className="flex -mt-24    w-[100vw]    h-[100vh] contSign bg-white rounded-lg contSigncontain shadow-lg dark:bg-gray-800 ">
          <div className="bg-cover bg-signBg mycover  h-[100vh] w-1/2"></div>
          <div className="flex justify-center signitem items-center  w-1/2">
            <div className="w-full px-6 py-8 md:px-8 ">
              <div className="flex justify-center items-center w-full text-3xl leading-[72px]  font-bold text-blue-600">
                Crime Report App
              </div>

              <div className="mt-4">
                <input
                  id="LoggingEmailAddress"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-[24px] dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="email"
                  placeholder="Enter your Email"
                />
              </div>
              <div className="mt-4">
                <input
                  id="loggingPassword"
                  className="block w-full px-4 py-2 text-gray-700 bg-white rounded-[24px] border  dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="mt-4">
                <input
                  id="loggingPassword"
                  className="block w-full px-4 mt-4 py-2 text-gray-700 bg-white rounded-[24px] border  dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="password"
                  placeholder="cofirm Password"
                />
              </div>
              <div className="mt-6 flex justify-center">
                <button className="w-1/2 h-[] align-middle px-6 py-3 rounded-[24px] font-bold text-xl  tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#4053F5]  hover:bg-blue-500 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                  Sign up
                </button>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

                <p
                  href="#"
                  className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
                >
                  or enter with
                </p>

                <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
              </div>
              <div className=" flex flex-row justify-between items-center px-10">
                <div
                  href="#"
                  className="flex   items-center justify-center mt-4"
                >
                  <div className="px-4 py-2">
                    <svg className=" w-[50.7px] h-[62.5px]" viewBox="0 0 40 40">
                      <path
                        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                        fill="#FFC107"
                      />
                      <path
                        d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                        fill="#FF3D00"
                      />
                      <path
                        d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                        fill="#4CAF50"
                      />
                      <path
                        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                        fill="#1976D2"
                      />
                    </svg>
                  </div>
                </div>
                <div href="#" className="flex items-center justify-center mt-4">
                  <div className="px-4  py-2">
                    <svg
                      className=" w-[50.7px]  h-[62.5px]"
                      viewBox="0 0 50.7 62.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                    >
                      <path
                        d="M32.4018 43.125C30.6163 46.1217 28.7233 49.0458 25.8407 49.0942C22.9582 49.1667 22.0332 47.185 18.7634 47.185C15.4721 47.185 14.4611 49.0458 11.7291 49.1667C8.91108 49.2875 6.78142 45.9767 4.97445 43.0525C1.29596 37.0833 -1.52206 26.0875 2.26398 18.6925C4.13549 15.0192 7.49131 12.6992 11.1268 12.6267C13.8803 12.5783 16.5047 14.7292 18.2041 14.7292C19.882 14.7292 23.0657 12.1433 26.4 12.53C27.7983 12.6025 31.7134 13.1583 34.2303 17.315C34.0367 17.46 29.5622 20.4083 29.6053 26.5225C29.6698 33.8208 35.3058 36.2617 35.3704 36.2858C35.3058 36.455 34.4669 39.7658 32.4018 43.125ZM20.1186 4.45834C21.689 2.45251 24.2919 0.93001 26.4431 0.833344C26.7227 3.66084 25.7117 6.51251 24.2058 8.54251C22.7215 10.5967 20.2692 12.1917 17.8599 11.9742C17.5372 9.19501 18.7419 6.29501 20.1186 4.45834Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
                <div href="#" className="flex items-center justify-center mt-4">
                  <div className="px-4 py-2">
                    <svg
                      className=" w-[60px] h-[60px] flex justify- center  bg-[#1877F2] rounded-full"
                      viewBox="0 0 25.66 48.28"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                    >
                      <path
                        d="M24.6777 27.6719L26.0078 19H17.6875V13.3727C17.6875 10.9998 18.8498 8.6875 22.5766 8.6875H26.3594V1.30469C26.3594 1.30469 22.9263 0.71875 19.6438 0.71875C12.7914 0.71875 8.3125 4.87188 8.3125 12.3906V19H0.695312V27.6719H8.3125V48.6355C9.86317 48.8786 11.4304 49.0004 13 49C14.5696 49.0005 16.1368 48.8786 17.6875 48.6355V27.6719H24.6777Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center text-xl font-bold">
                <p className=" font-normal leading-[36px] tracking-normal text-left ">
                  Allready have an account?
                </p>

                <button className=" text-[#4053F5] hover:underline ">
                  <Link to="/signIn">Sign In</Link>
                </button>

                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;