// ボタン要素を取得
const button = document.getElementById('btn');
const message = document.getElementById('text');

// ボタンがクリックされたときの処理を設定
button.addEventListener('click', function() {
  message.textContent = 'ボタンをクリックしました';
});