import React from "react";
import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";
import { FaRegCommentAlt } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";

const Post = () => {
  const d = new Date();
  const PostDate = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}, ${
    d.getHours() + 1
  }:${d.getMinutes() + 1}`;
  return (
    <div className="flex flex-col">
      <div className="bg-white mt-6 rounded-md p-4">
        <div className="flex items-center space-x-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png"
            className="rounded-full w-10 h-10"
          />
          <div>
            <p className="font-medium">Muhammad</p>
            <p className="text-xs text-gray-500">{PostDate}</p>
          </div>
        </div>
        <p className="py-4">Lorem ipsum</p>
      </div>
      <div className="relative h-60 md:h-96 bg-white">
        <Image
          alt="dummy"
          className="flex"
          src={
            "https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex items-center  justify-center bg-white p-2">
        <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <FiThumbsUp />
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <FaRegCommentAlt />
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <RiShareForwardLine />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
