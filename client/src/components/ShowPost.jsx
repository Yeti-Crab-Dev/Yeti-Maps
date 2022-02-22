import React, { useState, useEffect, Fragment } from 'react';


const ShowPost = (props) => {

    const [comments, setComments] = useState([]);
    const [modal, setModal] = useState('')


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
            window.location.reload()
        } catch (error) {
            console.error(error)
        }

    }

    const upDateComment = async (id) => {

        const body = { modal }
        
        try {
            const response = await fetch(`http://localhost:3000/api/comments/${id}`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            })
            // console.log(response)
            window.location.reload()
        } catch (error) {
            console.error(error)
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
                            <button type="button" class="btn btn-light resize" onClick={() => deleteComment(comment.comment_id)}>Delete</button>
                            <button type="button"  class='btn btn-btn-light resize2'data-toggle="modal" data-target="#myModal">Edit</button>
                            <div id="myModal" class="modal fade" role="dialog">
                                <div class="modal-dialog">

                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                            <h4 class="modal-title">Edit Comment</h4>
                                        </div>
                                        <div class="modal-body">
                                            <input type="text" className='form-control' placeholder={comment.comment} onChange={ e => setModal(e.target.value)}/>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-default" data-dismiss="modal" onClick={() => upDateComment(comment.comment_id)}>Submit</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}







export default ShowPost;