import React, {forwardRef} from "react";

const Comment = forwardRef(({ id, email, body }, ref) => {
    return (
        <div className="scroll__box" ref={ref}>
            <div className="comment__info">
                <span className="comment__title">Comment Id</span>
                <span className="comment__id">{id}</span>
            </div>
            <div className="comment__mail">
                <span className="comment__title">Email</span>
                <span>{email}</span>
            </div>
            <div className="comment__content">
                <div className="comment__title">Comment</div>
                <div>{body}</div>
            </div>
        </div>
    );
})

export default Comment;
