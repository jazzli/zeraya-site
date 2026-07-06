// Language toggle — preference kept in localStorage only. No cookies, no analytics.
(function () {
  var KEY = "zeraya-lang";
  var LANGS = ["en", "zh-Hans", "zh-Hant"];

  function detect() {
    try {
      var saved = localStorage.getItem(KEY);
      if (LANGS.indexOf(saved) !== -1) return saved;
    } catch (e) {}
    var nav = (navigator.languages || [navigator.language || "en"]).join(",").toLowerCase();
    if (/zh-hant|zh-tw|zh-hk|zh-mo/.test(nav)) return "zh-Hant";
    if (/zh/.test(nav)) return "zh-Hans";
    return "en";
  }

  function apply(lang) {
    document.documentElement.setAttribute("lang", lang);
    var blocks = document.querySelectorAll("[data-lang]");
    for (var i = 0; i < blocks.length; i++) {
      blocks[i].hidden = blocks[i].getAttribute("data-lang") !== lang;
    }
    var buttons = document.querySelectorAll("[data-set-lang]");
    for (var j = 0; j < buttons.length; j++) {
      buttons[j].classList.toggle("active", buttons[j].getAttribute("data-set-lang") === lang);
    }
    try { localStorage.setItem(KEY, lang); } catch (e) {}
  }

  document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll("[data-set-lang]");
    for (var i = 0; i < buttons.length; i++) {
      (function (btn) {
        btn.addEventListener("click", function () {
          apply(btn.getAttribute("data-set-lang"));
        });
      })(buttons[i]);
    }
    apply(detect());
  });
})();
