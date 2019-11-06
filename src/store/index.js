import {createStore} from 'redux';
import reducers from '../reducer/index';


export default async function configureStore(initialState) {
    const initGetData = {
        "content": [
            {
                "id": 8,
                "name": "jhjkhgkhfdgfd",
                "number": 454,
                "team": {
                    "id": 3,
                    "name": "ddwwwwww",
                    "logo": "https://nepl-prod.s3.amazonaws.com/1571661119311-Screenshot_from_2019-10-20_21-16-19.png",
                    "district": "undefined",
                    "owner": "ddd",
                    "ownerLogo": "https://nepl-prod.s3.amazonaws.com/1571661119540-Screenshot_from_2019-10-16_13-52-22.png",
                    "address": "ddd",
                    "mobileNo": "0779398779",
                    "residenceNo": "0779698775",
                    "eMail": "jhghjg@gmail.com",
                    "image": "https://nepl-prod.s3.amazonaws.com/1571661119040-Screenshot_from_2019-10-16_13-52-22.png",
                    "video": "",
                    "description": ""
                },
                "position": "fghhffghj",
                "district": "jhghjghj",
                "age": 19,
                "image": "https://nepl-prod.s3.amazonaws.com/1572329823965-Screenshot_from_2019-10-22_08-18-10.png"
            },
            {
                "id": 9,
                "name": "hghf",
                "number": 546,
                "team": {
                    "id": 3,
                    "name": "ddwwwwww",
                    "logo": "https://nepl-prod.s3.amazonaws.com/1571661119311-Screenshot_from_2019-10-20_21-16-19.png",
                    "district": "undefined",
                    "owner": "ddd",
                    "ownerLogo": "https://nepl-prod.s3.amazonaws.com/1571661119540-Screenshot_from_2019-10-16_13-52-22.png",
                    "address": "ddd",
                    "mobileNo": "0779398779",
                    "residenceNo": "0779698775",
                    "eMail": "jhghjg@gmail.com",
                    "image": "https://nepl-prod.s3.amazonaws.com/1571661119040-Screenshot_from_2019-10-16_13-52-22.png",
                    "video": "",
                    "description": ""
                },
                "position": "hgfdgfdg",
                "district": "hgfhgf",
                "age": 0,
                "image": "https://nepl-prod.s3.amazonaws.com/1571837801015-Screenshot_from_2019-10-22_08-24-15.png"
            }
        ],
        "last": false,
        "totalPages": 7,
        "totalElements": 13,
        "sort": null,
        "first": false,
        "numberOfElements": 2,
        "size": 2,
        "number": 1
    };

    const store = createStore(reducers, {
        getDataInStore: {
            getDataInStore: initGetData
        }
    });

    if (module.hot) {
        module.hot.accept(() => {
            const nextRootReducer = require('../reducer/index').default;
            store.replaceReducer(nextRootReducer)
        });
    }
    return new Promise(((resolve, reject) => {
        resolve(store);
    }));
}
