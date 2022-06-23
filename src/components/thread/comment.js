import React from "react";
import { commentsSelector } from "../../slices/threadSlice";
import { useSelector } from "react-redux/es/exports";

export const Comment = (props) => {
    const comments = useSelector(commentsSelector);
    return (
        <div>
            <p className="commentBody"> {comments[props.id].body} </p>
            {comments[props.id].author ? <p className="author2"> Posted by {comments[props.id].author} </p> : '' }
            <hr></hr>
        </div>
    )
}