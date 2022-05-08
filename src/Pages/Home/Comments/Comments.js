import React, { useEffect, useState } from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Comment from './Comment/Comment';
import './Comments.css'

const Comments = () => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/comment')
            .then(res => res.json())
            .then(data => setComments(data))
    }, []);


    return (
        <div id='comments' className='container'>
            <PageTitle title="Comments"></PageTitle>
            <h3 className='text-center p-5 mt-3 mb-3 comments-header'>Comments</h3>
            <div className='comments-container'>
                {
                    comments.map(comment => <Comment
                        key={comment._id}
                        comment={comment}
                    ></Comment>)
                }
            </div>



        </div>
    );
};

export default Comments;