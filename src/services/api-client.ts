import axios from'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '6c0d5ac0bbb344d0a266ae3bbe63791e'
    }
})