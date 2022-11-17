var btn = document.getElementById('btn');
var dBtn = document.getElementById("modal").firstElementChild;
var content = document.getElementById("content");

var main = document.getElementById('#main');
var modal = document.getElementById('modal');
btn.style.border = 'none'
btn.style.outline = 'none'
btn.style.background = '#333'
btn.style.color = 'white';
btn.style.cursor = 'pointer';
btn.style.width = '160px';
btn.style.height = '40px';


btn.addEventListener('click',() => {
    modal.classList.remove("close");
    modal.classList.add("open");
});

dBtn.addEventListener("click",() => {
    modal.classList.remove('open');
    modal.classList.add('close')
});

content.style.background = 'white';
content.style.opacity = '1';
content.style.height = '200px';
content.style.width = '400px';
content.style.position = 'relative';
content.style.bottom = '30px';
content.style.color = 'black';
content.style.display = 'flex';
content.style.justifyContent = 'center';
content.style.alignItems = 'center';
content.style.fontSize = '20px';
content.style.fontWeight = 'bold';
