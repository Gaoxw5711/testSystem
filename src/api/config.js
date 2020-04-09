import axios from 'axios';

let BaseURL;
if (process.env === 'development') {
	BaseURL = 'http://127.0.0.1:3000';
}else{
	BaseURL = 'http://127.0.0.1:3000';
};

// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers.common['accessToken'] = 123;
// axios.defaults.headers.common['projId'] = 213;

export {BaseURL,axios};