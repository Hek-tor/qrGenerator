const contenedorQR = document.querySelector(".contenedorQR")
const form = document.querySelector(".formulario")
const input = document.querySelector('input')
const QR = new QRCode(contenedorQR);
const download = document.querySelector(".download")
const img = document.querySelector("img")

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let search = input.value

    if (search != "") {
        QR.makeCode(search);
    }
})

download.addEventListener('click', function () {
    setTimeout(() => {
        let url = img.src
        if (url != "") {
            imageDownload(url)
        }
    }, 1000)
})

function imageDownload(source) {
    const fileName = source.split('/').pop();
    var el = document.createElement("a");
    el.setAttribute("href", source);
    el.setAttribute("download", fileName);
    document.body.appendChild(el);
    el.click();
    el.remove()
}