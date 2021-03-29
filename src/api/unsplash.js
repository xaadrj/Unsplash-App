import axios from 'axios';


export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers : { Authorization: 'Client-ID HIuALhNldP8tc-L4S2ysJEiYWLP9Cd1k_fCyuisEwGo' }

});