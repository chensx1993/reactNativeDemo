
import { QCPath } from 'Services'

const checkIfErrorOccurs = res => {
    return {
        code: res.status,
        res
    }
}

const TIME_OUT = 15000

export const async function fetchRequest(path, params = '', method = 'POST') {
    let header = {
        "Content-Type": "application/json;charset=UTF-8",
    };

    console.log('request url:',url,params);  //打印请求参数

    if (params == '') {
        return await xFetch(QCPath(path), {
            method: method,
            headers: header,
            body: JSON.stringify(params)
        })
    } else {
        return await xFetch(QCPath(path), {
            method: method,
            headers: header,
            body: JSON.stringify(params)
        })
    };
}

export const async function xFetch(path, headerOptions, ops = { noParse: false }) {
    const normalFetch = fetch(path, headerOptions)
    if (ops.noParse) {
        return timeoutPromise(TIME_OUT, normalFetch)
    };

    const res = await timeoutPromise(TIME_OUT, normalFetch.then(checkIfErrorOccurs))
    const response = await res.res.json()
    if (res.code < 300) {
        return response
    } else {
        throw new Error(`${res.code} ${response.message}`)
    }
}

export const timeoutPromise = function timeoutPromise(ms, promise) {
    return new Promise((resolve, reject) => {

        const timeoutId = setTimeout( () => {
            reject(new Error("request time out"))
        }, ms);

        promise.then(
            (res) => {
                clearTimeout(timeoutId);
                resolve(res);
            },
            (err) => {
                clearTimeout(timeoutId);
                reject(err);
            }
        );
    })
}

export default fetchRequest
