var NS = NS || {};
NS["tmp/index.html"] = '<link rel="stylesheet" type="text/css" href="style.css">\n\n<div id="widget">\n\n  <span class="logo">\n    <h1>Firefox UX</h1>\n  </span>\n\n  \n    <a href="http://mozilla.com">Mozilla</a>\n  \n    <a href="http://www.firefox.com">Firefox</a>\n  \n\n</div>';
NS["tmp/style.css"] = 'body {\n  padding-top: 50px !important; /*to account for the banner*/\n}\n\n#widget, #widget * {\n  -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box;\n}\n\n#widget {\n  font-family: "Open Sans";\n  font-weight: 100;\n  box-sizing: border-box;\n  background: #FEFEFE;\n  color: white;\n  height: 50px;\n  line-height: 50px;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  padding: 0 20px 0 20px;\n  text-align: left;\n  color: #79818A;\n  border-bottom: 1px solid #DADADA;\n  box-shadow: 0 3px 0 rgba(0,0,0,0.02);\n}\n\n#widget a {\n  font-weight: 400;\n  font-size: 12px;\n  color: #79818A;\n  text-decoration: none;\n  float: right;\n  padding-left: 10px;\n}\n\n#widget a:hover {\n  text-decoration: underline;\n}\n\n#widget .logo {\n  background-image: url(\'data:image/png;base64,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\');\n  height: 100%;\n  background-size: 32px;\n  background-repeat: no-repeat;\n  background-position: center left;\n  display: inline-block;\n  padding-left: 45px;\n}\n\n#widget h1 {\n  display: inline-block;\n  padding: 0;\n  margin: 0;\n  font-size: 16px\n}';
;document.addEventListener('DOMContentLoaded', function() {
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
});