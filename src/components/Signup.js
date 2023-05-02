import React from "react";
import { NavLink } from "react-router-dom";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className=" flex  justify-center ">
        <div className="flex     w-[100vw] h-[100vh] bg-white rounded-l shadow-lg dark:bg-gray-800 ">
          {/* left side */}
          <div className="flex  h-full bg-center bg-cover bg-no-repeat bg-signBg2  w-2/5">
            <div className="flex  items-end bottom-0 content-end   p-10">
              <div className="flex  items-end  w-1/5">
                <NavLink to="/">
                  <button className=" flex justify-center  items-center w-[60px] h-[60px] border-2 rounded-full border-white">
                    <svg
                      width="18"
                      height="36"
                      viewBox="0 0 18 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 18L18 36V0L0 18Z" fill="white" />
                    </svg>
                  </button>
                </NavLink>
              </div>
              <div className="flex flex-col  w-4/5 text-white">
                <div className="flex flex-col">
                  <span className="font-bold text-md opacity-90">
                    Lets get you
                  </span>
                  <span className="font-bold text-xl">Signed In</span>
                </div>
                <div className="opacity-80 w-[400px]">
                  {" "}
                  Make your design looks more attractiv with 3d abstract
                  geometric digital art
                </div>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="flex justify-center bg-white items-center rounded-l-[30px] p-40 pt-30 -ml-[30px] border  w-[calc(60%+30px)]">
            <div className="w-full px-6 py-8 md:px-8 ">
              <div className="flex justify-start items-center w-full text-3xl leading-[72px]  font-bold text-[#377D97]">
                Create Acount
              </div>
              {/* facebook and google */}
              <div className="flex flex-row w-full mt-10 justify-between">
                <div className="flex flex-row border p-2 w-[230px] justify-center">
                  <div>
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_660_17)">
                        <path
                          d="M29.4326 15.2807C29.4326 14.0516 29.3328 13.1547 29.117 12.2246H15.082V17.7721H23.3202C23.1542 19.1507 22.2573 21.2269 20.2641 22.622L20.2362 22.8077L24.6738 26.2455L24.9812 26.2762C27.8048 23.6685 29.4326 19.8317 29.4326 15.2807Z"
                          fill="#4285F4"
                        />
                        <path
                          d="M15.082 29.897C19.1181 29.897 22.5063 28.5682 24.9812 26.2762L20.2641 22.622C19.0018 23.5023 17.3076 24.1169 15.082 24.1169C11.129 24.1169 7.77394 21.5093 6.57795 17.905L6.40265 17.9199L1.78837 21.4909L1.72803 21.6587C4.1862 26.5418 9.23547 29.897 15.082 29.897Z"
                          fill="#34A853"
                        />
                        <path
                          d="M6.57769 17.905C6.26212 16.9749 6.07948 15.9782 6.07948 14.9485C6.07948 13.9187 6.26212 12.9221 6.56109 11.992L6.55273 11.7939L1.88063 8.16553L1.72777 8.23824C0.714637 10.2646 0.133301 12.5401 0.133301 14.9485C0.133301 17.3569 0.714637 19.6323 1.72777 21.6587L6.57769 17.905Z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M15.082 5.78004C17.889 5.78004 19.7824 6.99252 20.8621 8.00576L25.0809 3.8866C22.4899 1.47824 19.1181 0 15.082 0C9.23547 0 4.1862 3.35508 1.72803 8.23821L6.56135 11.992C7.77394 8.38775 11.129 5.78004 15.082 5.78004Z"
                          fill="#EB4335"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_660_17">
                          <rect
                            width="29.316"
                            height="30"
                            fill="white"
                            transform="translate(0.131836)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="ml-2"> countinue with google</div>
                </div>
                <div className="flex flex-row border p-2 w-[230px] justify-center items-center">
                  <div>
                    <svg
                      width="17"
                      height="30"
                      viewBox="0 0 17 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.6901 29.9966V16.3153H15.2824L15.97 10.9835H10.6901V7.57926C10.6901 6.03561 11.1189 4.98353 13.3327 4.98353L16.1561 4.98222V0.213528C15.6675 0.148787 13.9917 0.00366211 12.0419 0.00366211C7.97116 0.00366211 5.18424 2.48831 5.18424 7.05148V10.9836H0.580078V16.3154H5.1841V29.9967L10.6901 29.9966Z"
                        fill="#3C5A9A"
                      />
                    </svg>
                  </div>
                  <div className="ml-2"> countinue with facebook</div>
                </div>
              </div>
              {/* or enter */}
              <div className="flex items-center justify-center mt-5">
                <span className="w-[20px] mr-4 border-b dark:border-gray-600 "></span>
                or
                <span className="w-[20px] ml-4 border-b dark:border-gray-600 "></span>
              </div>
              {/* user inputs */}
              <div className="mt-5">
                <input
                  id="LoggingEmailAddress"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border-b border-gray-800 focus:border-b-blue-400 focus:border-b-4 focus:outline-none "
                  type="text"
                  placeholder="Full name"
                />
              </div>
              <div className="mt-4">
                <input
                  id="LoggingEmailAddress"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border-b border-gray-800 focus:border-b-blue-400 focus:border-b-4 focus:outline-none "
                  type="email"
                  placeholder="Enter your Email"
                />
              </div>
              <div className="mt-4">
                <input
                  id="loggingPassword"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border-b border-gray-800 focus:border-b-blue-400 focus:border-b-4 focus:outline-none "
                  type="password"
                  placeholder="Password"
                />
              </div>
              {/* log in button */}
              <div className=" mt-10 flex justify-center">
                <button className="w-full align-middle   font-bold text-xl  tracking-wide text-white   bg-[#377D97] ">
                  Log In
                </button>
              </div>
              <div className="flex flex-row justify-start mt-10  font-bold">
                <p className=" font-normal leading-[36px] tracking-normal text-left ">
                  Already have an account?
                </p>

                <button className=" text-[#377D97]  hover:underline ">
                  <NavLink to="/signIn"> Sign In</NavLink>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
