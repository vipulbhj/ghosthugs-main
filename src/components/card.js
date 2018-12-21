import React from 'react';

const CARD = (props) => (
    <div className="card">
        <img src={props.src} alt={props.alt || "Image Description"} className="imageSpace" />
        <p><strong>{props.title}</strong></p>
        <small>{props.des}</small>
    </div>
)

export default CARD;
