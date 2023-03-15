//Login Page
if(document.title == "RHU SIS"){
    hasBeenWrong = false; //variable to determine whether or not to remove past mistakes that are red
    let btnLogin = document.getElementById("btnLogin");


    btnLogin.addEventListener("click", function(){ 

        let username = document.getElementById("txtLoginUsername").value;
        let password = document.getElementById("txtLoginPassword").value;

        if(username == "admin" && password == "admin"){
            window.open("homepage.html", "_self");
            console.log("dasads")
        }
        else if(username="" || password == ""){
            let divLoginDesignHeader = document.getElementById("loginDesignHeader");
            if(hasBeenWrong == true){
                divLoginDesignHeader.removeChild(divLoginDesignHeader.lastChild);
            }
            let txt = document.createElement("p");
            txt.innerHTML = "Please make sure both fields are filled!";
            divLoginDesignHeader.appendChild(txt);
            hasBeenWrong = true;
        }
        else{
            let divLoginDesignHeader = document.getElementById("loginDesignHeader");
            if(hasBeenWrong == true){
                divLoginDesignHeader.removeChild(divLoginDesignHeader.lastChild);
            }
        let txt = document.createElement("p");
        txt.innerHTML = "Invalid username or password! Please try again";
        divLoginDesignHeader.appendChild(txt);
        hasBeenWrong = true;
        console.log("eat ass");
        }
    });

}



