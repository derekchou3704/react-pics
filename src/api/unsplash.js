import axios from 'axios';

const authKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY
// note that in React all the env variables must start with REACT_APP_
// otherwise it will be blocked automatically

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: `Client-ID ${authKey}`
    }
})