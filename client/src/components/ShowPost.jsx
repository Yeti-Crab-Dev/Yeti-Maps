import axios from 'axios';
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

    const deleteComment = async (id) => {
        // console.log('in delete command')
        console.log(id)
        try {
            await fetch(`http://localhost:3000/api/comments/${id}`, {
                method: 'DELETE',
            })
            setComments(comments.filter(el => el.comments_id !== id))
        } catch (error) {
            console.error(error)
        }
            
    }
        
  const upDateComment = async(id) => {
    try {
        // await fetch(`http://localhost:3000/api/comments/${id}`, {
        //     method: 'PUT',
        // })
    } catch (error) {
        console.error(error)
    }
  }

    return (

         <div>
            <h3>Comments</h3>
            <table>
                <tbody>
                    {comments.map(comment =>
                        <tr key={comment.comment_id}>
                            <td>{comment.city} </td>
                            <td>{comment.country}</td>
                            <td>{comment.comment}</td>
                            <td>{comment.users}</td>
                            <button onClick={() => deleteComment(comment.comment_id)}>Delete</button>

                            <button type="button" data-toggle="modal" data-target="#myModal">Edit</button>

                            <div id="myModal" class="modal fade" role="dialog">
                            <div class="modal-dialog">

                                <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    <h4 class="modal-title">Edit Comment</h4>
                                </div>
                                <div class="modal-body">
                                    <input type="text" className='form-control'/>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                </div>
                                </div>

                            </div>
                            </div>
                        </tr>
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