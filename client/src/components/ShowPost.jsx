import React, { useState, useEffect, Fragment} from 'react';


const ShowPost = (props) => {

    const [comments, setComments] = useState([]);


    useEffect(() => {
        getAllComment();
    }, []);


    const getAllComment = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/comments");
            const jsonData = await response.json();
            setComments(jsonData);
        } catch (err) {
            console.log(err.message)
        }
    }


    return (

         <div>
            <h3>Comments</h3>
            <div>
                <div className="flex">
                    {props.comments.map(comment =>
                        <div class="card">
                        <div class="card-body" key={comment.comment_id}>
                          <h5 class="card-title">{comment.city}, {comment.country}</h5>
                          <p class="card-text">{comment.comment}</p>
                          <h6>{comment.users}</h6>
                        </div>
                      </div>
                    )}
                </div>
            </div>
        </div> 
    )
}

export default ShowPost;