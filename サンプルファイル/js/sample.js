const stamps = document.querySelectorAll(".stamp");
const canvas = document.getElementById("canvas");

let selectedStamp = null;

// スタンプ選択
stamps.forEach(stamp => {
    stamp.addEventListener("click", () => {
        selectedStamp = stamp.src;
    });
});

// キャンバスクリックで配置
canvas.addEventListener("click", (e) => {

    if (!selectedStamp) return;

    const img = document.createElement("img");

    img.src = selectedStamp;
    img.style.width = "60px";
    img.style.position = "absolute";

    img.style.left = e.offsetX - 30 + "px";
    img.style.top = e.offsetY - 30 + "px";

    canvas.appendChild(img);

});