import React, { Fragment } from 'react'
import PostListItem from './ListItem/PostListItem'

let PostList = (props) => {
    let posts = props.posts.map( (post, i) => { 
        if(i < props.postsLimit) {
            return (<PostListItem key={post.id} id={post.id} postTitle={post.title} postBody={post.body}/>)
        } else {
            return null
        }
    })
            

    return (
        <Fragment>
            {posts}
        </Fragment>
    )
}

export default PostList