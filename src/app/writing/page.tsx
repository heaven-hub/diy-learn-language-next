'use client'
function getVoicesAsync() {
    return new Promise((resolve) => {
        let voices = speechSynthesis.getVoices();
        if (voices.length) return resolve(voices);

        speechSynthesis.onvoiceschanged = () => {
            voices = speechSynthesis.getVoices();
            resolve(voices);
        };
    });
}
async function speakWithVoice(text = 'Weather experts say extreme cold in many parts of the United States this winter has been driven by a polar vortex. But what is this weather system and how does it work?', voiceName = 'Google US English') {
    const voices: any = await getVoicesAsync();
    const selected = voices?.find((v: any) => v.name === voiceName);
    const utter = new SpeechSynthesisUtterance(text);
    if (selected) utter.voice = selected;
    utter.lang = selected?.lang || 'en-US';
    utter.rate = 1
    speechSynthesis.cancel(); // 建議先取消前一次的朗讀
    speechSynthesis.speak(utter);
}
const testData = async ()=>{
    const res = await fetch('/api/users');
    const data = await res.json();
    console.log('data',data)
}
export default function Page() {
    return (
        <div>
            <h1>writing Page</h1>
            <p>This is the about writing.</p>
            <button onClick={() => speakWithVoice()}>朗讀</button>
            <button onClick={testData}>request Data</button>
            {/* <input type="text" onBlur={(event) => speakWithVoice(event.target.value)} /> */}
        </div>
    );
}
