import React, { useRef, createRef } from "react";
import PostItem from "./PostItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const PostList = ({ posts, title, remove }) => {
  const nodeRefs = useRef(new Map());
  const getNodeRef = (id) => {
    if (!nodeRefs.current.has(id)) {
      nodeRefs.current.set(id, createRef());
    }
    return nodeRefs.current.get(id);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <TransitionGroup component={null}>
        {posts.map((post, index) => {
          const nodeRef = getNodeRef(post.id);
          return (
            <CSSTransition
              key={post.id}
              nodeRef={nodeRef}
              timeout={200}
              classNames="post"
            >
              <PostItem ref={nodeRef} remove={remove} index={index + 1} post={post} />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
