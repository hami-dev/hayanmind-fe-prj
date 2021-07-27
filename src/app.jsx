import React, { useState, useEffect, useRef } from 'react';

import "styles/app.scss";
import Comment from "components/comment";
import { getComment } from 'api';

export default function App() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [comments, setComments] = useState([]);
  const triggerRef = useRef(null);

  useEffect(() => {
    console.log('page',page);
    getComment(page, limit)
      .then(res => {
        setComments((comments) => [...comments, ...res]);
      });
  },[page, limit]);

  useEffect( () => {
    if (triggerRef.current) {
      const fetchMoreObserver = new IntersectionObserver(([{isIntersecting}]) => {
        if(isIntersecting) {
          setPage((page) => page + 1);
        }
      });
      fetchMoreObserver.observe(triggerRef.current);
    }

  },[triggerRef]);

    return (
        <section className="section__scroll">
            {
              comments.map((comment, idx) => {
                const lastEl = idx === comments.length - 1;
                return <Comment
                  key={comment.id}
                  id={comment.id}
                  name={comment.name}
                  body={comment.body}
                  ref={lastEl ? triggerRef : null}
                />
              })
            }
        </section>
    );
}

