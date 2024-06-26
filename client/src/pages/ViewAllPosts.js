import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import '../index.css';
import ViewPost from './ViewPost';

function ViewAllPosts() {

    const [postList, setPostList] = useState([])  

    useEffect(() => {
        Axios.get('https://node-mysql-api-blog.onrender.com/api/get').then((data) => {
            setPostList(data.data)
        })
    }, []);

    const sortedPosts = postList.sort((a,b) => b.date_posted.localeCompare(a.date_posted));

    // console.log(sortedPosts);

    let navigate = useNavigate();
    let listRef = useRef();

    const [postDisplay, showPost] = useState(false)

    useEffect(() => {
      let handler = (e)=>{
        if(!listRef.current.contains(e.target)){
          showPost(false);
        }      
      };
  
      document.addEventListener("mousedown", handler);
      
  
      return() =>{
        document.removeEventListener("mousedown", handler);
      }
});

    return(
        <>
            <div className = "arrow-container">
                <p className = "left-arrow"></p>
                <button onClick={() => navigate("/") }className = "back-button">Back</button>
            </div> 

            <div className = "all-posts">
                <div className = "all-blog-posts-container">
                    <h2 style = {{marginLeft: "15px"}}>All blog posts</h2>

                    {sortedPosts.map((val, index) => {

                        // console.log(val);
                        
                        function DisplaySpecificPost() {
                            navigate(`/viewpost/${val.id}`)
                            showPost(!postDisplay)
                        }

                        return(
                            <ul 
                                className = "all-blog-posts-list"
                                key={index} 
                                onClick={() => DisplaySpecificPost()}
                            >
                                <li ref={listRef}>{val.title}</li>
                            </ul>
                        )        
                        
                    })}
                </div>
                
                <div className = "specific-post">
                    {postDisplay && < ViewPost />}
                </div>

            </div>
        </> 
    )
}

export default ViewAllPosts;