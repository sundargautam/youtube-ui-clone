import useOutsideAlerter from "@realworld/utils/outSideDetector";
import { Menu, MenuItem, Avatar, Divider, ListItemIcon } from "@mui/material";

import React, { useRef, useState } from "react";
import { AiOutlineSetting, AiOutlineUser } from "react-icons/ai";
import { MdOutlineHelpOutline, MdOutlineLogout } from "react-icons/md";
import { BsYoutube, BsSearch } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaMicrophone } from "react-icons/fa";
import {
  RiVideoAddLine,
  RiNotification2Line,
  RiProfileLine,
} from "react-icons/ri";
import withToggle, { withToggleHOCProps } from "../hoc/TogglerHoc";
import Image from "next/image";
import { IconMenuItem } from "./IconMenuItem";
import { youtubeMenuRoute } from "@realworld/constants/youtube/youtube";
const YoutubeHeader = ({ toggle, setToggle }: withToggleHOCProps) => {
  const inputRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useOutsideAlerter({ ref: inputRef, setter: setToggle });
  return (
    <div className="youtubeHeader flex items-center justify-between py-2 md:px-6 xl:px-8">
      <div className="icon-wrapper flex gap-4 items-center">
        <RxHamburgerMenu size={30} />
        <div className="logo flex items-center gap-1">
          <BsYoutube size={30} color="red" />
          <span className="font-bold text-xl text-gray-800">
            Youtube
            <sup className="font-normal ml-1">Np</sup>
          </span>
        </div>
      </div>

      <div ref={inputRef} className="flex items-center md:gap-2 lg:gap-4">
        <div className="left-wrapper search-wrapper border h-9 sm:min-w-[10rem] md:min-w-[20rem] lg:min-w-[30rem] xl:min-w-[40rem] flex rounded-xl py-4 overflow-hidden items-center">
          <div
            className="input-wrapper flex items-center flex-1 mx-2"
            onClick={(e) => setToggle(true)}
          >
            {toggle && <BsSearch size={15} />}
            <input
              type="text"
              placeholder="search"
              className="ml-2 focus:outline-none"
            />
          </div>
          <div className="search border-l flex  items-center p-4 bg-gray-50 hover:bg-gray-100">
            <BsSearch size={20} />
          </div>
        </div>
        <div className="icon-wrapper">
          <FaMicrophone size={20} />
        </div>
      </div>

      <div className="icon-wrapper-left flex gap-8 items-center">
        <RiVideoAddLine size={30} className="hover:cursor-pointer" />
        <div className="notification relative hover:cursor-pointer">
          <RiNotification2Line size={30} />
          <span className="absolute rounded-full text-w bg-red-500 bottom-3 right-[-10px] px-1 text-white">
            20
          </span>
        </div>
        <div className="profile hover:cursor-pointer">
          <Image
            height={30}
            width={30}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png"
            alt="profile"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            className="mt-1"
            PaperProps={{
              style: {
                width: "20rem",
                minHeight: "5rem",
                borderRadius: "1rem",
              },
            }}
          >
            <MenuItem className="justify-center hover:cursor-default">
              <div className="user-info flex gap-3 w-full items-start">
                <Image
                  height={50}
                  width={50}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png"
                  alt="profile"
                  className="object-contain"
                />
                <div className="details flex flex-col hover:cursor-text">
                  <span className="name">Sundar Gautam</span>
                  <span className="email">sundargautam6@gmail.com</span>
                  <span className="manage text-blue-500 hover:cursor-pointer mt-1 justify-center">
                    Manage your Google Account
                  </span>
                </div>
              </div>
            </MenuItem>
            {youtubeMenuRoute.map((menu, index) => (
              <IconMenuItem {...menu} key={index} />
            ))}
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default withToggle({ PassedComponent: YoutubeHeader });
