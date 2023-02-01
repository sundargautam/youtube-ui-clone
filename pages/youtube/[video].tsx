import { Button, Card, CardMedia, Chip, duration, makeStyles, Menu, MenuItem, TextField, Typography } from "@mui/material";
import YoutubeHeader from "@realworld/components/youtube/YoutubeHeader";
import { VideoProps } from "@realworld/constants/youtube/youtube";
import { recommendedDB, searchDB } from "@realworld/data/dummySearch";
import { AiFillLike, AiOutlineLike, AiOutlineDownload } from "react-icons/ai";
import { BiDislike, BiLike } from "react-icons/bi";
import { MdSort } from "react-icons/md";
import { RiShareForwardLine } from "react-icons/ri";
import Fuse from "fuse.js";
import Image from "next/image";


import { useRouter } from "next/router";
import React, { ReactElement, useEffect, useState } from "react";
import { NextPageWithLayout } from "../_app";
import { MemoShowMore } from "@realworld/components/youtube/ShowMore";
import { RecommendedVideoCard } from "@realworld/components/youtube/RecommendeVideoCard";
import { dummyComments } from "@realworld/data/dummyComments";

const VideoPage: NextPageWithLayout = () => {
  const {
    query: { video },
  } = useRouter();
  const [like, setLike] = useState(false);
 
  const [videoData, setVideoData] = useState<VideoProps>();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [comments,setComments] = useState([...dummyComments])
  const [userCommment,setUserComment] = useState("")

  const [keyword,setKeyword] = useState("")

  useEffect(()=>{
    if (keyword) {
      
    }
  },[keyword])

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
      <div className="wrapper flex xss:p-0 md:px-7 md:py-2 xss:flex-col md:flex-row xss:gap-2 md:gap-0">
        <div className="video-left md:w-[65%] xl:w-[75%]">
          <CardMedia
            component="video"
            muted
            src={videoData?.sources[0]}
            controls={true}
            autoPlay
          />
          <div className="title flex flex-col mt-2">
            <span className="text-2xl font-bold">{videoData?.title}</span>
            <div className="channel-wrapper mt-2 flex justify-between xss:flex-col xl:flex-row">
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
              <div className="stats md:mt-2 lg:mt-0 xss:hidden md:flex flex items-center flex-1 md:justify-evenly lg:justify-end gap-10">
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

              <div className="m-share flex xss:flex md:hidden items-end gap-6 my-1">
                <div className="icon-wrapper flex items-center">
                  <AiFillLike
                    size={30}
                    color="black"
                    onClick={(e) => setLike(!like)}
                  />
                  <span>2.2K</span>
                </div>
                <BiDislike size={30} />
                <div className="icon-wrapper flex items-center">
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

          <div className="comment-section mt-2">
            <div className="comment-top flex gap-5 text-lg">
              <span>4,861 Comments</span>
              <div className="icon-wrapper flex gap-1">
                <MdSort size={30}     aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick} />
                <span className="font-medium">Sort by</span>
              </div>
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
                width: "10rem",
                minHeight: "5rem",
                padding: "0.2rem 0",
              },
            }}
          >
          <MenuItem>
          Top Comments
          </MenuItem>
          <MenuItem>Newest first</MenuItem>

          </Menu>
            </div>
            <div className="add-comment flex items-center mb-3 gap-2">
            <div className="img-wrapper">
               <Image src={"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"} height={50} width={50} alt="user" style={{
                  borderRadius:"50%"
                }}/>
               </div>
               <form onSubmit={(e)=>{
                const userComment =   {
                  url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
                  user: "@youareviewingthis",
                  duration: "1 second ago",
                  comment:userCommment,
                  id: 1,
                  date:1,
                };
                setComments(prev=>[...prev,userComment])
                e.preventDefault()
               }} className="flex-1">
            <TextField className="w-full" onChange={(e)=>setUserComment(e.target.value)} id="standard-basic" label="Add comment" variant="standard" />
             <div className="options flex justify-end gap-2 mt-2">
             <Button type="submit" className="normal-case">Cancel</Button>
             <Button variant="outlined" className="rounded-full bg-[#0556BF] text-white hover:bg-[#0556BF] normal-case" type="submit">Comment</Button>
             </div>
               </form>
            </div>
            <div className="comment-showcase">

              {
                comments.sort((a,b)=>a.date<b.date?-1:1)?.map(({url,id,duration,comment,user},index)=>{
                  return(
                    <div key={id} className="user-comment-wrapper flex gap-4 mt-3">
                    <div className="img-wrapper">
                    <Image src={url} height={50} width={50} alt="user" style={{
                       borderRadius:"50%"
                     }}/>
                    </div>
     
                     <div className="details flex-1">
                       <div className="user flex gap-1 items-center">
                       <span className="font-bold">{user}</span> 
                       <span className="text-sm">{duration}</span>
                       </div>
                       <span className="text-sm">{comment}</span>
                       <div className="interaction flex items-center gap-3">
                         <BiLike/>
                         <BiDislike/>
                         <span>reply</span>
                       </div>
                     </div>
                   </div>
                  )
                })
              }
            
             
            </div>
          </div>
        </div>
        <div className="recommended md:w-[35%] xl:w-[25%] flex flex-col gap-2">
          {recommendedDB?.map((videoItem, index) => (
            <RecommendedVideoCard video={videoItem} key={index} />
          ))}
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
