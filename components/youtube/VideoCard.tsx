import { Card, CardMedia, CardContent, Menu } from "@mui/material";
import {
  VideoProps,
  youtubeMenuRoute,
} from "@realworld/constants/youtube/youtube";
import { nFormatter } from "@realworld/utils/nFormatter";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { IconMenuItem } from "./IconMenuItem";
interface VideoCardProps {
  video: VideoProps;
}
export const VideoCard = ({ video }: VideoCardProps) => {
  const [toggle, setToggle] = useState(false);
  const router = useRouter()
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
      onClick={(e)=>{
        router.push(`/youtube/${video?.id}`)
      }}
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
        src={video?.sources[0]}
        controls={toggle ? true : false}
      />

      <CardContent>
        <div className="details flex items-center gap-3">
          <Image
            height={50}
            width={50}
            src={video?.profile}
            alt="profile"
            className="object-contain rounded-[50%]"
          />
          <div className="info flex flex-col flex-1">
            <span>{video?.title}</span>
            <span className="mt-1">{video?.creator}</span>
            <div className="view-wrapper flex gap-3">
              <span className="views">{nFormatter(video.views)} views</span>
              <span className="time">{video?.uploaded}</span>
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
