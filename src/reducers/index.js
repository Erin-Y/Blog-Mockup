import { combineReducers } from 'redux';
import PostsReaducer from './reducer_posts';

const rootReducer = combineReducers({
  posts: PostsReaducer
});

export default rootReducer;
