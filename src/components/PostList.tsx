import React, { useEffect } from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import PostType from '../types/Post';

type Props = {};

const PostList = (props: Props) => {

  const posts = useSelector( (store: any) => store.postList);

  const dispatch = useDispatch();

  useEffect( () => {
    try {
      axios.get('https://jsonplaceholder.typicode.com/todos')
        .then( (res) => {
          console.log(res.data);
          dispatch({
            type: 'setPosts',
            payload: res.data
          })
        })
        .catch( (error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div style={{ backgroundColor: 'lightblue', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <h1>Posts List</h1>
      {
        posts ? (
          posts.map( (post: PostType, index: number) => {
            return (
              <div key={index} style={{ backgroundColor: 'green', width: '45%', marginTop: 10 }}>
                <h6>{ post.userId }</h6>
                <h5>{ post.id }</h5>
                <h3>{ post.title }</h3>
                <h5>{ post.completed }</h5>
              </div>
            );
          })
        ) : 'No Posts available'
      }
    </div>
  )

}

export default PostList;