import React from "react";
import { TbWorldWww } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegPenToSquare } from "react-icons/fa6";
import { TbFileDollar } from "react-icons/tb";
import { FaWpforms } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import { ImStatsBars } from "react-icons/im";
import { RiFontSize } from "react-icons/ri";
import { RiSeoLine } from "react-icons/ri";
import { CiMobile4 } from "react-icons/ci";
import { SlQuestion } from "react-icons/sl";
import { TbMessageQuestion } from "react-icons/tb";
import { GrTasks } from "react-icons/gr";
import { MdError, MdOutlineMail } from "react-icons/md";
import { IoWarningOutline } from "react-icons/io5";
import { PiCodeBlockBold } from "react-icons/pi";
import { HiOutlineCodeBracket } from "react-icons/hi2";
import { RxCrossCircled } from "react-icons/rx";
import { CgShoppingCart } from "react-icons/cg";

const Sidenav = () => {
  return (
    <div className="w-full h-full ">
      <aside className="pt-5 text-xs md:text-lg w-40 md:w-96">
        <ul>
          <div className="relative ">
            <TbWorldWww className="size-4 md:size-6 absolute ml-2 mt-2 text-gray-500  md:mr-4" />
            <li className="p-2   rounded-sm hover:bg-[#ECECEC] active:bg-[#ECECEC] mr-2">
              <button className="pl-5 md:pl-10 ">Domains</button>
            </li>
          </div>

          <div className="relative">
            <IoSettingsOutline className="size-4 md:size-6 absolute ml-2 mt-2 text-gray-500" />
            <li className="p-2   rounded-sm hover:bg-[#ECECEC] mr-2">
              <button className="pl-5 md:pl-10">Site Settings</button>
            </li>
          </div>

          <div className="relative">
            <FaRegPenToSquare className="size-4 md:size-6 absolute ml-2 mt-2 text-gray-600" />
            <li className="p-2   rounded-sm hover:bg-[#ECECEC] mr-2">
              <button className="pl-5 md:pl-10">Page Editing</button>
            </li>
          </div>

          <div className="relative">
            <TbFileDollar className="size-5 md:size-6 absolute ml-1 mt-1 text-gray-500" />
            <li className="p-2  rounded-sm hover:bg-[#ECECEC] me-2">
              <button className="pl-5 md:pl-10">Plans and Billing</button>
            </li>
          </div>

          <div className="relative">
            <FaWpforms className="size-4 md:size-6 absolute mt-2 ml-1.5  text-gray-500" />
            <li className="p-2  rounded-sm hover:bg-[#ECECEC] mr-2">
              <button className="pl-5 md:pl-10">Data Capture Forms</button>
            </li>
          </div>
          <div className="relative">
            <CgShoppingCart  className="size-4 md:size-6 absolute mt-2 ml-1.5  text-gray-500"  />
            <li className="p-2   rounded-sm hover:bg-[#ECECEC] mr-2">
              <button className="pl-5 md:pl-10">Online Store</button>
            </li>
          </div>

          <div className="relative">
            <IoIosMenu  className="size-4 md:size-6 absolute mt-2 ml-1.5  text-gray-500"  />
            <li className="p-2   rounded-sm hover:bg-[#ECECEC] mr-2">
              <button className="pl-5 md:pl-10">Menu</button>
            </li>
          </div>

          <div className="relative">
            <ImStatsBars  className="size-4 md:size-6 absolute mt-2 ml-1  text-gray-500"  />
            <li className="p-2   rounded-sm hover:bg-[#ECECEC] ">
              <button className="pl-4 md:pl-10">Site Statistics Goals</button>
            </li>
          </div>

          <div className="relative">
            <RiFontSize className="size-4 md:size-6 absolute mt-2 ml-1.5  text-gray-500"  />
            <li className="p-2   rounded-sm hover:bg-[#ECECEC] mr-2">
              <button className="pl-5 md:pl-10">Fonts</button>
            </li>
          </div>

          <div className="relative">
            <RiSeoLine  className="size-4 md:size-6 absolute mt-2 ml-1.5  text-gray-500"  />
            <li className="p-2   rounded-sm hover:bg-[#ECECEC] mr-2">
              <button className="pl-5 md:pl-10">SEO</button>
            </li>
          </div>

          <div className="relative">
            <CiMobile4 className="size-4 md:size-6 absolute mt-2 ml-1.5  text-gray-500"  />
            <li className="p-2   rounded-sm hover:bg-[#ECECEC] mr-2">
              <button className="pl-5 md:pl-10">Mobile Version</button>
            </li>
          </div>

          <div className="relative">
            <SlQuestion  className="size-4 md:size-6 absolute mt-2 ml-1.5  text-gray-500" />
            <li className="p-2   rounded-sm hover:bg-[#ECECEC] mr-2">
              <button className="pl-5 md:pl-10">General Questions</button>
            </li>
          </div>

          <div className="relative">
            <TbMessageQuestion  className="size-4 md:size-6 absolute mt-2 ml-1.5  text-gray-500"  />
            <li className="p-2   rounded-sm hover:bg-[#ECECEC] mr-2">
              <button className="pl-5 md:pl-10">Other Questions</button>
            </li>
          </div>

          <div className="relative">
            <GrTasks  className="size-4 md:size-6 absolute mt-2 ml-1.5  text-gray-500" />
            <li className="p-2   rounded-sm hover:bg-[#ECECEC] mr-2">
              <button className="pl-5 md:pl-10">Multilanding</button>
            </li>
          </div>

          <div className="relative"> 
            <MdOutlineMail  className="size-4 absolute mt-2 ml-1  text-gray-500"  />
            <li className="p-2   rounded-sm hover:bg-[#ECECEC] ">
              <button className="pl-3 md:pl-10 md:text-lg text-xs">Email Campaign Builder</button>
            </li>
          </div>

          <div className="relative">
            <IoWarningOutline  className="size-4 md:size-6 absolute mt-2 ml-1.5  text-gray-500"  />
            <li className="p-2   rounded-sm hover:bg-[#ECECEC] mr-2">
              <button className="pl-5 md:pl-10">Errors</button>
            </li>
          </div>

          <div className="relative">
            <PiCodeBlockBold  className="size-4 md:size-6 absolute mt-2 ml-1.5  text-gray-500"  />
            <li className="p-2   rounded-sm hover:bg-[#ECECEC] mr-2">
              <button className="pl-5 md:pl-10">Zero Block</button>
            </li>
          </div>

          <div className="relative">
            <HiOutlineCodeBracket  className="size-4 md:size-6 absolute mt-2 ml-1.5  text-gray-500"  />
            <li className="p-2   rounded-sm hover:bg-[#ECECEC] mr-2">
              <button className="pl-5 md:pl-10">Custom Code</button>
            </li>
          </div>

          <div className="relative">
            <RxCrossCircled  className="size-4 md:size-6 absolute mt-2 ml-1.5  text-gray-500"  />
            <li className="p-2   rounded-sm hover:bg-[#ECECEC] mr-2">
              <button className="pl-5 md:pl-10">Possible Problems</button>
            </li>
          </div>
        </ul>
      </aside>
    </div>
  );
};

export default Sidenav;
