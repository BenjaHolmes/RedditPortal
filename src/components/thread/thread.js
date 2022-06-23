import React from "react";
import './thread.css';
import { commentsSelector, fetchComments } from "../../slices/threadSlice";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { threadSelector } from "../../slices/threadSlice";
import { useEffect } from "react";
import { OriginalPost } from "./originalPost";
import { Comment } from "./comment";
import { selectLoading } from "../../slices/threadSlice";
import { Puff } from "react-loading-icons";


export const Thread = (props) => { 
    const dispatch = useDispatch();
    const thread = useSelector(threadSelector);
    const comments = useSelector(commentsSelector)
    const isLoading = useSelector(selectLoading)
    
    useEffect(() => {
        dispatch(fetchComments(thread))
    }, [dispatch]);

    
    return (
        
        <div>
            { isLoading ? 
                <div className="loading-handler">
                <p className="loading"> Loading.. </p>
                <Puff className="puff" stroke='#000'/>
                </div>
               : 
               <div className="thread-container">
               <OriginalPost />
               {(comments != null ) ? comments.map((c, index) => <Comment key={index} id={index}/> ) : '' }
           </div> }
        </div>
    );
};

export default Thread;