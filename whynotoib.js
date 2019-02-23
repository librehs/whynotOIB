"use strict";

var page = `
<style>
#whynotOIB.oibFadeIn {
    opacity: 1;
	animation: oibFadeIn ease-in .5s;
}

@keyframes oibFadeIn {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

#whynotOIB {
    transition: opacity .5s ease-out;
    top: 20px; 
    width: 85%; 
    position: fixed; 
    opacity: 0;
    margin-left: 7.5%;
    background: white;
    text-align: center;
    z-index: 31;
}

#whynotOIB.oibNoDisplay {
    opacity: 0
}

#whynotOIB .grey {
    color: grey
}

</style>
<div id="whynotOIB">
  <h2>你好。</h2>
  <p>为什么不试试用你的浏览器（而不是微信）访问这里呢？</p>
  <p>点击右上角的三个点，然后选择“在浏览器中打开”。</p>
  <p>这能更好地保护你的隐私，也许还能更好地保护互联网。</p>
  <p>[<a href="//librehs.github.io/whynotoib/">为什么?</a>] [<a class="grey" onclick="hideOIB()">立即隐藏</a>] <span class="grey">（我们会在显示7秒后自动隐藏。）</span></p>
</div>
`

if (window.WeixinJSBridge || navigator.userAgent.search('MicroMessenger')) {
    let elem = document.createElement("div");
    elem.innerHTML = page;
    document.body.appendChild(elem);
    document.getElementById('whynotOIB').className = "oibFadeIn";
    setTimeout( () => {hideOIB();}, 7000 );
}

function hideOIB() {
    document.getElementById('whynotOIB').className = "oibNoDisplay";
}