import React, { useEffect } from "react";
import './articles.css';

import { fetchArticles, subSelector } from "../../slices/articlesSlice";
import { useDispatch, useSelector } from "react-redux";
import { postSelector } from "../../slices/articlesSlice";
import Post from "./post";

export const Articles = (props) => {   
    const dispatch = useDispatch();  
    const posts = useSelector(postSelector);
    const currentSub = useSelector(subSelector);

    useEffect(() => {
        dispatch(fetchArticles(currentSub))
    }, [dispatch]);

    return (
        <div className='article-wrapper'>
            <div className="article-container">
                {posts != null ? posts.map((post, index) => <Post key={index} post={post.data} />) : ''}     
            </div>
        </div>
    );
};

export default Articles;


