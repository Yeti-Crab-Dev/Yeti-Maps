import React, { Fragment, useState } from 'react';

const Form = () => {

    const [city, setCity] = useState('');
    const [country, setCounty] = useState('');
    const [personId, setPersonId] = useState('');


    return (
        <Fragment>
            <form >
                <div>
                    <div>{personId}</div>
                    <div>{city}</div>
                    <div>{country}</div>
                    <div>
                        <input type="text" placeholder="Comment" />
                    </div>
                </div>
                <button >Submit</button>
            </form>
        </Fragment>

    )
}

export { Form }