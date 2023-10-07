//Responsive Product Detail Component
import { useState } from "react";
import Icon from "react-icons-kit";
import { ic_shopping_bag_outline } from "react-icons-kit/md/ic_shopping_bag_outline";
import {ic_close} from 'react-icons-kit/md/ic_close'

const ProductDetail = () => {

const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  const openModal = () => {
    setModal(!modal);
  };

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  return (
    <section className="h-screen bg-white">
      <div className="mt-24 flex w-full flex-col gap-1 px-2 xl:px-10">
        <h1 className="text-start text-lg font-bold leading-6">
          Special Offer
        </h1>
        <div className="flex flex-col justify-center gap-5 lg:flex-row">
          <div className="flex flex-col justify-between gap-3 rounded-lg border border-gray-200 bg-white p-6 shadow md:max-h-96 md:flex-row lg:w-3/4 xl:w-3/5">
            <div className="relative h-56 max-h-screen w-72 self-center shadow-xl sm:h-72 sm:w-56">
              <img
                className="container h-56 w-72 object-fill sm:h-72 sm:w-56"
                src="/images/chair.jpeg"
                alt=""
              />
              {/* rigth arrow on the big image  */}
              <div className="absolute cursor-pointer top-1/2 hidden -translate-y-1/2 transform rounded-r-md bg-gray-200 sm:flex">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 18L8 12L14 6"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* icons on the big image  */}
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-4 divide-x rounded-lg bg-white px-3 py-2 sm:bottom-10">
                <Icon className="cursor-pointer" icon={ic_shopping_bag_outline} size={20}></Icon>
                {/* we can use svg instead of the icon  */}
                <svg
                className="cursor-pointer"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.0311 3.75C14.4862 3.74962 14.9367 3.84008 15.3564 4.01609C15.776 4.1921 16.1563 4.45011 16.4749 4.775C17.1314 5.44149 17.4994 6.33947 17.4994 7.275C17.4994 8.21053 17.1314 9.10851 16.4749 9.775L9.99989 16.3312L3.52489 9.775C2.86838 9.10851 2.50038 8.21053 2.50038 7.275C2.50038 6.33947 2.86838 5.44149 3.52489 4.775C3.8437 4.45034 4.224 4.19247 4.64358 4.01643C5.06317 3.8404 5.51362 3.74973 5.96864 3.74973C6.42366 3.74973 6.87411 3.8404 7.2937 4.01643C7.71328 4.19247 8.09358 4.45034 8.41239 4.775L9.99989 6.4L11.5811 4.7875C11.8988 4.45874 12.2795 4.19741 12.7004 4.01915C13.1214 3.84088 13.574 3.74934 14.0311 3.75ZM14.0311 2.5C13.4097 2.49947 12.7943 2.62303 12.2212 2.86344C11.6481 3.10384 11.1288 3.45625 10.6936 3.9L9.99989 4.6L9.30614 3.9C8.87048 3.45705 8.35101 3.10526 7.77801 2.86512C7.205 2.62498 6.58993 2.50131 5.96864 2.50131C5.34735 2.50131 4.73228 2.62498 4.15927 2.86512C3.58627 3.10526 3.0668 3.45705 2.63114 3.9C1.74481 4.80227 1.2482 6.01647 1.2482 7.28125C1.2482 8.54603 1.74481 9.76023 2.63114 10.6625L9.99989 18.125L17.3686 10.6625C18.255 9.76023 18.7516 8.54603 18.7516 7.28125C18.7516 6.01647 18.255 4.80227 17.3686 3.9C16.9331 3.45681 16.4137 3.10478 15.8407 2.86441C15.2677 2.62405 14.6525 2.50017 14.0311 2.5Z"
                    fill="#595959"
                  />
                </svg>

                <svg
                className="cursor-pointer"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.99988 5V0H6.66654V6.66667H-0.00012207V5H4.99988ZM-0.00012207 15V13.3333H6.66654V20H4.99988V15H-0.00012207ZM13.3332 20V13.3333H19.9999V15H14.9999V20H13.3332ZM14.9999 5H19.9999V6.66667H13.3332V0H14.9999V5Z"
                    fill="#595959"
                  />
                </svg>
              </div>
            </div>

            {/* descriptions between images  */}
            <div className="flex flex-col gap-1 text-center sm:pt-5 sm:text-start">
              <p>Lorem ipsum is simply.</p>
              <div className="font-bold">
                $49,65{" "}
                <span className="font-extralight line-through">$49,65</span>
              </div>
              <p>
                Lorem ipsum is simply. Lorem ipsum is simply. Lorem ipsum is
                simply.
              </p>
              <span className="font-extralight">Available: 1200</span>
              <div className="mb-2 mt-5 flex flex-row gap-4">
                <div className="flex h-14 w-14 flex-col items-center justify-center rounded bg-gray-400 text-sm capitalize">
                  <span className="font-semibold">1</span> days
                </div>
                <div className="flex h-14 w-14 flex-col items-center justify-center rounded bg-gray-400 text-sm capitalize">
                  <span className="font-semibold">10</span> hours
                </div>
                <div className="flex h-14 w-14 flex-col items-center justify-center rounded bg-gray-400 text-sm capitalize">
                  <span className="font-semibold">54</span> min
                </div>
                <div className="flex h-14 w-14 flex-col items-center justify-center rounded bg-gray-400 text-sm capitalize">
                  <span className="font-semibold">29</span> sec
                </div>
              </div>

              {/* progress indicator with tailwind but we can use the progress tag alternatively  */}
              <div className="mt-1 w-full bg-gray-200 dark:bg-gray-700">
                <div className="w-1/3 bg-orange-500 p-1 text-center text-xs font-medium leading-none text-blue-100"></div>
              </div>
            </div>

            {/* small images from the left side  */}
            <div className="flex max-h-72 flex-row justify-center gap-3 md:flex-col">
              <div className="overflow-hidden rounded-md border shadow-lg">
                <img
                  className="aspect-square object-cover md:w-32"
                  src="/images/chair.jpeg"
                  alt=""
                />
              </div>

              {/* small image with the ledt arrow  */}
              <div className="relative overflow-hidden rounded-md border">
                <img
                  className="aspect-square object-cover md:w-32"
                  src="/images/chair.jpeg"
                  alt=""
                />

                <div className="absolute cursor-pointer right-0 top-1/2 hidden -translate-y-1/2 transform rounded-l-md bg-gray-200 shadow-lg md:flex">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 18L16 12L10 6"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      L="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="overflow-hidden rounded-md border border-orange-500 shadow-lg">
                <img
                  className="aspect-square object-cover md:w-32"
                  src="/images/chair.jpeg"
                  alt=""
                />
              </div>
            </div>
          </div>

            {/* video part  */}
          <div onClick={openModal} className="relative overflow-hidden rounded border shadow-xl lg:w-1/4 xl:w-2/5 cursor-pointer">
            <img
              className="container max-h-96 rounded border object-fill"
              src="/images/chair-video.jpeg"
              alt=""
            />

            <div className="absolute left-1/2 top-1/2 -translate-y-1/2 transform">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM24 40C15.18 40 8 32.82 8 24C8 15.18 15.18 8 24 8C32.82 8 40 15.18 40 24C40 32.82 32.82 40 24 40ZM19 33L33 24L19 15V33Z"
                  fill="#8C8C8C"
                />
              </svg>
            </div>
            {modal ? (
          <section className="fixed top-0 left-0 w-full h-full bg-[rgba(28,28,28,0.19)] transition ease-out duration-300">
            <div className="flex justify-center items-center h-screen">
              <div className=" relative flex  justify-center sm:bg-transparent" modal={modal}>
                <div className="cursor-pointer absolute flex justify-center -top-16 w-6 h-6 bg-white rounded-full">
                <Icon
                  icon={ic_close}
                  onClick={setModal}
                />
                </div>
                
                <div className="flex relative bottom-9">
                  {videoLoading ? (
                     <div className="fixed transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" role="status">
                        <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        <span class="sr-only">Loading...</span>
                    </div>
                  ) : null}
                  <iframe
                    className="rounded-2xl shadow-2xl z-20"
                    onLoad={spinner}
                    loading="lazy"
                    width="800"
                    height="500"
                    src="https://www.youtube.com/embed/eOazPlKcOU4"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        ) : null}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
