import React, {Fragment} from "react";

const SignOut = () => {

    const onClick = () => {
		localStorage.clear();
        window.location('http://localhost:3000/api/userlogin')
    }

    return(
        <Fragment>
            <div>
                <form onSubmit={onClick}>
                    <button type="submit" class="btn btn-primary">Logout</button>
                </form>
            </div>
        </Fragment>
    )
}

export { SignOut };
