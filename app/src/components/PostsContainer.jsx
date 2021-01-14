import React, { useEffect, Fragment, useState } from 'react'
import * as axios from 'axios'
import MoreBtn from './MoreBtn';
import PostList from './Posts/PostList'
import Loader from './Loader'

export const Posts = ( {posts} ) => {
  const [postsLimit, setLimit] = useState(10);

  let addPosts = () => {
    setLimit(postsLimit + 10)
  }
 
  return (
        <Fragment>
          <PostList postsLimit={postsLimit} posts={posts}/>
          <MoreBtn addPosts={addPosts}/>
        </Fragment>
  )

}

let PostsContainer = route => Component => {
  const API = 'https://jsonplaceholder.typicode.com/'

    let FetchData = () => {
      const [isFetching, setFetchState] = useState(true);
      const [posts, setPosts] = useState([]);

      useEffect(() => {
        async function fetchPosts() {
          setFetchState(true)
          let response = await axios.get(`${API + route}`)
          setPosts(response.data)
          setFetchState(false)
        }

        fetchPosts()
      }, []); 

      return isFetching ? <Loader/> : <Component posts={posts}/>
    }

    return FetchData
}

export default PostsContainer;
