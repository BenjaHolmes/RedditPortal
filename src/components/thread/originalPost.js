import React from "react";
import { useSelector } from "react-redux/es/exports";
import { originalPostSelector } from "../../slices/threadSlice";

export const OriginalPost = () => {
    const op = useSelector(originalPostSelector);
    return (
        <div>
            <div className="op">
                <a href={op.thumbnail} target='_blank'><img src={op.thumbnail}></img></a>
                <p className="postTitle">{op.title}</p>
                <p className="author">Posted by {op.author_fullname}</p>
                <p className="location"> From {op.subreddit_name_prefixed}</p>
            </div> 
            <hr className="separator"></hr>
        </div>
    )
}