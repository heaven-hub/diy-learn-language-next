// 注意：這段程式碼需要在一個 async 函數中執行

let fileHandle;

export async function openFile() {
    // try {
    //     // 彈出文件選擇器
    //     [fileHandle] = await window.showOpenFilePicker();
    //     // 獲取文件物件
    //     const file = await fileHandle.getFile();

    //     // 讀取內容
    //     const contents = await file.text();

    //     // 將 fileHandle 存入 IndexedDB 以備後用
    //     // ... (IndexedDB 相關操作)

    //     console.log(contents);
    // } catch (err) {
    //     console.error('操作被取消或失敗:', err);
    // }
}

// 假設你已經將 handle 從 IndexedDB 中讀出
export async function readFileAgain() {
    // 檢查權限
    // let savedHandle = fileHandle
    // if (await savedHandle.queryPermission({ mode: 'read' }) === 'granted') {
    //     const file = await savedHandle.getFile();
    //     const contents = await file.text();
    //     console.log('再次讀取成功:', contents);
    // } else {
    //     // 請求權限
    //     if (await savedHandle.requestPermission({ mode: 'read' }) === 'granted') {
    //         // ... 重新讀取
    //     }
    // }
}