
import fetchRequest from './xFetch'

export const QCPath = p => {
    if (/^http.*/.test(p)) {
        return p
    };
    return '' + p
}

export const userLogin = async(params) => {
    return await fetchRequest('/UserLogin/login', params);
}