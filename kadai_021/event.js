// ボタン要素を取得
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンをクリックした2秒後に文字を書き換える
function handleClick() {
    setTimeout(() => {
        text.innerText = 'ボタンをクリックしました'; // ここで実際に文章を書き換える
    }, 2000);
}

// ボタンにクリックイベントリスナーを追加する
btn.addEventListener('click', handleClick);