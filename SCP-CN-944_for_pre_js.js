function replaceOneFiveCharBlockWithMessage() {
  const element = document.querySelector('.explanation');
  if (!element) return;

  const originalText = element.textContent || "";

  const blocks = [];
  for (let i = 0; i < originalText.length; i += 5) {
    blocks.push(originalText.slice(i, i + 5));
  }

  const candidates = [];
  for (let i = 0; i < blocks.length; i++) {
    if (!blocks[i].replace(/\s/g, "").includes("見てるよ")) {
      candidates.push(i);
    }
  }

  if (candidates.length > 0) {
    const randomIndex = candidates[Math.floor(Math.random() * candidates.length)];
    blocks[randomIndex] = '見てるよ　';
  }

  element.textContent = blocks.join("");

  let text = element.textContent || "";
  const replacedHtml = text.replace(/見てるよ　/g, '<span class="seeing-you">見てるよ　</span>');
  element.innerHTML = replacedHtml;
}

// 実行制御：Enterキーで開始
let intervalId = null;
let intervalTime = 800; // 初期速度（ミリ秒）
const accelerationRate = 0.8; // 加速度係数（1より小さくすると加速）

function startAcceleratingInterval() {
  if (intervalId !== null) return; // すでに動作中なら無視

  function run() {
    replaceOneFiveCharBlockWithMessage();

    intervalTime *= accelerationRate;
    if (intervalTime < 5) intervalTime = 5; // 最低間隔を設定（過剰な高速化防止）

    intervalId = setTimeout(run, intervalTime);
  }

  run();
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    startAcceleratingInterval();

        // 3秒後に画像を表示する
    setTimeout(function () {
      const picElement = document.getElementById('pic');
      if (picElement) {
        const img = document.createElement('img');
        img.src = 'SCP-CN-944-eye.png'; // 画像のパス
        img.alt = 'SCP Eye';           
        img.classList.add('scary-eye'); // 画像にクラス名を追加
        picElement.appendChild(img);   // 画像を<p>の中に追加
      }
    }, 4000); 


  }
});
