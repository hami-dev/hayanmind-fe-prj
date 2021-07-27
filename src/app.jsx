import React from "react";
import "styles/app.scss";
import Comment from "components/comment";
import useGetComment from "hooks/useGetComment";
import useObserver from "hooks/useObserver";

export default function App() {
    const { comments, IncreasePage } = useGetComment();
    const { triggerRef } = useObserver(IncreasePage, comments);

    return (
        <section className="section__scroll">
            <h1 className="a11y">Assignment 1</h1>
            <ul className="comment-list">
                {comments.map((comment, idx) =>
                    idx === comment.length - 1 ? (
                        <Comment
                            key={comment.id}
                            id={comment.id}
                            email={comment.email}
                            body={comment.body}
                        />
                    ) : (
                        <Comment
                            key={comment.id}
                            id={comment.id}
                            email={comment.email}
                            body={comment.body}
                            ref={triggerRef}
                        />
                    )
                )}
            </ul>
        </section>
    );
}
