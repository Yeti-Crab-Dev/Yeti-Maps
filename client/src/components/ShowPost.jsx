import React, { useState, useEffect } from 'react';


const ShowPost = () => {

    const [comments, setComments] = useState([]);


    useEffect(() => {
        getAllComment();
    }, [])


    const getAllComment = async () => {
        try {
            const response = await fetch("http://localhost:3000/api");
            const jsonData = await response.json();
            setComments(jsonData);
        } catch (err) {
            console.log(err.message)
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
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default ShowPost;