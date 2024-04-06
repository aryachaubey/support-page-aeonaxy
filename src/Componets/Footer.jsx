import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#E8E8E8] h-full w-full md:w-full">
      <footer className="">
        <div className="grid place-content-center px-2 text-sm   ">
          <ul className="md:flex inline mt-28 md:items-center">
            <li className=" mx-4 my-4"><button>Tilda.cc</button></li>
            <li className="mx-4 my-4"><button>Help Centre</button></li>
            <li className="mx-4 my-4"><button>Video Tutorials</button></li>
            <li className="mx-4 my-4"><button>Blog</button></li>
          </ul>

          <div className="grid place-content-center px-2 text-sm">
            <ul className="md:flex inline mt-12 md:items-center">
              <li className="mx-2 my-2 ">
                <FaInstagramSquare className="size-5" />
              </li>
              <li className="mx-2 my-2">
                <BsYoutube className="size-6" />
              </li>
              <li className="mx-2 my-2">
                <ImFacebook2 className="size-4" />
              </li>
              <li className="mx-2 my-2">
                <FaSquareXTwitter className="size-5" />
              </li>
            </ul>
          </div>

          <div className="  grid place-content-center px-2 text-sm">
            <ul className="md:flex inline mt-12 md:items-center m-8">
              <li className="mx-10 my-4">
                <label className="font-semibold">Report abuse</label>
                <p className="">
                  If you believe that any website made on Tilda is violating
                  your rights, file a complaint by filling out this{" "}
                  <button className="text-orange-400">form</button>
                </p>
              </li>
              <li className="mx-10 my-4">
                <label className="font-semibold">
                  How to contact our support
                </label>
                <p>
                  To find more about the platform features,use the feedback form
                  in your tilda account or contact us via{" "}
                  <button className="text-orange-400">team@tilda.cc</button>
                </p>
              </li>
              <li className="mx-10 my-4">
                <label className="font-semibold">Accounting docs</label>
                <p>
                  To get the supporting documentation and proof of payment,send
                  your request to{" "}
                  <button className="text-orange-400">docs@tilda.cc</button>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
