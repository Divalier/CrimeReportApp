import React from "react";

class Report extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="contSigncont flex justify-center ">
        <div className="flex     w-[100vw]    h-[100vh] contSign bg-[#D9D9D9] rounded-lg contSigncontain shadow-lg dark:bg-gray-800 ">
          <div className="bg-cover bg-report mycover  h-[100vh] w-1/2"></div>
          <div className="flex justify-center signitem items-center  w-1/2">
            <div className="w-full px-6 py-8 md:px-8 ">
              <div className="flex justify-center items-center w-full text-3xl leading-[72px]  font-bold text-[#377D97]">
                Crime Report systerm
              </div>
              <div className=" grid grid-cols-2 ">
                <div className="mt-4 m-2">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-200"
                    for="LoggingEmailAddress"
                  >
                    First name
                  </label>
                  <input
                    id="LoggingEmailAddress"
                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                    type="text"
                    pattern="[0-9]-[0-9]"
                    maxlength="2"
                  />
                </div>
                <div className="mt-4 m-2">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-200"
                    for="LoggingEmailAddress"
                  >
                    Last name
                  </label>
                  <input
                    id="LoggingEmailAddress"
                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                    type="text"
                    pattern="[0-9]-[0-9]"
                    maxlength="2"
                  />
                </div>
                <div className="mt-4 m-2">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-200"
                    for="LoggingEmailAddress"
                  >
                    Email
                  </label>
                  <input
                    id="LoggingEmailAddress"
                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                    type="email"
                    pattern="[0-9]-[0-9]"
                    maxlength="2"
                  />
                </div>
                <div className="mt-4 m-2">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-200"
                    for="LoggingEmailAddress"
                  >
                    Phone
                  </label>
                  <input
                    id="LoggingEmailAddress"
                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                    type="email"
                    pattern="[0-9]-[0-9]"
                    maxlength="2"
                  />
                </div>
                <div className="mt-4 m-2">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-200"
                    for="LoggingEmailAddress"
                  >
                    Date of the crime
                  </label>
                  <input
                    id="LoggingEmailAddress"
                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                    type="date"
                    pattern="[0-9]-[0-9]"
                    maxlength="2"
                  />
                </div>
                <div className="mt-4 m-2">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-200"
                    for="LoggingEmailAddress"
                  >
                    Type of the crime
                  </label>
                  <input
                    id="LoggingEmailAddress"
                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                    type="email"
                    pattern="[0-9]-[0-9]"
                    maxlength="2"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-200"
                  for="LoggingEmailAddress"
                >
                  Description
                </label>
                <textarea
                  id="LoggingEmailAddress"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="email"
                  pattern="[0-9]-[0-9]"
                  maxlength="2"
                  height="161 px"
                />
              </div>
              <div className="mt-6 flex justify-center">
                <button className="w-1/2 h-[] align-middle px-6 py-3 rounded-[24px] font-bold text-xl  tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#377D97]  hover:bg-blue-500 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                  report the crime
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Report;
