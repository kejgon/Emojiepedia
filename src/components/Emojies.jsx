// jshint esversion:6

import React from 'react';




function Emojies(props) {
    return (
        <div className="term">
            <dt>
                <span className="emoji" role="img" aria-label="Tense Biceps">
                    {props.emoji}
                </span>
                <span>{props.name}</span>
            </dt>
            <dd>
                {props.meaning}
            </dd>
        </div>

    );
}



export default Emojies;