"use strict";

(function () {

    // Constants
    let page = `
<style>
#whynotOIB {
    transition: opacity .3s ease-in-out;
    top: 20px; 
    width: 85%; 
    position: fixed; 
    opacity: 0;
    left: 7.5%;
    border: dashed 1px;
    background: white;
    text-align: center;
    z-index: 31;
}

#whynotOIB.oibDisplay {
    opacity: 1
}

#whynotOIB.noTrans {
    transition: none;
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
  <p>[<a href="//librehs.github.io/whynotoib/">为什么?</a>] [<a id="hideOIBRegBox" class="grey">立即隐藏</a>] <br />
  <span class="grey">（我们会在显示7秒后自动隐藏。）</span></p>
</div>
`

    let haveDone = false;
    let ua = navigator.userAgent;
    let uaList = [
        /(M|m)icro(M|m)essenger/,
        /TIM\//,
        /QQ\//
    ];
    let objectList = [
        "WeixinJSBridge"
    ]
    let eventList = [
        "WeixinJSBridgeReady"
    ]

    // Execution

    if (searchObject() || searchUa()) {
        showOIB();
    } else {
        for (let i of eventList) document.addEventListener(i, () => { showOIB(); })
    }

    // Functions

    function searchObject() {
        for (let i of objectList) {
            if (window[i]) return true;
        }
        return false;
    }

    function searchUa() {
        for (let i of uaList) {
            if (ua.search(i) !== -1) return true;
        }
        return false;
    }

    function showOIB() {
        if (haveDone) return;
        let elem = document.createElement("div");
        elem.innerHTML = page;
        document.body.appendChild(elem);
        setTimeout(() => { document.getElementById('whynotOIB').className = "oibDisplay"; }, 1000);
        setTimeout(() => { hideOIB(false); }, 8000);
        document.getElementById('hideOIBRegBox').addEventListener('click', () => { hideOIB(true) });
        haveDone = true;
    }

    function hideOIB(sudden = true) {
        if (sudden) {
            document.getElementById('whynotOIB').className = "noTrans";
        }
        document.getElementById('whynotOIB').className = "";
    }
})()
