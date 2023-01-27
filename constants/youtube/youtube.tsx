import { IconMenuItemProps } from "../../components/youtube/IconMenuItem";
import { AiOutlineSetting, AiOutlineUser } from "react-icons/ai";
import { MdOutlineHelpOutline, MdOutlineLogout } from "react-icons/md";

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
