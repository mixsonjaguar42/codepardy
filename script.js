const body = document.getElementById("body");
body.style.display = "grid";

let boxArr = [
    "100",
    "100",
    "100",
    "100", 
    "100", 
    "100",
    // Above is first Row
    "200",
    "200",
    "200",
    "200",
    "200",
    "200",
    // Above is second row
    "300",
    "300",
    "300",
    "300",
    "300",
    "300",
    // Above is Third Row
    "400",
    "400",
    "400",
    "400",
    "400",
    "400",
    // Above is Fourth Row
    "500",
    "500",
    "500",
    "500",
    "500",
    "500"
]

let questionArr = [
    "What sign is used to assign an variable?",
    "What shows a decrement?", 
    "'John' is what data type?", 
    "What goes in parenthesis in a function?",
    "How do you make X + Y = Z?", 
    "What loop is used for Arrays?",
    // Above is First Row
    "declare y as a variable, with a value of 'Big Fish'",
    "Add the variable y to 'in the pond.'",
    "[This, are, they] is what data type?",
    "Call the function square and pass 12 into it",
    "What method do you use to round to the lowest integer?",
    "Create a loop that stops at 5",
    // Above is Second Row
    "What variable declaration can't be mutated?",
    "What sign represents a modulo operation?",
    "Select the third of this data type: const dogNames = ['Yell', 'Kobe', 'Thor', 'Tracker']",
    "What are Function arguments?",
    "Is this a Math Method Math.Round?",
    "What loop looks through properties in an object?",
     // Above is Third Row
    "How many variables can you declare in one statement?",
    "Show 'X' Minus 'Y'",
    "Select shoes of this data type using bracket notation: const:person = {name:'Polo', pants: 'Balmain', shirt:'True Religion', shoes: 'Versace'} ",
    "Import deleteBtn from module",
    "What will 'Math.sign(x)' return?",
    "What loops through a block of code while a specified condition is true?",
    // Above is Fourth Row
    "Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.",
    "Use the exponential assignment operator",
    "Which method can be used to find the type of data?",
    "What iteration is used in a function to see if something is true?",
    "Return the value of x to the power of y",
    "Create a for loop that stop at the 5th position (No curly brackets)"
    // Above is Fifth Row
]

let answerArr = [
    "=", 
    "--", 
    "string", 
    "parameter", 
    "let x + y = z;", 
    "for loop",
    // Above is First Row
    "let y = 'Big Fish';",
    "y + ' in the pond.'",
    "array",
    "square(12);",
    "Math.floor();",
    "while (i < 5)",
    // Above is Second Row
    "const",
    "%",
    "dogNames[2];",
    "values",
    "no",
    "for in loop",
    // Above is Third Row
    "infinite",
    "x -= y;",
    "person[shoes];",
    "import deleteBtn from 'module'",
    "returns if x is negative, null or positive",
    "while loop",
    // Above is Fourth Row
    "[a, b] = [b, a];",
    "*=",
    "typeOf();",
    "if statement",
    "pow(x, y);",
    "for (let i = 0; i < 6; i++)"
    // Above is Fifth Row
]

for (let i = 0; i < questionArr.length; i++) {
    let box = document.createElement("div")
    box.className = "game-box"

    let boxText = document.createElement("p");
    boxText.innerText = boxArr[i];

    let answerInput = document.createElement("input")
    answerInput.type = "text"

    let submitBtn = document.createElement("button")
    submitBtn.innerText = "submit";

    let questionBox = document.createElement("div")
    questionBox.className = "question"
    questionBox.innerText = questionArr[i]
    questionBox.style.zIndex = 1

    let closeBox = document.createElement("div")
    closeBox.className = "close"
    closeBox.innerText = "X"

    box.addEventListener("click", ()=>{
        box.className = "game-box2"
        setTimeout(()=>{
            box.children[0].textContent = ""
        }, 300)
        setTimeout(()=>{
            questionBox.style.display = "flex"
        }, 350)
    })

    submitBtn.addEventListener("click", ()=>{
        

        if(answerInput.value.toLowerCase() === answerArr[i].toLowerCase()){
            alert("Alright Now!!!")
            box.style.opacity = 0
            box.style.pointerEvents = "none"
            questionBox.style.display = "none"
            
        } else {
            questionBox.className = "wrong"
            answerInput.value = ""
            setTimeout(()=>{
                questionBox.className = "holdPosition"
            }, 500)
        }
    })
    closeBox.addEventListener("click", ()=>{
        questionBox.style.display = "none"
        questionBox.className = "question"
        box.className = "game-box"
        box.children[0].textContent = boxArr[i]
    })
    
    box.append(boxText)
    questionBox.append(closeBox);
    questionBox.append(answerInput);
    questionBox.append(submitBtn);
    
    body.append(questionBox)
    body.append(box)
}


