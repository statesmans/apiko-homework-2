import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PostsContainer from './components/PostsContainer';
import { Posts } from './components/PostsContainer'

let EnhacedPosts = PostsContainer('posts')(Posts)

ReactDOM.render( <EnhacedPosts/>, document.getElementById('root') );