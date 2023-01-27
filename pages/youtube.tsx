import { Chip, Divider } from "@mui/material";
import { IconMenuItem } from "@realworld/components/youtube/IconMenuItem";
import { VideoCard } from "@realworld/components/youtube/VideoCard";
import YoutubeHeader from "@realworld/components/youtube/YoutubeHeader";
import { youtubeSibebarRoute } from "@realworld/constants/youtube/youtube";
import { recommendedDB } from "@realworld/data/dummySearch";
import { useState } from "react";

const Youtube = () => {
  const [activeChip, setactiveChip] = useState("All");
  const [toggle, setToggle] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="youtube">
      <YoutubeHeader />
      <div className="flex main-layout h-[94vh] gap-2 overflow-hidden">
        <div className="sidemenu min-w-[15%] overflow-y-scroll overflow-x-hidden">
          {youtubeSibebarRoute.map((menu, index) => (
            <IconMenuItem {...menu} key={index} />
          ))}
          <Divider />
          {youtubeSibebarRoute.map((menu, index) => (
            <IconMenuItem {...menu} key={index} />
          ))}
          <Divider />
          {youtubeSibebarRoute.map((menu, index) => (
            <IconMenuItem {...menu} key={index} />
          ))}
          <Divider />
          {youtubeSibebarRoute.map((menu, index) => (
            <IconMenuItem {...menu} key={index} />
          ))}
          <Divider />
          {youtubeSibebarRoute.map((menu, index) => (
            <IconMenuItem {...menu} key={index} />
          ))}
          <Divider />
          {youtubeSibebarRoute.map((menu, index) => (
            <IconMenuItem {...menu} key={index} />
          ))}
          <Divider />
          {youtubeSibebarRoute.map((menu, index) => (
            <IconMenuItem {...menu} key={index} />
          ))}
          <Divider />
          {youtubeSibebarRoute.map((menu, index) => (
            <IconMenuItem {...menu} key={index} />
          ))}
          <Divider />
        </div>
        <div className="content min-w-[83%] gap-1">
          <div className="chip-container flex gap-4 overflow-x-auto scrollbar-thin py-2">
            {[
              "All",
              "Live",
              "Music",
              "Comedy",
              "Horror",
              "Humour",
              "Critics",
              "Joke",
              "Nepali Movies",
              "Stock",
            ].map((tag, index) => (
              <Chip
                label={tag}
                key={index}
                onClick={(e) => setactiveChip(tag)}
                className={
                  activeChip === tag
                    ? "hover:cursor-pointer text-white bg-black"
                    : "hover:cursor-pointer"
                }
              />
            ))}
          </div>

          <div className="video-gallery grid grid-cols-3 gap-5 h-full overflow-x-auto">
          
            {recommendedDB?.map((videoItem,index)=><VideoCard video={videoItem} key={index}/>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
