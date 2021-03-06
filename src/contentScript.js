// detectKeyDown 불러오기
const script = document.createElement('script');
script.src = chrome.extension.getURL('detection.js');
(document.head || document.documentElement).appendChild(script);


// <textarea> 태그들에 onkeydown 속성 추가
const inputs = document.getElementsByTagName('textarea');
const inputArray = Array.from(inputs);
inputArray.forEach(function(input){
    input.setAttribute('onkeydown', 'detectKeyDown();');
});

const htmldata = `
    <div id="app">
        <div id="float_btn">
            <img id="pause" src="${chrome.extension.getURL("img/main_pause.png")}" />
            <img id="close" src="${chrome.extension.getURL("img/main_end.png")}" />
        </div>
        <div id="main" style="background-image: url('${chrome.extension.getURL("img/8bit_background.png")}')">
            <div id="main_text">
                <img src="${chrome.extension.getURL("img/main_logo.png")}" />
                <div id="start">
                    <div>
                    ▶︎
                    </div>
                    <img src="${chrome.extension.getURL("img/main_start.png")}" />
                </div>
                <div id="exit">
                    <div></div>
                    <img src="${chrome.extension.getURL("img/main_exit.png")}" />
                </div>
            </div>
        </div>
        <div id="playground">
            <div id="letsCoding" class="animate-flicker">
                <img src="${chrome.extension.getURL("img/main_lets_coding.png")}" />
            </div>
            <div id="bgArea">
                <img class="bgImg" id="bg1" src="${chrome.extension.getURL("img/8bit_background.png")}" />
                <img class="bgImg" id="bg2" src="${chrome.extension.getURL("img/8bit_background.png")}" style="left: 600px;"/>
                <img class="bgImg" id="bg3" src="${chrome.extension.getURL("img/8bit_background.png")}" style="left: 1200px;"/>
                <img class="bgImg" id="bg4" src="${chrome.extension.getURL("img/8bit_background.png")}" style="left: 1800px;"/>
            </div>
            <div id="bug"> 
                <img class="img1" src="${chrome.extension.getURL("img/bug_1.png")}" />
                <img class="img1" src="${chrome.extension.getURL("img/bug_2.png")}" />
                <img class="img1" src="${chrome.extension.getURL("img/bug_3.png")}" />
                <img class="img1" src="${chrome.extension.getURL("img/bug_4.png")}" />
            </div>
            <div id="developer"> 
                <img class="img1" src="${chrome.extension.getURL("img/developer_1.png")}" />
                <img class="img1" src="${chrome.extension.getURL("img/developer_2.png")}" />
                <img class="img1" src="${chrome.extension.getURL("img/developer_3.png")}" />
                <img class="img1" src="${chrome.extension.getURL("img/developer_4.png")}" />
            </div>
            <div id="developer_infected">
                <img class="img1" src="${chrome.extension.getURL("img/green_developer.png")}" />
                <img class="img1" src="${chrome.extension.getURL("img/developer_1.png")}" />
                <div id="yg">
                    <img src="${chrome.extension.getURL("img/yageun_text.png")}" />
                    <img src="${chrome.extension.getURL("img/yageun_text.png")}" />
                    <img src="${chrome.extension.getURL("img/yageun_text.png")}" />
                    <img src="${chrome.extension.getURL("img/yageun_text.png")}" />
                </div>
            </div>
        </div>
    </div>
`;

var e  = document.createElement ("div");
e.innerHTML = htmldata;

e.style.width = '100%';
e.style.height = '300px';
e.style.position = 'fixed';
e.style.bottom = '0';
e.style.zIndex = '100';

//document.body.insertBefore (iFrame, document.body.lastChild);
console.log(e);
document.body.appendChild(e);