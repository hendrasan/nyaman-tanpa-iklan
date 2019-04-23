init();

function init() {
  let content = document.querySelector('.read__article');
  if (content && content.hasChildNodes()) {
    content.children[1].classList.add('col-bs9-9');
    content.children[1].classList.remove('col-bs9-7');
    content.children[0].remove();
  }

  let items = document.querySelectorAll('[id^=crt-], .kcm__top, .kcm__big, .kcm__horizontal');

  if (items) {
    Array.prototype.forEach.call(items, function(node, i){
      node.remove();
    });
  }

  var observe = document.documentElement || document.body;

  if (observe) {
    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        Array.prototype.slice.call(mutation.addedNodes).forEach(function(el) {
          if (el.tagName && (el.tagName.toLowerCase() == 'script' || el.tagName.toLowerCase() == 'iframe')) { 
            el.remove();
          }

          if ((el.id && el.id == 'videoPlaylistPlugId') || (el.classList && el.classList.contains('videoPlaylistPlugId'))) {
            el.remove();
          }
        });
      });
    });

    observer.observe(observe, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true
    });
  }
}