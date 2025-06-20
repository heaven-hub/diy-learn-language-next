import { apiFetch } from './index';

export const addWord = async ({ original, translation }:{ original:string, translation:string }) => {
    try {
        const result = await apiFetch('/api/words', {
            method: 'post',
            body: { original, translation },
        });

        console.log('成功新增:', result);
    } catch (error) {
        console.error('新增失敗:', error);
    }
};

export const getWords = async ({ page=2, limit=15,sort }:{ page:number, limit:number,sort?:string }) => {
    try {
        const result = await apiFetch('/api/words', {
            method: 'get',
            body: { page, limit,sort }
        });

        console.log('成功新增:', result);
    } catch (error) {
        console.error('新增失敗:', error);
    }
};
