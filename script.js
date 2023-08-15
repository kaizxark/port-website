/*scroll bar */

let progress = document.getElementById('scrollbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function() {
  let progressHeight  =(window.page-YOffset / totalHeight) * 100;
  progress.style.height = progressHeight + '%';
}

 