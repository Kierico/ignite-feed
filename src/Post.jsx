import React from "react";

/** Named Exports */
export function Post(props) {
    return (
        <React.Fragment>
            <h1>{props.author}</h1>
            <p>{props.content}</p>
        </React.Fragment>
    );
}
