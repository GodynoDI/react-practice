import React from 'react';
import MyButton from "./UI/button/MyButton";

const PostItem = React.forwardRef(({index, post, remove}, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__content">
        <strong>{index}. {post.title}</strong>
        <p>{post.description}</p>
      </div>
      <div className="post__buttons">
        <MyButton onClick={() => remove(post)} type="button">
          Удалить
        </MyButton>
      </div>
    </div>
  );
})

export default PostItem;