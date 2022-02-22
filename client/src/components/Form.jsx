import React, { Fragment, useState } from 'react';


const Form = (props) => {

    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [user_id, setPersonId] = useState(localStorage.getItem("id"));
    const [comment, setComment] = useState('');

    let lat;
    let lng;


    const onSubmitForm = async e => {
        e.preventDefault();
        // NOTE: Refactor to make numbers Math.float() --> currently database only takes in whole numbers
        lat = (localStorage.getItem("lat"));
        lng = (localStorage.getItem("lng"));
        console.log(lat, lng);
        try {
            console.log('test1');
            const body = { comment, city, country, user_id, lat, lng };
            console.log('test2');
            const response = await fetch("http://localhost:3000/api/comments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            })
            console.log('test3');
            props.handleUpdateComments();
            console.log('test4');
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <form className='form-main' onSubmit={onSubmitForm}>
            <div>
                <h3>Write a review!</h3>
            <div>{lat}</div>
            <div>{lng}</div>
            <div class="form-outline mb-4">
                <input type="text" className="form-control inputbox" placeholder="City" value = {city} onChange={e => setCity(e.target.value)} />
            </div>

            <div className="form-outline mb-4">
                <input type="text" className="form-control inputbox" placeholder="Country" value = {country} onChange={e => setCountry(e.target.value)}/>
            </div>

            <div className="form-outline mb-4">
                <textarea className="form-control inputbox" id="form4Example3" rows="4" placeholder="Comment" value = {comment} onChange={e => setComment(e.target.value)}></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-block mb-4 inputbox">Submit</button>
            </div>
        </form>

    )
}

export { Form }