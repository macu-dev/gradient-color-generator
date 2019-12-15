
let form = document.getElementsByTagName("form")[0];

form.onsubmit = function (e) {
  e.preventDefault();
  let orientation = document.getElementById("menu").value;
  let color1 = document.getElementById("color1").value;
  let color2 = document.getElementById("color2").value;
  let textCode = document.getElementById("text-code");

  let style = `${orientation == "circle" ? "radial" : "linear"}-gradient(${orientation}, ${color1}, ${color2})`;

  textCode.innerHTML = `background-image: ${style};`;
  document.body.style.backgroundImage = style;
}

function copy() {
  let textCode = document.getElementById("text-code");
  copyToClipboard(textCode.innerHTML);

}

const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute'; el.style.left = '-9999px';
    document.body.appendChild(el);
    const selected = document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false;
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    if (selected) { 
      document.getSelection().removeAllRanges();
      document.getSelection().addRange(selected);
    } 
  };
