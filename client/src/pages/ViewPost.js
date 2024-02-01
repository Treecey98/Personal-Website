import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import '../index.css';

function ViewPost () {

    let { postId } = useParams();

    const [post, setPost] = useState({});

    useEffect(() => {
        Axios.get(`http://node-mysql-api-blog.onrender.com/api/getFromId/${postId}`).then((data) => {
            setPost({
                title: data.data[0].title,
                postText: data.data[0].posts_text,
                datePosted: data.data[0].date_posted
            })
        })
    }, []);

    return(
        <>
            <div className= "view-post">
                <div className = "blog-post-title">
                    <h3>{post.title}</h3>
                </div>
                    <p style = {{padding: "15px"}}>
                    {post.postText}
                    </p>
                    <h4 style = {{padding: "15px"}}>Date posted: {new Date(post.datePosted).toLocaleDateString()}</h4>
            </div> 
        </>
        
    )
}

export default ViewPost 