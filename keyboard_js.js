function highlightSymbols() {
  // class="code" の preタグを全部取得
  var pres = document.getElementsByClassName("code");

  for (var j = 0; j < pres.length; j++) {
    var pre = pres[j];
    var rawText = pre.textContent;

    var safeText = rawText.replace(/&/g, "&amp;");
    safeText = safeText.replace(/</g, "&lt;");
    safeText = safeText.replace(/>/g, "&gt;");

    var result = "";
    for (var i = 0; i < safeText.length; i++) {
      var ch = safeText[i];

      if (ch === '(' || ch === ')' ||
          ch === '{' || ch === '}' ||
          ch === '[' || ch === ']' ||
          ch === '\'' || ch === '"' ||
          ch === '-' || ch === '=') {
        result += '<span class="highlight">' + ch + '</span>';
      } else {
        result += ch;
      }
    }

    pre.innerHTML = result;
  }
}
