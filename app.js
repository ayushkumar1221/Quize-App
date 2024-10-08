let questions = [
  {
    que: "Which of the following is a markup Langauge :",
    a: "HTML",
    b: "CSS",
    c: "JavaScript",
    d: "PHP",
    correct: "a",
  },
  {
    que: "Which tag is used to define a hyperlink in HTML?",
    a: "<link>",
    b: "<a>",
    c: "<p>",
    d: "PHP",
    correct: "b",
  },
  {
    que: "Which property is used in CSS to change the background color?",
    a: "color",
    b: "bgcolor",
    c: "background-color",
    d: "background",
    correct: "c",
  },
  {
    que: "Which CSS property controls the text size?",
    a: "font-size",
    b: "text-style",
    c: "text-size",
    d: "font-style",
    correct: "a",
  },
  {
    que: "In JavaScript, which symbol is used for comments?",
    a: "//",
    b: "<!-- -->",
    c: "/* */",
    d: "Both a and c",
    correct: "d",
  },
  {
    que: "Which JavaScript function is used to write content into the document?",
    a: "console.log()",
    b: "document.write()",
    c: "alert()",
    d: "print()",
    correct: "b",
  },
  {
    que: "How do you add a comment in CSS?",
    a: "<!-- comment -->",
    b: "// comment",
    c: "/* comment */",
    d: "# comment",
    correct: "c",
  },
  {
    que: " Which of the following is NOT a JavaScript data type?",
    a: "Number",
    b: "String",
    c: "Boolean",
    d: "Float",
    correct: "d",
  },
  {
    que: "Which JavaScript keyword refers to the current object in a method?",
    a: "object",
    b: "self",
    c: "this",
    d: "that",
    correct: "c",
  }
];


let index = 0;

let total = questions.length;
let right = 0;
wrong = 0;

let quesbox = document.getElementById("quesBox")

let optionInputs = document.querySelectorAll('.options')

let loadQuestion = ()=>{

   if (index === total) {
      return endQuize();
   }


   reset();

   let data = questions[index]
   quesbox.innerText = `${index+1}) ${data.que}`;
   
   optionInputs[0].nextElementSibling.innerText = data.a;
   
   optionInputs[1].nextElementSibling.innerText = data.b;
   
   optionInputs[2].nextElementSibling.innerText = data.c;
   
   optionInputs[3].nextElementSibling.innerText = data.d;
}

let submitQuiz = () =>{
   let data = questions[index]
   let ans = getAnswer()
   if (ans === data.correct){
      right++;
   }else{
      wrong++;
   }
   index++;
   loadQuestion();
   return;
}

   let getAnswer = () =>{
      let answer;
      optionInputs.forEach(
         (input) => {
            if(input.checked){
               answer = input.value;
            }
         }
      )
      return answer;
   }

   const reset = ()=> {
      optionInputs.forEach(
         (input) => {
            input.checked = false;
         }
      )
   }

   const endQuize = () =>{
      document.getElementById("box").innerHTML = `

            <h3> Thank you for playing the quize </h3>
            <h2> ${right} / ${total} are Correct </h2>
      `
   }


   // initial call

loadQuestion();

// getAnswer();

// submitQuiz();