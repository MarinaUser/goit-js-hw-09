!function(){var t=document.querySelector("body"),e=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");e.addEventListener("click",(function(){a=setInterval((function(){t.style.backgroundColor="".concat("#".concat(Math.floor(16777215*Math.random()).toString(16)))}),1e3),e.setAttribute("disabled","disabled"),d.removeAttribute("disabled")})),d.addEventListener("click",(function(){clearInterval(a),d.setAttribute("disabled","disabled"),e.removeAttribute("disabled")})),d.setAttribute("disabled","disabled");var a=null}();
//# sourceMappingURL=01-color-switcher.758b786a.js.map