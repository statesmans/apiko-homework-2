import React, { Fragment } from 'react'
import PostListItem from './ListItem/PostListItem'

let PostList = (props) => {
    let posts = props.posts.map( (post, i) => { 
        let { body, id, title } = { ...post }

        return (i < props.postsLimit && post ? 
                <PostListItem key={post.id} id={id} postTitle={title} postBody={body}/> : null)

        
    })
            

    return (
        <Fragment>
            {posts}
        </Fragment>
    )
}

export default PostList