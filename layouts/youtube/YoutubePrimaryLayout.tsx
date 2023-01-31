import { Divider } from "@mui/material";
import { IconMenuItem } from "@realworld/components/youtube/IconMenuItem";
import YoutubeHeader from "@realworld/components/youtube/YoutubeHeader";
import { youtubeSibebarRoute } from "@realworld/constants/youtube/youtube";
import React, { ReactElement } from "react";
interface YoutubePrimaryLayoutProps {
  children: ReactElement;
}
export const YoutubePrimaryLayout = ({
  children,
}: YoutubePrimaryLayoutProps) => {
  return (
    <div className="youtube">
      <YoutubeHeader />
      <div className="flex main-layout h-[94vh] gap-2 overflow-hidden">
        <div className="sidemenu xss:hidden md:block min-w-[15%] overflow-y-scroll overflow-x-hidden">
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
        <div className="content min-w-[83%] gap-1 xss:p-3 md:p-0">{children}</div>
      </div>
    </div>
  );
};
