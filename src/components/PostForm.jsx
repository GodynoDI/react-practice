import React, {useState} from 'react';
import MyInput from './UI/input/MyInput'
import MyButton from './UI/button/MyButton'

const PostForm = ({create}) => {
  const [post, setPost] = useState({title:'', body:'',});

  const addNewPost = () => {
    create({...post, id: Date.now(),});
    setPost({title: '', body: '',})
  }

  return (
    <form action="">
      <MyInput
        value={post.title}
        onChange={e => setPost({...post, title: e.target.value})}
        type="text"
        placeholder="Название поста"
      />
      <MyInput
        value={post.description}
        onChange={e => setPost({...post, description: e.target.value})}
        type="text"
        placeholder="Описание поста"
      />
      <MyButton type="button" onClick={addNewPost}>
        Создать пост
      </MyButton>
    </form>
  );
};

export default PostForm;