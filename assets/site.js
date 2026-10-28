// Language switch: Indonesian or English, remembered in this browser. Without
// JavaScript both languages stay visible.
(function () {
  var root = document.documentElement;
  var saved = null;
  try {
    saved = localStorage.getItem('lang');
  } catch (e) {}
  var lang = saved || ((navigator.language || 'en').indexOf('id') === 0 ? 'id' : 'en');

  function apply(next) {
    root.setAttribute('data-lang', next);
    root.setAttribute('lang', next);
    var buttons = document.querySelectorAll('.lang button');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute('aria-pressed', buttons[i].getAttribute('data-set') === next ? 'true' : 'false');
    }
  }

  apply(lang);
  document.addEventListener('click', function (event) {
    var button = event.target.closest ? event.target.closest('.lang button') : null;
    if (!button) return;
    var next = button.getAttribute('data-set');
    apply(next);
    try {
      localStorage.setItem('lang', next);
    } catch (e) {}
  });
})();
