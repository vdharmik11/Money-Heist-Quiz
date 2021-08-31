var readLineSync = require('readline-sync');
var string = require('string');
var userName = readLineSync.question("What's your name? ");
console.log("Welcome "+ userName + " to MONEY HEIST Quiz");


var count = 0;

var inputy = readLineSync.question('Press \'y\' to start the quiz...')
var score = 0;

//Data of high score
var highScores = [
  {
    name: "Deep",
    score: 5,
  },
]

//answer verification
function ansVerify(question,option,answer)
{
  console.log(question)
  for(var i = 1; i<=4; i++)
  {
    console.log(option[i])
  }
  var ans = readLineSync.question()
  if(ans.toUpperCase() == answer.toUpperCase())
  {
    score = score + 1
    return true
  }  
}

//Displaying score
function showScores(score)
{
  console.log('You have scored '+count+' points');
  if(count>=5 && count<10)
  {
    console.log('Congratulation...You are in level 2.');
  }
  else if(count==10)
  {
    console.log('Congratulations...You are in level 3.');
  }

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


if(inputy.toUpperCase() =='Y')
{
    var questionArr = [
      questionOne = {
      question: 'The Show is called LA CASA DE PAPEL which means',
      answer : 'c',
      options : {
      1 : 'a. The house of outcasts',
      2 : 'b. The heist',
      3 : 'c. The house of papers',
      4 : 'd. None of the above',
    }
    },
    questionTwo = {
      question: 'Lisbon\'s original name was?',
      answer : 'b',
      options : {
      1 : 'a. Ariadna',
      2 : 'b. Raquel',
      3 : 'c. Tatiana',
      4 : 'd. None of the above',
    }
    },
    questionThree = {
      question: 'Where did Raquel find professor after first heist?',
      answer : 'a',
      options : {
      1 : 'a. Philippines',
      2 : 'b. Thailand',
      3 : 'c. Malaysia',
      4 : 'd. Spain',
    }
    },
    questionFour = {
      question: 'What was professor\'s real name?',
      answer : 'a',
      options : {
      1 : 'a. Sergio',
      2 : 'b. Anibel',
      3 : 'c. Andres',
      4 : 'd. Prieto',
    }
    },
    questionFive = {
      question: 'Who planned the bank of spain heist?',
      answer : 'c',
      options : {
      1 : 'a. Berlin',
      2 : 'b. Professor',
      3 : 'c. Professor\'s Father',
      4 : 'd. Tokyo',
      
    },
    },
    questionSix = {
      question: 'Who was the girl berlin last kissed?',
      answer : 'b',
      options : {
      1 : 'a. Tatiana',
      2 : 'b. Ariadna',
      3 : 'c. Anibal',
      4 : 'd. Raquel',
    },    
  },
   questionSeven = {
      question: 'How much money did the gang print at the royal mint?',
      answer : 'd',
      options : {
      1 : 'a. 986 million',
      2 : 'b. 980 million',
      3 : 'c. 990 million',
      4 : 'd. 984 million',
    },    
  },
  questionEight = {
      question: 'How many people did professor originally recruit?',
      answer : 'b',
      options : {
      1 : 'a. 7',
      2 : 'b. 8',
      3 : 'c. 9',
      4 : 'd. 10',
    },    
  },
  questionNine = {
      question: 'Who was the initial incharge of heist at The Royal mint of spain?',
      answer : 'a',
      options : {
      1 : 'a. Berlin',
      2 : 'b. Tokyo',
      3 : 'c. Lisbon',
      4 : 'd. Helsinki',
    },    
  },
  questionTen = {
      question: 'What was the Job role of Arturo Roman at The Royal mint of spain?',
      answer : 'd',
      options : {
      1 : 'a. Chairman',
      2 : 'b. President',
      3 : 'c. Vice President',
      4 : 'd. Director',
    },    
  },
  
]
  //function calling for starting quiz
  for(var i = 0; i<questionArr.length; i++)
  {
    var bool = ansVerify(questionArr[i].question,questionArr[i].options,questionArr[i].answer);
    if(bool === true)
    {
      count = count + 1;
    }
  }

  //function calling for displaying score
  showScores(count);
}