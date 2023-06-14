import React from "react";
import hero from "../../images/hero-banner.png";
import { TbMessage2 } from "react-icons/tb";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri";

function Header() {
  return (
    <header className=" dark:bg-gray-900">
      <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <span className="text-white text-sm italic">
              Powered by WhatsApp Cloud API
            </span>
            <h1 className="text-3xl font-semibold tracking-wide  text-white lg:text-4xl">
              We help businesses connect with their customers.
            </h1>
            <p className="mt-4  text-gray-300">
              Whatso helps businesses connect with their customers through
              Messages & WordPress.
            </p>
            <div className="grid gap-6 mt-8 sm:grid-cols-2">
              <div className="flex items-center text-gray-200">
                <svg
                  className="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="mx-3">Premium selection</span>
              </div>

              <div className="flex items-center text-gray-200">
                <svg
                  className="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="mx-3">Insurance</span>
              </div>

              <div className="flex items-center text-gray-200">
                <svg
                  className="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="mx-3">All legal documents</span>
              </div>

              <div className="flex items-center text-gray-200">
                <svg
                  className="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="mx-3">From US glasses dealers</span>
              </div>

              <div className="flex items-center text-gray-200">
                <svg
                  className="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="mx-3">Payment Security</span>
              </div>

              <div className="flex items-center text-gray-200">
                <svg
                  className="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="mx-3">No setup fee</span>
              </div>
            </div>
            <button
              type=""
              className="px-6 bg-green-300 text-xl font-bold py-1 rounded-full mt-8"
            >
              Get Start
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img
            className="object-fill h-full max-w-2xl rounded-md"
            src={hero}
            alt="glasses"
          />
        </div>
      </div>
      <div className="my-8 py-10 grid grid-cols-1 md:grid-cols-3 md:gap-6 px-14 mx-10 ">
        <div className="px-14 py-6 bg-white rounded-2xl">
          <div className="flex justify-center items-center py-4">
            <TbMessage2 className="text-red-400" size={60} />
          </div>
          <h2 className="text-2xl text-center font-bold">10M+</h2>
          <p className="text-xl text-center">Monthly Messages</p>
        </div>
        <div className="px-14  py-6 bg-white   rounded-2xl">
          <div className="flex justify-center items-center py-4">
            <BsFillPersonVcardFill className="text-red-400" size={60} />
          </div>
          <h2 className="text-2xl font-bold text-center">1000+</h2>
          <p className="text-xl text-center">Customers Serve</p>
        </div>
        <div className="px-14 py-6 bg-white  rounded-2xl">
          <div className="flex justify-center items-center py-4">
            <RiCustomerService2Fill className="text-red-400" size={60} />
          </div>
          <h2 className="text-2xl font-bold text-center">100+</h2>
          <p className="text-xl text-center">Client Serve</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
