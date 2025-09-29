import { create } from 'zustand'
import { getWords } from '@/request/words'
import type { wordDataType } from '@/type/words'

interface WordsStore {
    words: wordDataType[]
    loading: boolean
    error: string | null
    fetchWords: (params?:any) => Promise<void>
    addWord: (original: string, translation: string) => Promise<void>
}

export const useWordsStore = create<WordsStore>((set,get) => ({
    words: [],
    loading: false,
    error: null,

    fetchWords: async ({page = 1,limit = 0,refresh = false }) => {
        set({ loading: true, error: null })
        return new Promise(async (resolve,reject)=>{
            const { words } = get()
            if((!refresh && words.length)){
                set({ words: words || [], loading: false })
                resolve(words as any)
                return
            }
            try {
                const res:any = await getWords({page,limit })
                const data = res.data
                set({ words: data || [], loading: false })
                resolve(data)
            } catch (err: any) {
                set({ error: err, loading: false })
                reject({ error: err })
            }
        })
    },

    addWord: async (original, translation) => {
        set({ loading: true, error: null })
        try {
            const res = await fetch('/api/words', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ original, translation }),
            })
            if (!res.ok) throw new Error('Failed to add word')

            const newWord = await res.json()
            set((state) => ({
                words: [...state.words, newWord],
                loading: false,
            }))
        } catch (err: any) {
            set({ error: err.message, loading: false })
        }
    },
}))
