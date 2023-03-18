//Login Page
if (document.title == "RHU SIS") {
    hasBeenWrong = false; //variable to determine whether or not to remove past mistakes that are red
    let btnLogin = document.getElementById("btnLogin");


    btnLogin.addEventListener("click", function () {

        let username = document.getElementById("txtLoginUsername").value;
        let password = document.getElementById("txtLoginPassword").value;

        if (username == "admin" && password == "admin") {
            window.open("homepage.html", "_self");
        }
        else if (username = "" || password == "") {
            let divLoginDesignHeader = document.getElementById("loginDesignHeader");
            if (hasBeenWrong == true) {
                divLoginDesignHeader.removeChild(divLoginDesignHeader.lastChild);
            }
            let txt = document.createElement("p");
            txt.innerHTML = "Please make sure both fields are filled!";
            divLoginDesignHeader.appendChild(txt);
            hasBeenWrong = true;
        }
        else {
            let divLoginDesignHeader = document.getElementById("loginDesignHeader");
            if (hasBeenWrong == true) {
                divLoginDesignHeader.removeChild(divLoginDesignHeader.lastChild);
            }
            let txt = document.createElement("p");
            txt.innerHTML = "Invalid username or password! Please try again";
            divLoginDesignHeader.appendChild(txt);
            hasBeenWrong = true;
        }
    });

}


//Homepage code
else if (document.title == "Homepage") {
    // let slideIndex = 1;
    //     showSlides(slideIndex);

    //     function plusSlides(n) {
    //         showSlides((slideIndex += n));
    //     }

    //     function currentSlide(n) {
    //         showSlides((slideIndex = n));
    //     }

    //     function showSlides(n) {
    //         let i;
    //         let slides = document.getElementsByClassName("mySlides");
    //         if (n > slides.length) {
    //             slideIndex = 1;
    //         }
    //         if (n < 1) {
    //             slideIndex = slides.length;
    //         }
    //         for (i = 0; i < slides.length; i++) {
    //             slides[i].style.display = "none";
    //         }
    //         slides[slideIndex - 1].style.display = "block";
    //     }
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

}