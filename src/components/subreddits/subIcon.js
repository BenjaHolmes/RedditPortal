import React from "react";
import './subreddits.css'
import subIcon from './subRedditIcon.png';
import { useDispatch } from "react-redux/es/exports";
import { setSubreddit } from "../../slices/articlesSlice";
import { fetchArticles } from "../../slices/articlesSlice";


export const SubIcon = (props) => {
    const dispatch = useDispatch();
        if (props.sub.icon_img !== "") {
            return (
                
                <div onClick={() => {
                    dispatch(setSubreddit(props.sub.url));
                    dispatch(fetchArticles(props.sub.url));
                    }}>
                    <div className="subContainer">
                        <img src = {props.sub.icon_img} alt='?' onError={(e)=>{e.target.onerror = null; e.target.src="image_path_here"}} style={{width: 45, height: 45,}} ></img>
                        <h4 className="sub-title" >{props.sub.title}</h4>  
                    </div>
                    <hr></hr>
                </div>
                
            )
            }
            else {
                return (
                    
                    <div onClick={() => {
                        dispatch(setSubreddit(props.sub.url));
                        dispatch(fetchArticles(props.sub.url));
                        }}>
                        <div className="subContainer">
                        <img src = {subIcon} alt='?' onError={(e)=>{e.target.onerror = null; e.target.src="image_path_here"}} style={{width: 45, height: 45,}} ></img>
                            <h4 className="sub-title" >{props.sub.title}</h4>      
                        </div>
                        <hr></hr>
                    </div>
                    
             )
            }
        }
        export default SubIcon;
 