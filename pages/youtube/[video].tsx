import { Button, Card, CardMedia, makeStyles, Typography } from "@mui/material";
import YoutubeHeader from "@realworld/components/youtube/YoutubeHeader";
import { VideoProps } from "@realworld/constants/youtube/youtube";
import { searchDB } from "@realworld/data/dummySearch";
import { AiFillLike, AiOutlineLike, AiOutlineDownload } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import Fuse from "fuse.js";
import Image from "next/image";

import { useRouter } from "next/router";
import React, { ReactElement, useEffect, useState } from "react";
import { NextPageWithLayout } from "../_app";
import { MemoShowMore } from "@realworld/components/youtube/ShowMore";

const VideoPage: NextPageWithLayout = () => {
  const {
    query: { video },
  } = useRouter();
  const [like, setLike] = useState(false);
  const [videoData, setVideoData] = useState<VideoProps>();
  useEffect(() => {
    if (video) {
      const fuse = new Fuse(searchDB, {
        keys: ["id"],
      });
      const result = fuse.search(video as string).map((item) => item.item);
      setVideoData(result[0]);
    }
  }, [video]);

  return (
    <>
      <div className="wrapper flex px-7 py-2">
        <div className="video-left flex-[2]">
          <CardMedia
            component="video"
            muted
            src={videoData?.sources[0]}
            controls={true}
            autoPlay
          />
          <div className="title flex flex-col mt-2">
            <span className="text-2xl font-bold">{videoData?.title}</span>
            <div className="channel-wrapper mt-2 flex justify-between">
              <div className="channel flex gap-3 items-center">
                {videoData?.profile && (
                  <Image
                    width={50}
                    height={50}
                    src={videoData?.profile}
                    alt="profile"
                  />
                )}
                <div className="details flex flex-col">
                  <span className="font-bold">{videoData?.creator}</span>
                  <span className="subscriber">1M Subscribers</span>
                </div>
                <Button
                  style={{
                    backgroundColor: "black",
                  }}
                  className="text-white rounded-xl h-8"
                >
                  Subscribe
                </Button>
              </div>
              <div className="stats flex items-center flex-1 justify-end gap-10">
                <div className="likes flex items-center">
                  {like ? (
                    <AiFillLike
                      size={30}
                      color="black"
                      onClick={(e) => setLike(!like)}
                    />
                  ) : (
                    <AiOutlineLike size={30} onClick={(e) => setLike(!like)} />
                  )}{" "}
                  <span>2.2K</span>
                </div>
                <BiDislike size={30} />
                <div className="share flex gap-2">
                  <RiShareForwardLine size={35} />
                  <span>Share</span>
                </div>
                <AiOutlineDownload size={30} />
              </div>
            </div>
          </div>

          <div className="description  border w-full bg-[#F2F2F2] rounded-xl mt-2 p-2">
            <MemoShowMore
              text="<p>
    <strong>3,20,000 views</strong>.
    <span style='color: rgb(153, 51, 255);'>#rabilamichanne #rabilamichanne</span>
</p> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>"
            />
          </div>
        </div>
        <div className="recommended flex-[0.8]">
          <h2>Hello</h2>
        </div>
      </div>
    </>
  );
};

VideoPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <div className="videopage">
        <YoutubeHeader />
        {page}
      </div>
    </>
  );
};

export default VideoPage;
