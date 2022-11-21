let inputt = document.querySelector(`.input-boxt`);
let search_btn = document.querySelector(`.submitbtn`);

search_btn.onclick = function () {
    let url = `https://google.com/search?q=` + inputt.value;
    window.open(url, "_self");
}