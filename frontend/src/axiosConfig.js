// First we need to import axios.js
import axios from 'axios';


// Next we make an 'instance' of it
const instance = axios.create({
    // .. where we make our configurations
	baseURL: "http://marcusprunty.co.uk:8800",
});

// Where you would set stuff like your 'Authorization' header, etc ...
//instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// Also add/ configure i:`nterceptors && all the other cool stuff

//instance.interceptors.request...

export default instance;
