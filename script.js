function validateForm() {
    var name = document.forms["messages-contact"]["full-name"].value;
    var email = document.forms["messages-contact"]["email"].value;
    var number = document.forms["messages-contact"]["phone-number"].value;
    var messages = document.forms["messages-contact"]["messages"].value;

    if (name == "" || email == "" || number == "" || messages == "") {
        alert("Input tidak boleh kosong");
        return false;
    }

    document.getElementById("sender-full-name").innerText = name;
    document.getElementById("sender-email").innerText = email;
    document.getElementById("sender-phone-number").innerText = number;
    document.getElementById("sender-messages").innerText = messages;
    console.log({name, email, number, messages});
    return false;
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs((slideIndex += n));
}

function showDivs(n) {
    var i;
    var imgList = document.getElementsByClassName("imgrvw");
    if (n > imgList.length) slideIndex = 1;
    else if (n < 1) slideIndex = imgList.length;
      
    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
    }
    imgList[slideIndex - 1].style.display = "block";
}

setInterval(() => {
    plusDivs(1);
}, 1500);