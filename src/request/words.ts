import { apiFetch } from './index';
export const addWord = ({ original, translation }:{ original:string, translation:string }) => {
    return new Promise(async (resolve,reject)=>{
        try {
            const result = await apiFetch('/api/words', {
                method: 'post',
                body: { original, translation },
            });
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
};
export const updateWord = ({ original, translation }:{ original:string, translation:string }) => {
    return new Promise(async (resolve,reject)=>{
        try {
            const result = await apiFetch('/api/words', {
                method: 'put',
                body: { original, translation },
            });
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
};
export const getWords = ({ page=1, limit=100}:{ page?:number, limit?:number,sort?:Record<string, 1 | -1>;}) => {
    return new Promise(async (resolve,reject)=>{
        try {
            const result = await apiFetch('/api/words', {
                method: 'get',
                body: { page, limit }
            });
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
};