//Gpa calculator
else if(document.title == "GPA"){

    semesterCount = 1, courseCount = 1;

    //Upon loading the GPA calculator page
    let mySection = document.querySelector("section");
    let myDivContainer = document.createElement("div");
    myDivContainer.classList.add("containerGPA");

    let containerHeader = document.createElement("h1")
    containerHeader.innerHTML = "Semester ";
    semesterCount++;
    myDivContainer.appendChild(containerHeader);

    containerHeader.addEventListener("dblclick", function deleteSemester(event){
        var result = window.confirm("Are you sure you want to delete this semester?");
        if(result == true){  
            event.target.parentNode.remove();
        }
        else{
            console.log("Don't read this")
        }
    });

    let myOneContainerLine = document.createElement("div");
    myOneContainerLine.classList.add("containerOneLinesGPA");

    let myDiv = document.createElement("div");
    myDiv.classList.add("gpaOneLine");

    let myCourse = document.createElement("input");
    myCourse.type = "text";
    myCourse.placeholder = "Course ";
    courseCount++;
    myDiv.appendChild(myCourse);

    let myGradeTitle = document.createElement("h2");
    myGradeTitle.innerHTML = "Grade: ";
    myDiv.appendChild(myGradeTitle);

    let myGrade = document.createElement("input");
    myGrade.type = "number";
    myGrade.placeholder = "/100";
    myGrade.classList.add("inputGrade");
    myDiv.appendChild(myGrade);

    let myCreditsTitle = document.createElement("h2");
    myCreditsTitle.innerHTML = "Credits: ";
    myDiv.appendChild(myCreditsTitle);

    let myCredits = document.createElement("input");
    myCredits.classList.add("inputCredits");
    myCredits.type = "number";
    myDiv.appendChild(myCredits);    
    myOneContainerLine.appendChild(myDiv);
    myDivContainer.appendChild(myOneContainerLine);

    let myCourseTitle = document.createElement("h2");
    myCourseTitle.innerHTML = "X";
    myCourseTitle.classList.add("xButtonGPA")
    myDiv.appendChild(myCourseTitle);
    myCourseTitle.addEventListener("click", function handleClick(e){
        e.target.parentNode.remove();
    })

    let myButtonClass = document.createElement("button");
    myButtonClass.classList.add("gpaButton");
    myButtonClass.classList.add("gpaButtonClass");
    myButtonClass.innerHTML = "Add Another Class";
    myDivContainer.appendChild(myButtonClass);

    let myButtonCalculateSemester = document.createElement("button");
    myButtonCalculateSemester.classList.add("gpaButton");
    myButtonCalculateSemester.classList.add("gpaButtonCalculateSemester");
    myButtonCalculateSemester.innerHTML = "Calculate";
    myDivContainer.appendChild(myButtonCalculateSemester);

    myButtonCalculateSemester.addEventListener("click", function calculateSemester(element){
        let parent = element.target.parentNode;
        console.log(parent);
        let gradesInputList = parent.querySelectorAll(".inputGrade");
        let creditsInputList = parent.querySelectorAll(".inputCredits");
        let gradeList = [];
        let creditList = [];

        for(i in gradesInputList){
            if(i.value == ""){
                alert("Please make sure all grade input fields are filled!");
                return;
            }
            gradeList.push(i.value);
        }

        for(i in creditsInputList){
            if(i.value == ""){
                alert("Please make sure all credits input fields are filled!")
                return;
            }
            creditList.push(i.value * 0.3333);
        }

        let sumGrades = 0;
        //get sum of grades
        for(i = 0; i < gradeList.length; i++){
            //sumGrades = sumGrades + (gradeList[i] * creditList[i]);
            console.log()
        }
        
        //get sum of credits
        let sumCredits = 0;
        for (i = 0; i < creditList.length; i++){
            sumCredits = sumCredits + (creditList[i] * 100);
        }

        let GPA = (sumGrades * 100) / sumCredits;

        let x = element.target.parentNode.querySelector("h3");
        x.innerHTML = "Semester GPA: " + GPA;
        
    });

    let containerHeader2 = document.createElement("h3")
    containerHeader2.innerHTML = "Semester GPA: ";
    containerHeader2.classList.add("semesterGPA");
    myDivContainer.appendChild(containerHeader2);
    mySection.appendChild(myDivContainer);

    myButtonClass.addEventListener("click", function handleClick(event){
        let myDiv = document.createElement("div");
        myDiv.classList.add("gpaOneLine");

        let myCourse = document.createElement("input");
        myCourse.type = "text";
        myCourse.placeholder = "Course ";
        myDiv.appendChild(myCourse);
        courseCount++;

        let myGradeTitle = document.createElement("h2");
        myGradeTitle.innerHTML = "Grade: ";
        myDiv.appendChild(myGradeTitle);

        let myGrade = document.createElement("input");
        myGrade.type = "number";
        myGrade.placeholder = "/100";
        myGrade.classList.add("inputGrade");
        myDiv.appendChild(myGrade);

        let myCreditsTitle = document.createElement("h2");
        myCreditsTitle.innerHTML = "Credits: ";
        myDiv.appendChild(myCreditsTitle);

        let myCredits = document.createElement("input");
        myCredits.type = "number";
        myCredits.classList.add("inputCredits");
        myDiv.appendChild(myCredits);

        let myCourseTitle = document.createElement("h2");
        myCourseTitle.innerHTML = "X";
        myCourseTitle.classList.add("xButtonGPA")
        myDiv.appendChild(myCourseTitle);
        myCourseTitle.addEventListener("click", function handleClick(e){
            e.target.parentNode.remove();
        })

        myOneContainerLine.appendChild(myDiv);

    })



    ///add a semester
    let btnSemester = document.getElementById("gpaButtonSemester");
    btnSemester.addEventListener("click", function handleSemesterClick(){
        let mySection = document.querySelector("section");
    let myDivContainer = document.createElement("div");
    myDivContainer.classList.add("containerGPA");

    let containerHeader = document.createElement("h1")
    containerHeader.innerHTML = "Semester ";
    containerHeader.addEventListener("dblclick", function deleteSemester(event){
        var result = window.confirm("Are you sure you want to delete this semester?");
        if(result == true){  
            event.target.parentNode.remove();
        }
        else{
            console.log("Don't read this")
        }
    });
    myDivContainer.appendChild(containerHeader);
    let myOneContainerLine = document.createElement("div");
    myOneContainerLine.classList.add("containerOneLinesGPA");

    let myDiv = document.createElement("div");
    myDiv.classList.add("gpaOneLine");

    let myCourse = document.createElement("input");
    myCourse.type = "text";
    myCourse.placeholder = "Course ";
    courseCount++;
    myDiv.appendChild(myCourse);

    let myGradeTitle = document.createElement("h2");
    myGradeTitle.innerHTML = "Grade: ";
    myDiv.appendChild(myGradeTitle);

    let myGrade = document.createElement("input");
    myGrade.type = "number";
    myGrade.placeholder = "/100";
    myGrade.classList.add("inputGrade");
    myDiv.appendChild(myGrade);

    let myCreditsTitle = document.createElement("h2");
    myCreditsTitle.innerHTML = "Credits: ";
    myDiv.appendChild(myCreditsTitle);

    let myCredits = document.createElement("input");
    myCredits.type = "number";
    myCredits.classList.add("inputCredits");
    myDiv.appendChild(myCredits);    
    myOneContainerLine.appendChild(myDiv);
    myDivContainer.appendChild(myOneContainerLine);

    let myCourseTitle = document.createElement("h2");
    myCourseTitle.innerHTML = "X";
    myCourseTitle.classList.add("xButtonGPA")
    myDiv.appendChild(myCourseTitle);
    myCourseTitle.addEventListener("click", function handleClick(e){
        e.target.parentNode.remove();
    })

    let myButtonClass = document.createElement("button");
    myButtonClass.classList.add("gpaButton");
    myButtonClass.classList.add("gpaButtonClass");
    myButtonClass.innerHTML = "Add Another Class";
    myDivContainer.appendChild(myButtonClass);

    let myButtonCalculateSemester = document.createElement("button");
    myButtonCalculateSemester.classList.add("gpaButton");
    myButtonCalculateSemester.innerHTML = "Calculate";
    myDivContainer.appendChild(myButtonCalculateSemester);

    myButtonCalculateSemester.addEventListener("click", function calculateSemester(element){
        let parent = element.target.parentNode;
        let gradesInputList = parent.querySelectorAll(".inputGrade");
        let creditsInputList = parent.querySelectorAll(".inputCredits");
        let gradeList = [];
        let creditList = [];

        for(i in gradesInputList){
            if(i.value == ""){
                alert("Please make sure all grade input fields are filled!");
                return;
            }
            gradeList.push(i.value);
        }

        for(i in creditsInputList){
            if(i.value == ""){
                alert("Please make sure all credits input fields are filled!")
                return;
            }
            creditList.push(i.value * 0.3333);
        }

        let sumGrades = 0;
        //get sum of grades
        for(i = 0; i < gradeList.length; i++){
            sumGrades = sumGrades + (gradeList[i] * creditList[i]);
        }
        
        //get sum of credits
        let sumCredits = 0;
        for (i = 0; i < creditList.length; i++){
            sumCredits = sumCredits + (creditList[i] * 100);
        }

        let GPA = (sumGrades * 100) / sumCredits;

        let x = element.target.parentNode.querySelector("h3");
        x.innerHTML = "Semester GPA: " + GPA;
        
    });

    let containerHeader2 = document.createElement("h3")
    containerHeader2.innerHTML = "Semester GPA: ";
    containerHeader2.classList.add("semesterGPA");
    myDivContainer.appendChild(containerHeader2);
    mySection.appendChild(myDivContainer);

    myButtonClass.addEventListener("click", function handleClick(event){
        let myDiv = document.createElement("div");
        myDiv.classList.add("gpaOneLine");

        let myCourse = document.createElement("input");
        myCourse.type = "text";
        myCourse.placeholder = "Course ";
        myDiv.appendChild(myCourse);
        courseCount++;

        let myGradeTitle = document.createElement("h2");
        myGradeTitle.innerHTML = "Grade: ";
        myDiv.appendChild(myGradeTitle);

        let myGrade = document.createElement("input");
        myGrade.type = "number";
        myGrade.placeholder = "/100";
        myGrade.classList.add("inputGrade");
        myDiv.appendChild(myGrade);

        let myCreditsTitle = document.createElement("h2");
        myCreditsTitle.innerHTML = "Credits: ";
        myDiv.appendChild(myCreditsTitle);

        let myCredits = document.createElement("input");
        myCredits.classList.add("inputCredits");
        myCredits.type = "number";
        myDiv.appendChild(myCredits);

        let myCourseTitle = document.createElement("h2");
        myCourseTitle.innerHTML = "X";
        myCourseTitle.classList.add("xButtonGPA")
        myDiv.appendChild(myCourseTitle);
        myCourseTitle.addEventListener("click", function handleClick(e){
            e.target.parentNode.remove();
        })

        myOneContainerLine.appendChild(myDiv);

    })
    })

}
