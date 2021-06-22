import axios from "axios";

import {toast} from 'react-toastify';
// CRUD -> POST, GET, PUT, DELETE

// AJAX
// function loadDoc(){
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function (){
//         if(this.readyState == 4 && this.status == 200){
//             console.log(this.responseText);
//         }
//     };
//     xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts",true);
//     xhttp.send();
// }

axios.interceptors.response.use(null,error => {
    const expectedError = error.response && error.response.status < 500 && error.response.status>=400;
    if(expectedError){
        toast.error('Expected error occured');
    }else{
        toast("Unexpected Error")
    }
    return Promise.reject(error);
});

export default{
    get: axios.get,
    put: axios.put,
    post: axios.post,
    delete: axios.delete
}