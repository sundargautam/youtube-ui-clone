import { Card, CardMedia, CardContent, Menu } from "@mui/material";
import { youtubeMenuRoute } from "@realworld/constants/youtube/youtube";
import Image from "next/image";
import React, { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { IconMenuItem } from "./IconMenuItem";


export const VideoCard = () => {
 const [toggle, setToggle] = useState(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Card
      className="h-[26rem]"
      onMouseOver={(e) => {
        setToggle(true);
      }}
      onMouseLeave={(e) => setToggle(false)}
    >
      <CardMedia
        sx={{ height: 300 }}
        component="video"
        onMouseEnter={(e: any) => {
          e.target.play();
        }}
        onMouseLeave={(e: any) => {
          e.target.currentTime = 0;
          e.target.pause();
        }}
        muted
        src="https://media.istockphoto.com/id/1344343066/video/cozy-christmas-fireplace.mp4?s=mp4-640x640-is&k=20&c=8s3psKuBfbmnzL6B2VyV-Y8xasaO5FtI1z7vM4wEXKY="
        title="green iguana"
        controls={toggle ? true : false}
      />

      <CardContent>
        <div className="details flex items-center gap-3">
          <Image
            height={50}
            width={50}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png"
            alt="profile"
            className="object-contain"
          />
          <div className="info flex flex-col flex-1">
            <span>Pathaan Full Movie HD</span>
            <span className="mt-1">T-Series</span>
            <div className="view-wrapper flex gap-3">
              <span className="views">4.3M Views</span>
              <span className="time">5days ago</span>
            </div>
          </div>
          {toggle && (
            <FiMoreVertical
              size={20}
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              className="cursor-pointer"
            />
          )}
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
                padding: "0.2rem 0",
              },
            }}
          >
            {youtubeMenuRoute.map((menu, index) => (
              <IconMenuItem {...menu} key={index} />
            ))}
          </Menu>
        </div>
      </CardContent>
    </Card>
  );
};
