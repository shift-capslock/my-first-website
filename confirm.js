// confirm.js

document.addEventListener('DOMContentLoaded', () => {
  const scpLink = document.querySelector('a[href="SCP-CN-944_for_pre.html"]');

  if (scpLink) {
    scpLink.addEventListener('click', (event) => {
      event.preventDefault(); // リンクの遷移を一旦止める

      const proceed = window.confirm(
        "この先、少しだけ恐怖を煽るような表現があります。\nそれでも進みますか？"
      );

      if (proceed) {
        // OK（yes）なら遷移
        window.location.href = scpLink.href;
      } 
      // キャンセル（no）なら何もしない
    });
  }
});
