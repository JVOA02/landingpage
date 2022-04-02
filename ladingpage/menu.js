let show = true;

const menuSection = document.querySelector(".content-header")
const menuToggle = menuSection.querySelector(".menu_toggle")


const $html = document.querySelector('html')
const $checkbox = document.querySelector('#switch')


menuToggle.addEventListener("click", () => {
    document.body.style.overflow = show ? "hidden" : "initial"
    menuSection.classList.toggle("on", show)
    show = !show;
})

$checkbox.addEventListener('change', function(){
    $html.classList.toggle('dark-mode')
    if($checkbox.checked == true){
    document.getElementById("imagem").src="img/icone_icone_1.png";
    }
    else{
    document.getElementById("imagem").src="img/icone_icone_2.png";
    }
    if($checkbox.checked == true){
        document.getElementsByClassName("img-box-icon-top")[0].src="img/icone_icone_1.png";
        document.getElementsByClassName("img-box-icon-top")[1].src="img/icone_icone_1.png";
        document.getElementsByClassName("img-box-icon-top")[2].src="img/icone_icone_1.png";
        document.getElementsByClassName("img-box-icon-top")[3].src="img/icone_icone_1.png";
        document.getElementsByClassName("img-box-icon-top")[4].src="img/icone_icone_1.png";
        document.getElementsByClassName("img-box-icon-top")[5].src="img/icone_icone_1.png";
        document.getElementsByClassName("img-box-icon-top")[6].src="img/icone_icone_1.png";
        document.getElementsByClassName("img-box-icon-top")[7].src="img/icone_icone_1.png";
        document.getElementsByClassName("img-box-icon-top")[8].src="img/icone_icone_1.png";
        }
        else{
        document.getElementsByClassName("img-box-icon-top")[0].src="img/icone_icone_2.png";
        document.getElementsByClassName("img-box-icon-top")[1].src="img/icone_icone_2.png";
        document.getElementsByClassName("img-box-icon-top")[2].src="img/icone_icone_2.png";
        document.getElementsByClassName("img-box-icon-top")[3].src="img/icone_icone_2.png";
        document.getElementsByClassName("img-box-icon-top")[4].src="img/icone_icone_2.png";
        document.getElementsByClassName("img-box-icon-top")[5].src="img/icone_icone_2.png";
        document.getElementsByClassName("img-box-icon-top")[6].src="img/icone_icone_2.png";
        document.getElementsByClassName("img-box-icon-top")[7].src="img/icone_icone_2.png";
        document.getElementsByClassName("img-box-icon-top")[8].src="img/icone_icone_2.png";
        }

        if($checkbox.checked == true){
            document.getElementsByClassName("img-box-icon-bottom")[0].src="img/icone_icone_1.png";
            document.getElementsByClassName("img-box-icon-bottom")[1].src="img/icone_icone_1.png";
            document.getElementsByClassName("img-box-icon-bottom")[2].src="img/icone_icone_1.png";
            document.getElementsByClassName("img-box-icon-bottom")[3].src="img/icone_icone_1.png";
            document.getElementsByClassName("img-box-icon-bottom")[4].src="img/icone_icone_1.png";
            document.getElementsByClassName("img-box-icon-bottom")[5].src="img/icone_icone_1.png";
            }
            else{
            document.getElementsByClassName("img-box-icon-bottom")[0].src="img/icone_icone_2.png";
            document.getElementsByClassName("img-box-icon-bottom")[1].src="img/icone_icone_2.png";
            document.getElementsByClassName("img-box-icon-bottom")[2].src="img/icone_icone_2.png";
            document.getElementsByClassName("img-box-icon-bottom")[3].src="img/icone_icone_2.png";
            document.getElementsByClassName("img-box-icon-bottom")[4].src="img/icone_icone_2.png";
            document.getElementsByClassName("img-box-icon-bottom")[5].src="img/icone_icone_2.png";
            }
})
