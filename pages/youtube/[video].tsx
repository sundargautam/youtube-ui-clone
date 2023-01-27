import { Card, CardMedia } from "@mui/material";
import YoutubeHeader from "@realworld/components/youtube/YoutubeHeader";
import { VideoProps } from "@realworld/constants/youtube/youtube";
import { searchDB } from "@realworld/data/dummySearch";
import { YoutubePrimaryLayout } from "@realworld/layouts/youtube/YoutubePrimaryLayout";
import Fuse from "fuse.js";
import Image from "next/image";

import { useRouter } from "next/router";
import React, { ReactElement, useEffect, useState } from "react";
import { NextPageWithLayout } from "../_app";

const VideoPage: NextPageWithLayout = () => {
  const {
    query: { video },
  } = useRouter();

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
            className="h-full"
          />
          <div className="title flex flex-col">
            <span className="text-2xl">{videoData?.title}</span>
            <div className="channel-wrapper mt-2">
              <div className="channel flex gap-2">
                {videoData?.profile && (
                  <Image
                    width={50}
                    height={50}
                    src={videoData?.profile}
                    alt="profile"
                  />
                )}
                <div className="details flex flex-col">
                    <span>{videoData?.creator}</span>
                    <span className="subscriber">2.3M</span>
                </div>
              </div>
              <div className="stats"></div>
            </div>
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
