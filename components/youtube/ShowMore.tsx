import Markdown from "markdown-to-jsx";
import React, { useEffect, useState } from "react";

interface ShowMoreProps {
  text: string;
}
const ShowMore = ({ text }: ShowMoreProps) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <div className="min-h-max">
        {" "}
        <Markdown>{showMore ? text : text.slice(0, 160)}</Markdown>
      </div>

      <button className="font-bold" onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show less" : "Show more"}
      </button>
    </>
  );
};

export const MemoShowMore = React.memo(ShowMore);
