
import fetchRequest from './xFetch'

export const QCPath = p => {
    if (/^http.*/.test(p)) {
        return p
    };
    return 'http://beta-dev.qqty.com:8099/Api500' + p
}

export const userLogin = async(params) => {
    // return await fetchRequest('/UserLogin/login', params);
    return await fetchRequest('https://www.baidu.com');
}