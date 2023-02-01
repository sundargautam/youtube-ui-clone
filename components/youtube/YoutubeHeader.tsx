import useOutsideAlerter from "@realworld/utils/outSideDetector";
import { Drawer, Menu, MenuItem, SwipeableDrawer } from "@mui/material";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { BsYoutube, BsSearch } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaMicrophone } from "react-icons/fa";
import { RiVideoAddLine, RiNotification2Line } from "react-icons/ri";
import withToggle, { withToggleHOCProps } from "../hoc/TogglerHoc";
import Image from "next/image";
import { IconMenuItem } from "./IconMenuItem";
import {
  VideoProps,
  youtubeMenuRoute,
  youtubeSibebarRoute,
} from "@realworld/constants/youtube/youtube";
import Fuse from "fuse.js";
import { searchDB } from "@realworld/data/dummySearch";
import { useRouter } from "next/router";
const YoutubeHeader = ({ toggle, setToggle }: withToggleHOCProps) => {
  const router = useRouter();
  const [searchresult, setSearchResult] = useState<VideoProps[]>([]);
  const [keyword, setKeyword] = useState("");
  const inputRef = useRef(null);
  const [sidebar,setSideBar] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  useEffect(() => {
    if (keyword) {
      const fuse = new Fuse(searchDB, {
        includeScore: true,
        keys: ["title"],
      });
      const result = fuse.search(keyword).map((item) => item.item);
      setSearchResult(result);
    } else {
      setSearchResult([]);
    }
  }, [keyword]);

  useOutsideAlerter({ ref: inputRef, setter: setToggle });
  return (
    <div className="youtubeHeader flex xss:flex-col items-start md:gap-2 xss:gap-3   md:flex-row  md:items-center justify-between py-2 md:px-6 xl:px-8 ">
         <React.Fragment>
          <Drawer
            anchor={"left"}
            open={sidebar}
            onClose={()=>setSideBar(false)}
          >
         <div className="drawer-wrapper p-2">
         {youtubeSibebarRoute.map((menu, index) => (
            <IconMenuItem {...menu} key={index} />
          ))}
         </div>
          </Drawer>  
        </React.Fragment>
      <div className="icon-wrapper flex gap-4 items-center">
         <div className="hamburger xss:flex md:hidden">
         <RxHamburgerMenu onClick={(e)=>setSideBar(!sidebar)} size={30} />
         </div>
         <div className="hamburger xss:hidden md:flex">
         <RxHamburgerMenu size={30} />
         </div>
        <div
          className="logo flex items-center gap-1 hover:cursor-pointer"
          onClick={(e) => router.push("/youtube")}
        >
          <BsYoutube size={30} color="red" />
          <span className="font-bold text-xl text-gray-800">
            Youtube
            <sup className="font-normal ml-1">Np</sup>
          </span>
        </div>
      </div>

      <div
        ref={inputRef}
        className="flex items-center  md:gap-2 lg:gap-4 relative"
      >
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
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>
          <div className="search border-l flex  items-center p-4 bg-gray-50 hover:bg-gray-100">
            <BsSearch size={20} />
          </div>
        </div>
        {searchresult.length > 0 && (
          <div className="searchresult max-h-[30rem] xss:w-full md:w-[30rem] xl:w-[37rem] absolute top-10 z-50 bg-white rounded-md py-5 px-4 shadow-md border flex flex-col gap-3">
            {searchresult.map((result, index) => (
              <div
                key={index}
                className="result flex gap-3 items-center"
                onClick={(e) => {
                  //router.push(`/youtube/${result?.id}`);
                }}
              >
                <BsSearch size={15} />
                <span>{result?.title?.toLowerCase()}</span>
              </div>
            ))}
          </div>
        )}
        <div className="icon-wrapper">
          <FaMicrophone size={20} />
        </div>
      </div>

      <div className="icon-wrapper-left flex gap-8 items-center xss:hidden md:flex">
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
