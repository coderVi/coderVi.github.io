document.addEventListener('DOMContentLoaded', function () {
    const text = document.getElementById("typing").innerHTML;
    const typingElement = document.getElementById("typing");
    typingElement.innerHTML = "";
    let index = 0;

    function type() {
        if (index < text.length) {
            if (text.substring(index, index + 4) === "<br>") {
                typingElement.innerHTML += "<br>";
                index += 4;
            } else {
                typingElement.innerHTML += text.charAt(index);
                index++;
            }
            setTimeout(type, 20); // Her harf arasındaki gecikme süresi (milisaniye cinsinden)
        }
    }

    type();
});
