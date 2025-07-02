import { apiFetch } from './index';

export const addWord = ({ original, translation }:{ original:string, translation:string }) => {
    return new Promise(async (resolve,reject)=>{
        try {
            const result = await apiFetch('/api/words', {
                method: 'post',
                body: { original, translation },
            });
            resolve(result)
            console.log('成功新增:', result);
        } catch (error) {
            reject(error)
            console.error('新增失敗:', error);
        }
    })
};

export const getWords = ({ page=1, limit=100}:{ page?:number, limit?:number,sort?:string }) => {
    return new Promise(async (resolve,reject)=>{
        try {
            const result = await apiFetch('/api/words', {
                method: 'get',
                body: { page, limit }
            });
            resolve(result)
            console.log('成功新增:', result);
        } catch (error) {
            reject(error)
            console.error('新增失敗:', error);
        }
    })
};
