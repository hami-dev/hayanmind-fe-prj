import React, { useState, useEffect } from "react";
import axios from "axios";
import Comment from "./comment";

import "./../styles/scroll.scss";

function Scroll() {
    const [comments, setComments] = useState([]);
    // const [page, setPage] = useState(1);

    useEffect(() => {
        const getComments = async () => {
            let getComments = await axios.get(
                `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=10`
            );
            const comments = getComments.data;
            setComments(comments);
        }; //getComments
        getComments();
    });

    return (
        <section className="section__scroll">
            {comments.map((comment) => (
                <Comment
                    key={comment.id}
                    id={comment.id}
                    email={comment.email}
                    body={comment.body}
                />
            ))}
        </section>
    );
}

export default Scroll;
