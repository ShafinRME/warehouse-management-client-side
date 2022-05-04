import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Comment.css'

const Comment = ({ comment }) => {
    const { name, comments, img, ratings } = comment;
    return (
        <div className='comment-container' >
            <img src={img} alt="" />
            <h3 className='text-primary'>{name}</h3>
            <p>{comments}</p>
            <h5 className='text-info'>Ratings: {ratings} <FontAwesomeIcon className='font-color' icon={faStar}></FontAwesomeIcon> </h5>

        </div>
    );
};

export default Comment;