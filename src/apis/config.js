import axios from "axios";
console.log(process.env)
 export const axiosInstance =axios.create({
   baseURL:process.env.REACT_APP_BASE_URL
   //  baseURL:"https://api.themoviedb.org/3"
 })

//  axiosInstance.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     console.log(config)
//     config.headers['Authrization'] = 'BEARER_TOKEN 12345679'
//     return config;
// }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
// });

// // Add a response interceptor
// axiosInstance.interceptors.response.use(function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     console.log(response)
//     return response;
// }, function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return Promise.reject(error);
// });