import React from 'react'
import s from '../App.module.scss'

let MoreBtn = ({ addPosts }) => ( <button className={s.moreBtn} onClick={addPosts}>More</button> )

export default MoreBtn