import { Chip } from "@mui/material";
import { ReactElement } from "react";
import { VideoCard } from "@realworld/components/youtube/VideoCard";
import { VideoProps } from "@realworld/constants/youtube/youtube";
import { recommendedDB, searchDB, tags } from "@realworld/data/dummySearch";
import { useEffect, useState } from "react";
import Fuse from "fuse.js";
import { NextPageWithLayout } from "../_app";
import { YoutubePrimaryLayout } from "@realworld/layouts/youtube/YoutubePrimaryLayout";
const Youtube: NextPageWithLayout = () => {
  const [activeChip, setactiveChip] = useState("");
  const [toggle, setToggle] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [searchresult, setSearchResult] = useState<VideoProps[]>([
    ...recommendedDB,
  ]);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    if (activeChip) {
      const fuse = new Fuse(searchDB, {
        includeScore: true,
        keys: ["tags"],
      });
      const result = fuse.search(activeChip).map((item) => item.item);
      setSearchResult(result);
    } else {
      setSearchResult([...recommendedDB]);
    }
  }, [activeChip]);
  return (
    <>
      <div className="chip-container flex gap-4 overflow-x-auto scrollbar-thin py-2">
        <Chip
          label={"All"}
          onClick={(e) => setactiveChip("")}
          className={
            !activeChip
              ? "hover:cursor-pointer text-white bg-black"
              : "hover:cursor-pointer"
          }
        />
        {tags.map((tag, index) => (
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
        {searchresult?.map((videoItem, index) => (
          <VideoCard video={videoItem} key={index} />
        ))}
      </div>
    </>
  );
};

Youtube.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <YoutubePrimaryLayout>{page}</YoutubePrimaryLayout>
    </>
  );
};

export default Youtube;
