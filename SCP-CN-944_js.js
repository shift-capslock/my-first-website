function replaceOneFiveCharBlockWithMessage() {
  const element = document.querySelector('.explanation');
  if (!element) return;

  const originalText = element.textContent || "";

  // 5文字ごとに区切る
  const blocks = [];
  for (let i = 0; i < originalText.length; i += 5) {
    blocks.push(originalText.slice(i, i + 5));
  }

  // 「見てるよ」が含まれていないブロックだけ抽出
  const candidates = [];
  for (let i = 0; i < blocks.length; i++) {
    if (!blocks[i].replace(/\s/g, "").includes("見てるよ")) {
      candidates.push(i);
    }
  }

  if (candidates.length > 0) {
    // ランダムに1つ選んで置換
    const randomIndex = candidates[Math.floor(Math.random() * candidates.length)];
    blocks[randomIndex] = '見てるよ　';
  }

  // ブロックを結合して一旦テキストとしてセット
  element.textContent = blocks.join("");

  // ここで「見てるよ」を含むすべてを<span>付きに変換
  // ① innerHTMLにタグなしテキストとして入っているので再取得
  let text = element.textContent || "";

  // ② 全「見てるよ」をspan付きに置換（正規表現で全置換）
  const replacedHtml = text.replace(/見てるよ　/g, '<span class="seeing-you">見てるよ　</span>');

  // ③ 最終的にHTMLにセット（赤い見てるよに）
  element.innerHTML = replacedHtml;
}

// ▼ 以下が変更点 ▼

// 初期インターバル（ミリ秒）
let interval = 1000; // 最初は1秒に1回
const minInterval = 50; // 最小速度（これ以上速くならない）
const accelerationFactor = 0.95; // 加速度（0.95なら毎回5%高速化）

function runWithAcceleration() {
  replaceOneFiveCharBlockWithMessage();

  // 次回のインターバルを計算
  interval = Math.max(minInterval, interval * accelerationFactor);

  // 次の実行を予約
  setTimeout(runWithAcceleration, interval);
}

// 実行開始
setTimeout(runWithAcceleration, 30000); // 30秒待ってから開始

