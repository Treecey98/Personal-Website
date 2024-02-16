import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import '../index.css';

function Blog() {

    const [postList, setPostList] = useState([])  

    useEffect(() => {
            Axios.get('https://node-mysql-api-blog.onrender.com/api/recentblogposts').then((data) => {
                // console.log(data)
                setPostList(data.data)
            })
    }, []);

    let navigate = useNavigate();

    return(
        <>
            <div className = "title--centre">
                <h2 id = "Blog">Blog</h2>
                <h3>View all blog posts <span id="allPosts" onClick={()=>{navigate('/viewallposts')}}>here</span></h3>
            </div>
                <h3 style = {{marginLeft: "10px"}}>Recent blog posts</h3>
            
            <div className = "blog-posts">
                {postList.map((val, key) => {
                    return (
                        <div className = "post" key={key}> 
                            <div className = "blog-post-title">
                                <h3>{val.title}</h3>
                            </div>
                                <pre style = {{textAlign: "left", marginLeft: "10px"}}>
                                    {val.posts_text.length > 300 ? val.posts_text.substring(0,300) + '...' : val.posts_text}
                                </pre>
                            <div className = "blog-date">
                                <h4>Date posted: {new Date(val.date_posted).toLocaleDateString()}</h4>
                            </div>
                        </div> 
                    );
                })}
            </div>           
        </>
    )
}

export default Blog;
