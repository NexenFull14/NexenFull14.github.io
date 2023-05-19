import { get } from 'axios';

const url = "https://nexenfull14.github.io/";

get(url)
 .then((response) => {
    console.log(response.data);
 })
 .catch((error) => {
    console.log(error);
 });