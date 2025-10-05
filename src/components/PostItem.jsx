import React from 'react';
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>{props.index}. {props.post.title}</strong>
        <p>{props.post.description}</p>
      </div>
      <div className="post__buttons">
        <MyButton onClick={() => props.remove(props.post)} type="button">
          Удалить
        </MyButton>
      </div>
    </div>
  );
};

export default PostItem;