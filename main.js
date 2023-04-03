let hasAddedSemester = false;

//Login Page
if (document.title == "RHU SIS") {
    hasBeenWrong = false; //variable to determine whether or not to remove past mistakes that are red
    let btnLogin = document.getElementById("btnLogin");


    btnLogin.addEventListener("click", function () {

        let username = document.getElementById("txtLoginUsername").value;
        let password = document.getElementById("txtLoginPassword").value;

        if (username == "20202020" && password == "2020") {
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

else if (document.title == "Homepage") {

    //navbar code
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

    //homepage slideshow code to make it transition
    $('.carousel').carousel({
        interval: 5000
    })



    let btnOne = $("#homepagebtnOne");
    let btnTwo = $("#homepagebtnTwo");
    let btnThree = $("#homepagebtnThree");

    btnOne.click(function () {

        $('.cardFirst').each(function (i) {
            $(this).removeClass("homepageHidden");
        });

        $('.cardSecond').each(function (i) {
            $(this).addClass("homepageHidden");
        });

        $('.cardThird').each(function (i) {
            $(this).addClass("homepageHidden");
        });

        btnOne.addClass("homepageActivated");
        btnTwo.removeClass("homepageActivated");
        btnThree.removeClass("homepageActivated");


    });

    btnTwo.click(function () {
        $('.cardSecond').each(function (i) {
            $(this).removeClass("homepageHidden");
        });

        $('.cardFirst').each(function (i) {
            $(this).addClass("homepageHidden");
        })

        $('.cardThird').each(function i() {
            $(this).addClass("homepageHidden")
        })

        btnOne.removeClass("homepageActivated");
        btnTwo.addClass("homepageActivated");
        btnThree.removeClass("homepageActivated");
    })

    btnThree.click(function () {
        $('.cardSecond').each(function (i) {
            $(this).addClass("homepageHidden");
        });

        $('.cardFirst').each(function (i) {
            $(this).addClass("homepageHidden");
        })

        $('.cardThird').each(function i() {
            $(this).removeClass("homepageHidden")
        })

        btnOne.removeClass("homepageActivated");
        btnTwo.removeClass("homepageActivated");
        btnThree.addClass("homepageActivated");
    })
}


else if (document.title == "Course Registration") {
    fetch('summercourses.json')
        .then(response => response.json())
        .then(data => {
            const tbody = document.querySelector('#registerTable tbody');
            let count = 0;

            data.forEach(item => {

                const row = document.createElement('tr');
                const courseCell = document.createElement('td');
                const secCell = document.createElement('td');
                const titleCell = document.createElement('td');
                const creditCell = document.createElement('td');
                const daysCell = document.createElement('td');
                const startCell = document.createElement('td');
                const endCell = document.createElement('td');

                courseCell.textContent = item.CourseNbr;
                secCell.textContent = item.Sec;
                titleCell.textContent = item.CourseTitle;
                creditCell.textContent = item.Cr;
                daysCell.textContent = item.DAYS;
                startCell.textContent = item.StartTime;
                endCell.textContent = item.EndTime;

                row.appendChild(courseCell);
                row.appendChild(secCell);
                row.appendChild(titleCell);
                row.appendChild(creditCell);
                row.appendChild(daysCell);
                row.appendChild(startCell);
                row.appendChild(endCell);

                tbody.appendChild(row);


                if (count >= 10) {
                    row.classList.add("hidden");
                }
                if (count >= 0 && count < 10)
                    row.classList.add("firstRegister");
                else if (count >= 10 && count < 20)
                    row.classList.add("secondRegister");
                else if (count >= 20 && count < 30)
                    row.classList.add("thirdRegister");
                else if (count >= 30 && count < 40)
                    row.classList.add("fourthRegister");
                else if (count >= 40 && count < 50)
                    row.classList.add("fifthRegister");
                else if (count >= 50 && count < 60)
                    row.classList.add("sixthRegister");
                else if (count >= 60 && count < 70)
                    row.classList.add("seventhRegister");
                else if (count >= 70 && count < 80)
                    row.classList.add("eightRegister");
                else if (count >= 80 && count < 90)
                    row.classList.add("ninthRegister");

                count++;

            });
        })
        .catch(error => console.error(error));




    //Pagination Code

    $('#registerbtns button').each(function (i) {
        //make every single row as hidden
        $(this).click(function () {

            $("#registerTable tbody tr").each(function (i) {
                $(this).addClass("hidden");
            })

            //make every row of class current iteration register as not hidden
            let x = 0;
            if (i == 1 || i == 0)
                x = $(".firstRegister");
            else if (i == 2)
                x = $(".secondRegister");
            else if (i == 3)
                x = $(".thirdRegister");
            else if (i == 4)
                x = $(".fourthRegister");
            else if (i == 5)
                x = $(".fifthRegister");
            else if (i == 6)
                x = $(".sixthRegister");
            else if (i == 7)
                x = $(".seventhRegister");
            else if (i == 8)
                x = $(".eightRegister");
            else if (i == 9)
                x = $(".ninthRegister");
            else 
                x = $(".ninthRegister");

            $(x).removeClass("hidden");


            //unactivate all buttons
            $("#registerbtns button").each(function (i) {
                $(this).removeClass("homepageActivated");
            })

            //add homepageactivated to button that was clicked on
            $(this).addClass("homepageActivated");

        })
    })
}

/*Functions for GPA Calculator*/

function doSomething() {
    let x = $("#gpaGradeSelect option:selected").text();
    if (x == "Fall 2021-2022") {
        $('#gpaGrades .gpaGradeTableContainer').each(function (i) {
            $(this).addClass("hidden");
        })
        $('#fall2021').removeClass("hidden");
    }
    if (x == "Spring 2021-2022") {
        $('#gpaGrades .gpaGradeTableContainer').each(function (i) {
            $(this).addClass("hidden");
        })
        $('#spring2022').removeClass("hidden");
    }
    if (x == "Summer 2021-2022") {
        $('#gpaGrades .gpaGradeTableContainer').each(function (i) {
            $(this).addClass("hidden");
        })
        $('#summer2022').removeClass("hidden");
    }
    if (x == "Fall 2022-2023") {
        $('#gpaGrades .gpaGradeTableContainer').each(function (i) {
            $(this).addClass("hidden");
        })
        $('#fall2022').removeClass("hidden");
    }
    if (x == "Spring 2022-2023") {
        $('#gpaGrades .gpaGradeTableContainer').each(function (i) {
            $(this).addClass("hidden");
        })
        $('#spring2023').removeClass("hidden");
    }
}

function addSemester() {

    if (hasAddedSemester == false) {
        $("#articleCalculator").append('<div class="gpaOneSemester"> <div class="gpaSemesterHeader"> <h3>Semester</h3> <div class="gpaSemesterHeaderControls"> <button onclick="addSemester()">+</button> <button onclick="removeSemester(this)">X</button> </div> </div> <div class="gpaSemesterInputs"> <div class="gpaSemesterInputsLine"> <div class="gpaSemesterInputsLineOneObject"> <h5>Grade </h5> <input type="number" name="" id="gpaInputGrade"> </div> <div class="gpaSemesterInputsLineOneObject"> <h5>Credits </h5> <input type="number" name="" id="gpaInputCredit"> </div> <div class="gpaSemesterInputsLineControls"> <button onclick="addLine(this)">+</button> <button onclick="removeLine(this)">X</button> </div> </div> </div> <div class="gpaSemesterFooter"> <button onclick="calculateSemesterGPA(this)">Calculate</button> <h5 class="gpaAnswer">00.00</h5> </div> </div>')
        $("#articleCalculator").append('<div class="gpaCalculatorFooter"><button onclick="calculatorOverallGPA(this)" id="btnOverallGPA">Calculate CGPA</button><h5 id="overallGPA">00.00</h5></div>')
        hasAddedSemester = true;
    }
    else {
        $("#articleCalculator div:last").before('<div class="gpaOneSemester"> <div class="gpaSemesterHeader"> <h3>Semester</h3> <div class="gpaSemesterHeaderControls"> <button onclick="addSemester()">+</button> <button onclick="removeSemester(this)">X</button> </div> </div> <div class="gpaSemesterInputs"> <div class="gpaSemesterInputsLine"> <div class="gpaSemesterInputsLineOneObject"> <h5>Grade </h5> <input type="number" name="" id="gpaInputGrade"> </div> <div class="gpaSemesterInputsLineOneObject"> <h5>Credits </h5> <input type="number" name="" id="gpaInputCredit"> </div> <div class="gpaSemesterInputsLineControls"> <button onclick="addLine(this)">+</button> <button onclick="removeLine(this)">X</button> </div> </div> </div> <div class="gpaSemesterFooter"> <button onclick="calculateSemesterGPA(this)">Calculate</button> <h5 class="gpaAnswer">00.00</h5> </div> </div>');
    }
}

function removeSemester(el) {
    allSemesters = $("#articleCalculator").find('[class="gpaOneSemester"]').toArray();
    if (allSemesters.length == 1) {
        return;
    }
    if (allSemesters.length == 2) {
        hasAddedSemester = false;
        $("#articleCalculator div:last").remove();
    }
    $(el).parent().parent().parent().remove();
}

function addLine(el) {
    $(el).parent().parent().parent().append('<div class="gpaSemesterInputsLine"> <div class="gpaSemesterInputsLineOneObject"> <h5>Grade </h5> <input type="number" name="" id="gpaInputGrade"> </div> <div class="gpaSemesterInputsLineOneObject"> <h5>Credits </h5> <input type="number" name="" id="gpaInputCredit"> </div> <div class="gpaSemesterInputsLineControls"> <button onclick="addLine(this)">+</button> <button onclick="removeLine(this)">X</button> </div> </div>');
}

function removeLine(el) {
    if ($(el).parent().parent().parent().children().length == 1) {
        return;
    }
    $(el).parent().parent().remove();
}

function calculateSemesterGPA(el) {

    let hasCrashed = false;
    let answer = 0;
    let children = $(el).parent().parent().children(); //get parent gpaOneSemester
    let gpaSemesterInputs = children[1]; //get gpaSemesterInputs
    //let grades = $(gpaSemesterInputs).find('#gpaInputGrade').toArray();
    grades = $(gpaSemesterInputs).find('[id="gpaInputGrade"]').toArray();
    credits = $(gpaSemesterInputs).find('[id="gpaInputCredit"]').toArray();

    let realGrades = [];
    $(grades).each(function (i) {
        if ($.isNumeric($(this).val()) == false || $(grades[i]).val() < 0 || $(grades[i]).val() > 100) {
            alert("Please fill in all the grades of the semester you are calculating correctly");
            hasCrashed = true;
            return false;
        }
        if ($.isNumeric($(credits[i]).val()) == false || $(credits[i]) < 1 || $(credits[i]) > 5) {
            alert("Please fill in all the credits of the semester you are calculating correctly");
            hasCrashed = true;
            return false;
        }

        if ($(credits[i]).val() == 1)
            realGrades[i] = $(grades[i]).val() * 0.33
        else if ($(credits[i]).val() == 2)
            realGrades[i] = $(grades[i]).val() * 0.66
        else if ($(credits[i]).val() == 3)
            realGrades[i] = $(grades[i]).val();
        else if ($(credits[i]).val() == 4)
            realGrades[i] = $(grades[i]).val() * 1.33
        else if ($(credits[i]).val() == 5)
            realGrades[i] = $(grades[i]).val() * 1.66

    });

    if (hasCrashed == true)
        return true;
    let sumGrades = 0, sumCredits = 0;

    for (var i = 0; i < grades.length; i++) {
        let x = sumGrades;
        sumGrades = parseFloat(x) + parseFloat(realGrades[i]);
        sumCredits = parseFloat(sumCredits) + parseFloat($(credits[i]).val());
    }

    let divisor = parseFloat(sumCredits) * 33.33;
    answer = parseFloat(sumGrades) / divisor * 100;

    $(el).parent().parent().children().find('[class="gpaAnswer"]').html(parseFloat(answer).toFixed(2));
}

function calculatorOverallGPA(el) {
    let hasCrashed = false;

    let x = $(el).parent().parent().find('[class="gpaOneSemester"]').toArray();
    let sumCreditsAll = 0, sumGPA = 0;

    for (let i = 0; i < x.length; i++) {
        let sumGrades = 0, sumCredits = 0;
        let realGrades = [];
        let grades = $(x[i]).find('[id="gpaInputGrade"]').toArray();
        let credits = $(x[i]).find('[id="gpaInputCredit"]').toArray();

        for (let j = 0; j < grades.length; j++) { //Loop over every grade and add that grade+credit to their respective sums
            if ($.isNumeric($(grades[j]).val()) == false || $(grades[j]).val() < 0 || $(grades[j]).val() > 100) { //check if any boxes are empty
                alert("Please fill in all the grades of the semester you are calculating correctly");
                hasCrashed = true;
                return false;
            }
            if ($.isNumeric($(credits[j]).val()) == false || $(credits[j]) < 1 || $(credits[j]) > 5) {//check if any boxes are empty
                alert("Please fill in all the credits of the semester you are calculating correctly");
                hasCrashed = true;
                return false;
            }

            if ($(credits[j]).val() == 1)
                realGrades[j] = $(grades[j]).val() * 0.33
            else if ($(credits[j]).val() == 2)
                realGrades[j] = $(grades[j]).val() * 0.66
            else if ($(credits[j]).val() == 3)
                realGrades[j] = $(grades[j]).val()
            else if ($(credits[j]).val() == 4)
                realGrades[j] = $(grades[j]).val() * 1.33
            else if ($(credits[j]) == 5)
                realGrades[j] = $(grades[j]).val() * 0.166

            sumGrades = parseFloat(sumGrades) + parseFloat(realGrades[j]);
            sumCredits = parseFloat(sumCredits) + parseFloat($(credits[j]).val());
        }

        //add sumcreditsall and sumgpa to the sumGrades and sumcredits which are local to each gpaOneSemester
        sumCreditsAll = parseFloat(sumCreditsAll) + parseFloat(sumCredits);
        sumGPA = parseFloat(sumGPA) + parseFloat(sumGrades);

    }
    let answer = parseFloat(sumGPA) / (parseFloat(sumCreditsAll) * 33.33) * 100;
    $(el).parent().parent().find('[id="overallGPA"]').html(parseFloat(answer).toFixed(2));
}



