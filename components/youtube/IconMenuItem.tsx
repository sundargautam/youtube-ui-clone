import { MenuItem, ListItemIcon } from "@mui/material";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";

export interface IconMenuItemProps {
  title: string;
  icon: ReactNode;
  pathName: string;
}
export const IconMenuItem = ({ title, icon, pathName }: IconMenuItemProps) => {
  const router = useRouter();
  return (
    <>
      <MenuItem
        onClick={(e) => {
          router.push(pathName);
        }}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        {title}
      </MenuItem>
    </>
  );
};
