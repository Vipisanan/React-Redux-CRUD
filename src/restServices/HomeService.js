import axios from "axios/index";

export function getDataInService() {
    return new Promise(((resolve, reject) =>{
        axios({
            method:'GET',
            url:'http://13.250.96.9:9015/team/',
            params: {},
            timeout: 60000
        }).then((res)=>{
            resolve(res);
        }).catch((error)=>{
            reject(error);
        });
    }));
}
