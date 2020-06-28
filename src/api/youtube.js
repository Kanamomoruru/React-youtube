import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtuobe/v3',
    params: {
        part: 'snippet',
        maxResult: 5,
        key: '[]'
    }
})