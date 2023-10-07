/*
Used react icons kit library for the eye  - eyeOff icons
*/

import { useState } from "react";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

const Login = () => {
  const [password, setPassword] = useState(""); //when input change we get the value of the password
  const [type, setType] = useState("password"); //to handle input type
  const [icon, setIcon] = useState(eyeOff); //to change the icon type when we pressed it

  //handle function to change the show/hide state
  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  return (
    <section className="bg-gray-50">
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <div className="w-full rounded-lg bg-white shadow sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-center text-xl font-semibold uppercase leading-6 tracking-wide text-kayra-orange md:text-4xl mb-10">
              logın
            </h1>
            <div className="flex justify-center space-x-2">
              <button className="rounded-lg border-2 border-kayra-orange px-10 py-2 text-base max-[400px]:text-sm font-semibold leading-6 text-foundation">
                Sign in
              </button>
              <button className="rounded-lg border-2 border-[#F0F0F0] px-10 py-2 text-base max-[400px]:text-sm  font-semibold leading-6 text-foundation">
                Register
              </button>
            </div>
            <form className="space-y-4 mt-4 md:space-y-6" action="#">
              <div className="space-y-4 mt-8">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-gray-900 sm:text-sm"
                  placeholder="Email address"
                  required=""
                />
                <div className="relative">
                  <input
                    type={type}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-gray-900 sm:text-sm"
                    required=""
                  />
                  <div
                    onClick={handleToggle}
                    className="absolute right-2 top-1/2 -translate-y-1/2 transform"
                  >
                    <Icon icon={icon} size={20} />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="focus:ring-3 focus:ring-primary-300 h-4 w-4 rounded border border-gray-300 bg-gray-50"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500">
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-kayra-orange underline"
                >
                  Forgot your password?
                </a>
              </div>
              <button
                type="submit"
                className="focus:ring-primary-300 w-full rounded-lg bg-kayra-orange px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-4"
              >
                Sign in
              </button>

              <div className="inline-flex w-full items-center justify-center">
                <hr className="h-px w-full border-0 bg-gray-200" />
                <span className="absolute left-1/2 -translate-x-1/2 bg-white px-3 text-sm font-extralight text-slate-300">
                  {" "}
                  Other Options{" "}
                </span>
              </div>

              <div className="flex flex-row space-x-2">
                <button className="w-full rounded-lg border border-[#D9D9D9] bg-white px-1 py-2 text-base font-normal text-black">
                  <div className="flex items-center justify-center space-x-2">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1_1047)">
                        <path
                          d="M29.3025 15.2806C29.3025 14.0515 29.2028 13.1546 28.9869 12.2245H14.952V17.772H23.1902C23.0242 19.1506 22.1272 21.2268 20.1341 22.6219L20.1061 22.8076L24.5437 26.2454L24.8512 26.2761C27.6747 23.6683 29.3025 19.8315 29.3025 15.2806Z"
                          fill="#4285F4"
                        />
                        <path
                          d="M14.952 29.8969C18.988 29.8969 22.3763 28.5681 24.8512 26.2761L20.1341 22.6219C18.8718 23.5022 17.1776 24.1167 14.952 24.1167C10.999 24.1167 7.64389 21.5091 6.4479 17.9049L6.27259 17.9198L1.65832 21.4908L1.59798 21.6586C4.05614 26.5417 9.10542 29.8969 14.952 29.8969Z"
                          fill="#34A853"
                        />
                        <path
                          d="M6.4479 17.905C6.13233 16.9749 5.94969 15.9782 5.94969 14.9485C5.94969 13.9187 6.13233 12.9221 6.4313 11.992L6.42294 11.7939L1.75084 8.16553L1.59798 8.23824C0.584845 10.2646 0.00350952 12.5401 0.00350952 14.9485C0.00350952 17.3569 0.584845 19.6323 1.59798 21.6587L6.4479 17.905Z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M14.952 5.78004C17.7589 5.78004 19.6524 6.99252 20.732 8.00576L24.9508 3.8866C22.3598 1.47824 18.988 0 14.952 0C9.10542 0 4.05614 3.35508 1.59798 8.23821L6.4313 11.992C7.64389 8.38775 10.999 5.78004 14.952 5.78004Z"
                          fill="#EB4335"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_1047">
                          <rect width="29.32" height="30" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="">Google</span>
                  </div>
                </button>
                <button className="w-full rounded-lg border border-[#D9D9D9] bg-white px-1 py-2 text-base font-normal text-black">
                  <div className="flex items-center justify-center space-x-2">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1_1054)">
                        <path
                          d="M30 15C30 6.71578 23.2842 0 15 0C6.71578 0 0 6.71566 0 15C0 22.4869 5.48531 28.6925 12.6562 29.8178V19.3359H8.84766V15H12.6562V11.6953C12.6562 7.93594 14.8957 5.85938 18.3219 5.85938C19.9631 5.85938 21.6797 6.15234 21.6797 6.15234V9.84375H19.7883C17.9248 9.84375 17.3438 11 17.3438 12.1863V15H21.5039L20.8389 19.3359H17.3438V29.8178C24.5147 28.6925 30 22.487 30 15Z"
                          fill="#1877F2"
                        />
                        <path
                          d="M20.8389 19.3359L21.5039 15H17.3438V12.1863C17.3438 10.9999 17.9249 9.84375 19.7883 9.84375H21.6797V6.15234C21.6797 6.15234 19.9631 5.85938 18.3219 5.85938C14.8957 5.85938 12.6562 7.93594 12.6562 11.6953V15H8.84766V19.3359H12.6562V29.8178C13.4316 29.9393 14.2152 30.0002 15 30C15.7848 30.0002 16.5684 29.9393 17.3438 29.8178V19.3359H20.8389Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_1054">
                          <rect width="30" height="30" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="capitalize">Facebook</span>
                  </div>
                </button>
                <button className="w-full rounded-lg border border-[#D9D9D9] bg-white px-1 py-2 text-base font-normal text-black">
                  <div className="flex items-center justify-center space-x-2">
                    <svg
                      width="25"
                      height="30"
                      viewBox="0 0 25 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1_1052)">
                        <path
                          d="M20.3667 15.9076C20.4088 20.439 24.342 21.947 24.3855 21.9662C24.3521 22.0725 23.757 24.115 22.3134 26.2249C21.0654 28.049 19.7701 29.8663 17.7296 29.9039C15.7248 29.9409 15.0801 28.715 12.7879 28.715C10.4963 28.715 9.78005 29.8663 7.88214 29.9409C5.91262 30.0154 4.41281 27.9685 3.15453 26.151C0.583098 22.4336 -1.38195 15.6463 1.25662 11.0648C2.56738 8.78952 4.90996 7.34886 7.45243 7.3119C9.38643 7.27505 11.212 8.61305 12.3942 8.61305C13.5758 8.61305 15.7941 7.004 18.1262 7.24029C19.1024 7.28095 21.843 7.63457 23.6027 10.2104C23.4608 10.2983 20.3327 12.1193 20.3667 15.9077M16.5988 4.78086C17.6445 3.51514 18.3482 1.75324 18.1562 0C16.649 0.0605714 14.8265 1.00438 13.7454 2.26933C12.7765 3.38962 11.9281 5.18257 12.157 6.90105C13.837 7.03105 15.5531 6.04733 16.5988 4.78086Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_1052">
                          <rect width="24.39" height="30" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="capitalize">apple</span>
                  </div>
                </button>
              </div>

              <div className="flex items-center">
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-kayra-orange underline"
                >
                  Continue as guest
                </a>
                <svg
                  height="10px"
                  width="10px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 185.343 185.343"
                  xmlSpace="preserve"
                >
                  <g>
                    <g>
                      <path
                        styles="fill:#DC6601;"
                        d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
                                        l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
                                        c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
