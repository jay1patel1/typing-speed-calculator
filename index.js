// * HTML Elements
let pageHTML = document.getElementById('page')

// * Global Variable
let keyStrokeCount = 0;
const keys = `1234567890-=qwertyuiop[]\asdfghjkl;'zxcvbnm,./!@#$%^&*()_+QWERTYUIOP{}ASDFGHJKLz:"ZXCVBNM<>?`
let activeKey = 'A';
let typeStartTimeStamp;
let lastPushTimeStamp;
let typeSpeed;

// ** Page1 HTML
const pG_1 = `
        <div id="title" class="visible">
            <div class="bg-[#737690] py-10 px-8 ring-[#EAEEFF] rounded-lg shadow-lg shadow-[#EAEEFF]/25">
            <p class="text-[#EAEEFF] font-extrabold font-mono text-3xl">Press any key to start typing</p>
            </div>
        </div>
`;
// ** Page2 HTML
const pG_2 = `
<div class="bg-[#737690] p-6 rounded-lg shadow-2xl ring-[#EAEEFF] shadow-[#EAEEFF]/25 flex flex-col items-center justify-center">
        <div class="bg-[#EAEEFF] mb-6 my-auto w-32 h-32 rounded-xl shadow-inner border-solid border-2 border-[#212C3D] flex justify-center items-center">
            <div class="text-6xl">
                <p id="randomKey"></p>
            </div>
        </div>
        <div class="mb-6">
            <table class="border-separate border-spacing-2 border border-[#EAEEFF]">
                <thead class="bg-[#D2A517] ">
                <tr>
                    <th class="border border-[#EAEEFF] w-32">Key Pressed</th>
                    <th class="border border-slate-300 w-32">Key Code</th>
                    <th class="border border-slate-300 w-32">Code</th>
                </tr>
                </thead>
                <tbody class="text-gray-50 font-bold text-center h-16 text-xl">
                <tr>
                    <td class="border border-slate-300" id="keyPressed"></td>
                    <td class="border border-slate-300" id="keyCode"></td>
                    <td class="border border-slate-300" id="code"></td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="bg-[#857555] p-5 border-2 rounded-lg mb-6 text-[#FFEECA] text-xl font-bold">
            <p>Speed: <span id="tp_Speed">0</span> WPM</p>
        </div>
        <div class="bg-[#D2A517] p-2 rounded-lg">
            <p>Press "Esc" to exit</p>
        </div>
    </div>
`;
// ** Page Control
// * By Default
pageHTML.innerHTML = pG_1

// * Functions
// ** Random No Gen
let randomKey = function () {
    let randomNo = Math.floor(Math.random() * keys.length);
    activeKey = `${keys[randomNo]}`
    document.querySelector('#randomKey').innerHTML = activeKey
}
// ** Button Function
window.addEventListener("keydown", function (event) {
    let eventKey = event.key;
    let eventKeyCode = event["keyCode"];
    let eventCode = event.code;
    if (keyStrokeCount === 0) {
        pageHTML.innerHTML = pG_2
        typeStartTimeStamp = Date.now();
        keyStrokeCount += 1
        randomKey()
    } else {
        if (eventKeyCode === 27) {
            pageHTML.innerHTML = pG_1;
            keyStrokeCount = 0;
        } else {
            document.querySelector("#keyPressed").innerHTML = `${eventKey}`;
            document.querySelector("#keyCode").innerHTML = `${eventKeyCode}`;
            document.querySelector("#code").innerHTML = `${eventCode}`;
            if (eventKey === activeKey) {
                randomKey();
                lastPushTimeStamp = Date.now();
                typeSpeed = Math.floor(keyStrokeCount/((lastPushTimeStamp - typeStartTimeStamp)/60000));
                document.querySelector('#tp_Speed').innerHTML = typeSpeed
                keyStrokeCount += 1;
            }
        }
    }
});


