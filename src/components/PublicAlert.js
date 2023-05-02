import React from "react";

import textmonia from "../image/textmonia.png";

import { motion, useScroll } from "framer-motion";

function PublicAlert() {
  const scrollYProgress = useScroll();
  console.log(scrollYProgress);

  return (
    <div className="flex  flex-col justify-center items-center ">
      <div className="h-[300px] w-full">
        <div className="flex justify-center w-full bg-public h-[300px] bg-cover bg-center">
          <div className="flex relative justify-center items-center  w-[150px] h-[150px] mt-[225px]  rounded-full bg-white shadow-xl">
            <svg
              width="65"
              height="71"
              viewBox="0 0 65 71"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M44.3548 0.0749277C44.9979 0.235543 45.5508 0.644948 45.8921 1.21314C46.2334 1.78132 46.3351 2.46179 46.1748 3.10493L44.9248 8.10493C44.8517 8.42998 44.7143 8.73713 44.5208 9.00832C44.3272 9.27952 44.0814 9.5093 43.7978 9.68415C43.5142 9.859 43.1985 9.9754 42.8693 10.0265C42.5401 10.0776 42.2039 10.0624 41.8807 9.98174C41.5574 9.90109 41.2535 9.75663 40.9869 9.55687C40.7202 9.3571 40.4962 9.10605 40.328 8.81847C40.1597 8.53089 40.0507 8.21258 40.0072 7.88225C39.9637 7.55193 39.9867 7.21624 40.0748 6.89493L41.3248 1.89493C41.4855 1.25187 41.8949 0.69892 42.463 0.357632C43.0312 0.0163438 43.7117 -0.0853427 44.3548 0.0749277ZM59.2698 5.73493C59.7385 6.20375 60.0018 6.83952 60.0018 7.50243C60.0018 8.16534 59.7385 8.80111 59.2698 9.26993L54.2698 14.2699C54.0392 14.5087 53.7634 14.6992 53.4583 14.8302C53.1533 14.9612 52.8253 15.0302 52.4933 15.0331C52.1614 15.0359 51.8322 14.9727 51.5249 14.847C51.2177 14.7213 50.9386 14.5356 50.7038 14.3009C50.4691 14.0662 50.2835 13.7871 50.1578 13.4798C50.0321 13.1726 49.9688 12.8434 49.9717 12.5114C49.9746 12.1795 50.0436 11.8514 50.1746 11.5464C50.3056 11.2414 50.4961 10.9655 50.7348 10.7349L55.7348 5.73493C56.2037 5.26625 56.8394 5.00296 57.5023 5.00296C58.1652 5.00296 58.801 5.26625 59.2698 5.73493ZM21.4198 60.1649C22.6746 62.254 24.6491 63.813 26.9722 64.549C29.2954 65.2849 31.8074 65.1473 34.0362 64.1618C36.265 63.1763 38.0572 61.4109 39.0762 59.1972C40.0952 56.9835 40.2707 54.4739 39.5698 52.1399L21.4198 60.1649ZM16.8198 62.1949L11.8298 64.4049C10.5388 64.9753 9.10544 65.142 7.71793 64.8832C6.33042 64.6245 5.05354 63.9523 4.05484 62.9549L2.05483 60.9599C1.05855 59.968 0.385493 58.6981 0.12404 57.3167C-0.137413 55.9354 0.0249588 54.5073 0.589835 53.2199L19.9448 9.17993C20.4034 8.13995 21.1084 7.22728 21.9988 6.5208C22.8891 5.81432 23.9381 5.33527 25.0551 5.12507C26.1721 4.91486 27.3235 4.97981 28.4098 5.31431C29.4961 5.64881 30.4846 6.24279 31.2898 7.04493L57.9498 33.6249C58.753 34.426 59.3487 35.4108 59.6852 36.4941C60.0217 37.5774 60.089 38.7264 59.8811 39.8416C59.6733 40.9567 59.1966 42.0043 58.4924 42.8936C57.7881 43.7829 56.8777 44.487 55.8398 44.9449L44.1648 50.1049C45.399 53.6617 45.2505 57.5525 43.7489 61.0048C42.2473 64.4572 39.5025 67.2187 36.0592 68.741C32.616 70.2634 28.7262 70.4353 25.162 69.2226C21.5979 68.0099 18.6201 65.5014 16.8198 62.1949ZM62.4998 19.9999H57.4998C56.8368 19.9999 56.2009 20.2633 55.7321 20.7322C55.2632 21.201 54.9998 21.8369 54.9998 22.4999C54.9998 23.163 55.2632 23.7989 55.7321 24.2677C56.2009 24.7365 56.8368 24.9999 57.4998 24.9999H62.4998C63.1629 24.9999 63.7988 24.7365 64.2676 24.2677C64.7364 23.7989 64.9998 23.163 64.9998 22.4999C64.9998 21.8369 64.7364 21.201 64.2676 20.7322C63.7988 20.2633 63.1629 19.9999 62.4998 19.9999ZM24.5248 11.1899L5.16483 55.2299C5.00477 55.5942 4.95874 55.9984 5.03282 56.3893C5.1069 56.7802 5.2976 57.1395 5.57983 57.4199L7.58483 59.4199C7.87054 59.7039 8.23534 59.895 8.63146 59.9681C9.02757 60.0413 9.43655 59.9931 9.80483 59.8299L53.8148 40.3699C54.1079 40.2402 54.365 40.0412 54.564 39.7899C54.763 39.5387 54.8978 39.2428 54.9568 38.9278C55.0159 38.6128 54.9974 38.2882 54.903 37.9819C54.8086 37.6757 54.641 37.397 54.4148 37.1699L27.7648 10.5799C27.5354 10.3518 27.2541 10.1828 26.9449 10.0873C26.6358 9.99185 26.3081 9.9728 25.99 10.0318C25.6719 10.0908 25.3729 10.2261 25.1186 10.4261C24.8642 10.626 24.6622 10.8847 24.5298 11.1799L24.5248 11.1899Z"
                fill="#377D97"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* publicanouncement */}
      <motion.div className=" w-full grad   flex justify-center px-[20%] py-[100px] itmes-center flex-col">
        <div className=" flex  w-full items-center justify-center text-md font-bold mb-4">
          Public alert
        </div>
        <div>
          The website aims to create a safer community by offering resources on
          crime prevention tips and real-time alerts on dangerous situations.
          Users can report crimes easily and efficiently through a simple
          reporting system, and the website is committed to working closely with
          law enforcement agencies to assist in solving crimes and bringing
          perpetrators to justice.
        </div>
      </motion.div>

      {/* missing peaple */}

      <div className=" flex bg-[#FFA336] flex-col items-center w-full px-30 text-[#377D97] justify-center">
        <div className="flex justify-center pb-8 text-[2em] text-[#377D97]  font-bold">
          Missing Peaple
        </div>
        <div className=" flex  px-10 py-3 w-full justify-between items-center">
          <div className=" flex  justify-center">
            <button className="flex  justify-center items-center bg-white w-[80px] h-[80px] rounded-full shadow">
              <svg
                width="41"
                height="26"
                viewBox="0 0 41 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.9062 25.5522C19.6006 26.0036 20.3034 26.0299 21.0145 25.6313C21.7256 25.2327 22.0819 24.6161 22.0832 23.7813V15.0834H38.7499C39.3402 15.0834 39.8353 14.8834 40.2353 14.4834C40.6353 14.0834 40.8346 13.589 40.8332 13.0001C40.8332 12.4098 40.6332 11.9147 40.2332 11.5147C39.8332 11.1147 39.3388 10.9154 38.7499 10.9168H22.0832V2.21884C22.0832 1.3855 21.727 0.768835 21.0145 0.368835C20.302 -0.0311645 19.5992 -0.00477543 18.9062 0.448002L1.927 11.2293C1.26728 11.6459 0.937412 12.2362 0.937412 13.0001C0.937412 13.764 1.26728 14.3543 1.927 14.7709L18.9062 25.5522Z"
                  fill="#377D97"
                />
              </svg>
            </button>
          </div>
          <div className=" flex  rounded-full  bg-white w-[430px] items-center h-[430px] justify-center p-2 object-cover shadow-lg shadow-gray-700">
            <img
              className=" flex w-[400px]  h-[400px] justify-center object-fill"
              alt="textmonial"
              src={textmonia}
            />
          </div>
          <div className=" flex flex-col p-4 pl-20 justify-center">
            <div className=" text-xl font-bold">John Smith</div>
            <div className="w-[400px] text-center align-center">
              URGENT ALERT: Age 35, has been reported missing. He was last seen
              in the downtown area on April 25th at approximately 10:00 PM. He
              is 6 feet tall, with brown hair and green eyes, and was last seen
              wearing a black jacket and jeans. If you have any information on
              John's whereabouts, please contact our website or call the local
              police department at 555-1234. Any information, no matter how
              small, could be critical in finding John and bringing him home
              safely.m
            </div>
          </div>
          <div className=" flex  justify-center">
            <button className="flex  justify-center items-center bg-white w-[80px] h-[80px] rounded-full shadow">
              <svg
                width="41"
                height="26"
                viewBox="0 0 41 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.0936 25.5522C21.3991 26.0036 20.6964 26.0299 19.9853 25.6313C19.2741 25.2327 18.9179 24.6161 18.9165 23.7813V15.0834H2.24984C1.65957 15.0834 1.16443 14.8834 0.764428 14.4834C0.364428 14.0834 0.165122 13.589 0.166511 13.0001C0.166511 12.4098 0.366511 11.9147 0.766511 11.5147C1.16651 11.1147 1.66096 10.9154 2.24984 10.9168H18.9165V2.21884C18.9165 1.3855 19.2728 0.768835 19.9853 0.368835C20.6978 -0.0311645 21.4005 -0.00477543 22.0936 0.448002L39.0728 11.2293C39.7325 11.6459 40.0623 12.2362 40.0623 13.0001C40.0623 13.764 39.7325 14.3543 39.0728 14.7709L22.0936 25.5522Z"
                  fill="#377D97"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-center py-7">
          <div className="bg-black rounded w-[45px] h-[12px] mr-8"></div>
          <div className="bg-black rounded w-[45px] h-[12px]"></div>
          <div className="bg-black rounded w-[45px] h-[12px] ml-8"></div>
        </div>
      </div>
    </div>
  );
}

export default PublicAlert;
