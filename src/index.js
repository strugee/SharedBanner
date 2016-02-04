document.addEventListener('DOMContentLoaded', function() {
  var body = document.getElementsByTagName('body')[0]
  var banner = document.createElement("div");
  banner.innerHTML = NS['tmp/index.html'];
  body.insertBefore(banner, body.firstChild)

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');

  style.type = 'text/css';
  if (style.styleSheet) {
    style.styleSheet.cssText = NS['tmp/style.css'];
  } else {
    style.appendChild(document.createTextNode(NS['tmp/style.css']));
  }

  head.appendChild(style);

  var l = document.createElement('link'); l.rel = 'stylesheet';
  l.href = 'https://code.cdn.mozilla.net/fonts/fira.css';
  var h = document.getElementsByTagName('head')[0]; h.parentNode.insertBefore(l, h);
});