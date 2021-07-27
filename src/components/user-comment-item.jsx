import React from 'react';

import 'styles/user-comment-item.scss'

export default function UserCommentItem() {
	return (
		<li className="comment-item">
			<div className="container">
				<div className="info">
					<h3 className="title">
						Comment Id
					</h3>
					<span className="text">
						1
					</span>
				</div>
				<div className="info">
					<h3 className="title">
						Email
					</h3>
					<span className="text">
						v_oyb@naver.com
					</span>
				</div>
				<div className="info">
					<h3 className="title">
						Comment
					</h3>
					<span className="text">
						est natus enim nihil est dolore omnis voluptatem numquam et omnis occaecati quod ullam at voluptatem error expedita pariatur nihil sint nostrum voluptatem reiciendis et
					</span>
				</div>
			</div>
		</li>
	);
}
