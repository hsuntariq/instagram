import React from "react";
import Story from "./Story";
import { GoDotFill } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import { FaRegBookmark, FaRegHeart } from "react-icons/fa6";
import { IoChatbubbleOutline } from "react-icons/io5";
import { RxLoop } from "react-icons/rx";
import { FiSend } from "react-icons/fi";
import { RiChat3Line } from "react-icons/ri";
import { RiLoopLeftLine } from "react-icons/ri";
import { CiBookmark } from "react-icons/ci";
import CreatePostModal from "../posts/CreatePostModal";
import { useGlobal } from "../../context/Context";

const MainContent = () => {
  const { showPostModal } = useGlobal();
  return (
    <>
      {showPostModal && <CreatePostModal />}

      <div className="w-3/4 mx-auto py-10">
        {/* story section */}
        <Story />
        {/* post section */}

        <div className="">
          {/* header */}
          <div className="flex text-gray-600 justify-between items-center">
            <div className="flex items-center gap-2">
              <img
                src="https://img.magnific.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg?semt=ais_hybrid&w=740&q=80"
                className="w-10 h-10 object-cover rounded-full"
                alt=""
              />
              <h3 className="text-sm font-semibold">username</h3>
              <GoDotFill className="text-[10px]" />
              <p className="text-[10px] text-gray-600">1d</p>
            </div>
            <BsThreeDots />
          </div>
          {/* media section */}
          <img
            src="https://static.time.com/v3/assets/bltea6093859af6183b/blt46bd0fd6f7b2f591/6a209a7a6c0c2c1634791fad/T100SPORTS-2026-Web-Cristiano-Ronaldo.jpg?branch=production&width=3840&quality=75&auto=webp&crop=4:5"
            className="w-full h-150 object-cover my-2 rounded-md"
            alt=""
          />
          {/* actions */}
          <div className="flex justify-between items-center">
            <div className="flex gap-3">
              <FaRegHeart className="text-2xl" />
              <RiChat3Line className="text-2xl" />
              <RiLoopLeftLine className="text-2xl" />
              <FiSend className="text-2xl" />
            </div>
            <FaRegBookmark className="text-2xl" />
          </div>
          {/* caption */}
          <p className="text-sm my-3 text-gray-800">
            <span className="font-bold text-black username me-1">
              freecodecamp
            </span>
            For today's coding challenge, you'll be given a string of HTML. Your
            task is to return the plain text content with all... plus
          </p>
        </div>
      </div>
    </>
  );
};

export default MainContent;
