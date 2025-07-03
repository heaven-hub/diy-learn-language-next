"use client";
export function getVoicesAsync() {
    return new Promise((resolve) => {
        let voices = speechSynthesis.getVoices();
        if (voices.length) return resolve(voices);

        speechSynthesis.onvoiceschanged = () => {
            voices = speechSynthesis.getVoices();
            resolve(voices);
        };
    });
}
export async function speakWithVoice(text: string, onStart?: () => void, onEnd?: () => void,voiceName = 'Samantha') {
    const voices: any = await getVoicesAsync();
    // const USvoices = voices.filter(item=>item.lang === 'en-US')
    // const selected = USvoices[index]
    const selected = voices?.find((v: any) => v.name === voiceName);
    const utter = new SpeechSynthesisUtterance(text);
    if (selected) utter.voice = selected;

    utter.lang = selected?.lang || 'en-US';
    utter.rate = 1
    utter.onstart = () => onStart?.();
    utter.onend = () => onEnd?.();
    utter.onerror = () => onEnd?.(); // 出錯時也結束
    speechSynthesis.cancel(); // 建議先取消前一次的朗讀
    speechSynthesis.speak(utter);
}
export function stopVoice() {
    speechSynthesis.cancel(); // 建議先取消前一次的朗讀
}