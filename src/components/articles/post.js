import React from "react";
import './articles.css';
import icon from './redditIcon.png';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSelectedThread } from '../../slices/threadSlice';

function Post(props) {
    const dispatch = useDispatch();

    if (props.post.thumbnail_height !== null) {
        return (
            <div>
            <Link to={'/article'} className='link' onClick={() => dispatch(setSelectedThread(props.post.permalink))} >
                <article >
                    <img className='articleImg' src = {props.post.thumbnail} alt='' style={{width: 55, height: 55,}} ></img>
                    <p className="mainText">{props.post.title}</p>
                    <p className="subName"> {props.post.subreddit_name_prefixed} </p>     
                </article>
            </Link>
                <hr></hr>
            </div>
            )
        } else {
            return (
                <div>
                <Link to={'/article'} className='link' onClick={() => dispatch(setSelectedThread(props.post.permalink))} >
                <article>
                    <img className="articleImg" src={icon} alt='' style={{width: 55, height: 55}}></img>
                    <p className="mainText">{props.post.title}</p>
                    <p className="subName"> {props.post.subreddit_name_prefixed} </p>
                </article>
                </Link>
                <hr></hr>
                </div>
            )}};

    

export default Post;


