import axios from 'axios';

export const FETCH_POST = 'fetch_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=PAPERCLIP0000';

export function fetchPost() {
    const request = axios.get()

    return {
        type: FETCH_POST

    };
}