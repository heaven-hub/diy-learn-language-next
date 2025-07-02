import { create } from 'zustand'
import { getWords } from '@/request/words'
interface Word {
    id: string
    original: string
    translation: string
}

interface WordsStore {
    words: Word[]
    loading: boolean
    error: string | null
    fetchWords: () => Promise<void>
    addWord: (original: string, translation: string) => Promise<void>
}

export const useWordsStore = create<WordsStore>((set) => ({
    words: [],
    loading: false,
    error: null,

    fetchWords: async () => {
        set({ loading: true, error: null })
        try {
            const res:any = await getWords({page:1,limit:100})
            const data = res.data
            set({ words: data || [], loading: false })
        } catch (err: any) {
            set({ error: err.message, loading: false })
        }
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
