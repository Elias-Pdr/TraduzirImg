//localStorage.setItem("saldoTraduzirImg", '')
//localStorage.setItem("nomeTraduzirImg", '')
//localStorage.setItem("emailTraduzirImg", '')



let inputEmail = document.getElementById("email")
let inputNome = document.getElementById("nome")

let inputMain = document.getElementById("inputMain")

let nomeTxt = document.getElementById("nomeTxt")
let emailTxt = document.getElementById("emailTxt")
let saldoTxt = document.getElementById("saldoTxt")

let boxInputInfos = document.querySelector(".ctnrInputs")

let imgMain = document.getElementById("imgMain")

let imgs = ["https://captcha.com/images/captcha/botdetect3-captcha-ancientmosaic.jpg"]
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-blackoverlap.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-bubbles.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-bullets.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-bullets2.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-caughtinthenet.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-caughtinthenet2.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-chalkboard.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-chess.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-chess3d.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-chipped.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-circles.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-collage.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-corrosion.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-crossshadow.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-crossshadow2.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-cut.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-darts.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-distortion.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-electric.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-fingerprints.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-flash.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-ghostly.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-graffiti.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-graffiti2.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-halo.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-jail.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-lego.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-mass.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-meltingheat.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-meltingheat2.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-negative.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-neon2.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-overlap.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-overlap2.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-paintmess.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-radar.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-ripple.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-ripple2.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-rough.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-snow.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-spiderweb.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-spiderweb2.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-split.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-split2.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-stitch.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-strippy.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-sunandwarmair.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-sunrays.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-sunrays2.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-thickthinlines.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-thickthinlines2.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-thinwavyletters.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-vertigo.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-wantedcircular.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-wave.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-wavychess.jpg")
imgs.push("https://captcha.com/images/captcha/botdetect3-captcha-wavycolorletters.jpg")
imgs.push("https://captcha.com/images/captcha/180/botdetect-captcha-crossshadow.jpg")
imgs.push("https://captcha.com/images/captcha/180/hebrew/botdetect-captcha-hebrew-ghostly.jpg")
imgs.push("https://captcha.com/images/captcha/180/botdetect-captcha-ancientmosaic.jpg")
imgs.push("https://captcha.com/images/captcha/180/botdetect-captcha-strippy.jpg")
imgs.push("https://captcha.com/images/captcha/180/botdetect-captcha-split2.jpg")
imgs.push("https://captcha.com/images/captcha/180/botdetect-captcha-fingerprints.jpg")
imgs.push("https://captcha.com/images/captcha/180/botdetect-captcha-split.jpg")
imgs.push("https://captcha.com/images/captcha/180/botdetect-captcha-inbandages.jpg")
imgs.push("https://captcha.com/images/captcha/180/botdetect-captcha-distortion.jpg")
imgs.push("https://captcha.com/images/captcha/180/bopomofo/botdetect-captcha-bopomofo-vertigo.jpg")


att()
function att(){

    nomeTxt.innerHTML = localStorage.getItem("nomeINTraduzirImg")
    emailTxt.innerHTML = localStorage.getItem("emailINTraduzirImg")
    saldoTxt.innerHTML = localStorage.getItem("saldoINTraduzirImg")

    if (localStorage.getItem("saldoINTraduzirImg") == null || localStorage.getItem("saldoINTraduzirImg") == '') {
        localStorage.setItem("saldoINTraduzirImg", "R$ 0,00")
        att()
    }

    sortImg()
}


function aparecerBoxInfos(){
    boxInputInfos.style.display = "flex"
}
function confirmar(){
    localStorage.setItem("emailINTraduzirImg", inputEmail.value)
    localStorage.setItem("nomeINTraduzirImg", inputNome.value)

    boxInputInfos.style.display = "none"
    att()
}
function sacar(){
    
}
function enviar(){
    if (inputMain.value.length > 1) {
        inputMain.value = ""
        let taxa = 0.30
        saldoNumber = parseFloat(saldoTxt.innerHTML.replace("R$ ", "").replace(",", ".")).toFixed(2)
        saldoTxt.innerHTML = "R$ " +((parseFloat(saldoNumber) + parseFloat(taxa)).toFixed(2)).replace(".", ",")
        
        //saldoTxt.innerHTML = "R$ " + (saldoNumber + saldoNumber).replace(".", ",")
        localStorage.setItem("saldoINTraduzirImg", saldoTxt.innerHTML)
        
        // muda a img
        sortImg()
    }
}

function sortImg(){
    imgMain.src = imgs[parseInt(Math.random() * imgs.length)]
    console.log(parseInt(Math.random() * 4));

    //fazer um mecanismo pra não mostar a msm img
}

