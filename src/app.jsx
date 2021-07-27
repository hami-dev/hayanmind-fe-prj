import React from 'react';

import "styles/style.scss";
import UserCommentItem from "components/user-comment-item";

export default function App() {
    return (
      <main id="main">
        <section className="comment-section">
          <ul className="comment-list">
            <UserCommentItem />
            <UserCommentItem />
            <UserCommentItem />
            <UserCommentItem />
            <UserCommentItem />
            <UserCommentItem />
          </ul>
        </section>
      </main>
    );
}

