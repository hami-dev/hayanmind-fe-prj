import React, { forwardRef } from "react";

const Comment = forwardRef(({ id, email, body }, ref) => {
    return (
        <li className="comment" ref={ref}>
            <dl className="comment__info">
                <dt className="comment__title">Comment Id</dt>
                <dd>{id}</dd>
            </dl>
            <dl className="comment__info">
                <dt className="comment__title">Email</dt>
                <dd>{email}</dd>
            </dl>
            <dl className="comment__info">
                <dt className="comment__title">Comment</dt>
                <dd>{body}</dd>
            </dl>
        </li>
    );
});

export default Comment;
