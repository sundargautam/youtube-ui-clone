import { IconMenuItemProps } from "../../components/youtube/IconMenuItem";
import { AiFillHome, AiOutlineSetting, AiOutlineUser } from "react-icons/ai";
import {
  MdOutlineHelpOutline,
  MdOutlineLogout,
  MdSubscriptions,
} from "react-icons/md";
import { HiOutlineLibrary } from "react-icons/hi";

export interface VideoProps {
  description: string;
  sources: string[];
  creator: string;
  profile: string;
  title: string;
}

export const youtubeMenuRoute: IconMenuItemProps[] = [
  {
    title: "Your Channel",
    icon: <AiOutlineUser size={30} />,
    pathName: "/",
  },
  {
    title: "Setting",
    icon: <AiOutlineSetting size={30} />,
    pathName: "/",
  },

  {
    title: "Help",
    icon: <MdOutlineHelpOutline size={30} />,
    pathName: "/",
  },
  {
    title: "Sign Out",
    icon: <MdOutlineLogout size={30} />,
    pathName: "/",
  },
];

export const youtubeSibebarRoute: IconMenuItemProps[] = [
  {
    title: "Home",
    icon: <AiFillHome color="black" size={20} />,
    pathName: "/",
  },
  {
    title: "Subscription",
    icon: <MdSubscriptions size={20} />,
    pathName: "/",
  },

  {
    title: "Library",
    icon: <HiOutlineLibrary size={20} />,
    pathName: "/",
  },
];
