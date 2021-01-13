import React, { useEffect, Fragment, useState } from 'react'
import * as axios from 'axios'
import MoreBtn from './components/MoreBtn';
import PostList from './components/Posts/PostList'
import Preloader from './components/Preloader'

let App = () => {
  const [postsLimit, setLimit] = useState(10);
  const [posts, setPosts] = useState([]);
  const [isFetching, setFetchState] = useState(true);

   useEffect(() => {
      async function fetchPosts() {
        setFetchState(true)
        let response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setPosts(response.data)
        setFetchState(false)
      }

      fetchPosts()
  }, []);

  let addPosts = () => {
    setLimit(postsLimit + 10)
  }
 
  return (
    isFetching || posts.length === 0 ? <Preloader/> : <Fragment>
                                  <PostList postsLimit={postsLimit} posts={posts}/>
                                  <MoreBtn addPosts={addPosts}/>
                                </Fragment>
  )

}

export default App;
