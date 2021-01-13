import React from 'react'
import s from '../../../App.module.scss'

let PostListItem = (props) => {

    return (
        <div className={s.post}>
            <p className={s.post__id}>{props.id}</p>
            <div className={s.post__body}>
                <h3 className={s.post__title}>{props.postTitle}</h3>
                <p className={s.post__text}>{props.postBody}</p>
            </div>

        </div>
    )
}

export default PostListItem