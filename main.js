$(document).ready(function() {

  $('#solve-hangman').on("click", function(e) {
    e.preventDefault();
    for (var i = 0; i < guessWordLetterDivs.length; i++) {
        var div = guessWordLetterDivs[i]
        div.style['color'] = 'black';
    }
  })

  round = 0;

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var allWords = []
    allWords[0] = {word: "Hoptimal", hint: "While studying at Bitmaker Labs, I created this app with 3 other talented developers. The goal of the app was to be able to lend a helping hand to those who are looking to expand their existing beer knowledge and aid the user in the ability to find where a particular beer is available on tap at bars around the city of Toronto."}
    allWords[1] = {word: "Bitmaker Labs", hint: "After spending some time after completing my BFA degree, I enrolled in a web development bootcamp at this private college in downtown Toronto. I studied here from March 2017 - May 2017"}
    allWords[2] = {word: "Queens University", hint: "Located in Kingston, ON, this University holds an immense history within its signature limestone buildings. I studied here from 2011-2015 and graduated with a major in Fine Arts (specialization in Printmedia) and a minor in mathematics"}
    var hangmanImage = ["images/hangman5.png", "images/hangman4.png", "images/hangman3.png", "images/hangman2.png", "images/hangman1.png", "images/hangman-full.png"]
    var errors = 0;
    var guessCorrect = false;

  // $('.info').append(allWords[round].hint)
  var guessWord = "Hoptimal".toLowerCase().split("");

  // append the letters to divs, giving the divs the class name as the letter
  for (var i = 0; i < guessWord.length; i++) {
    if (guessWord[i] === " ") {
      guessWord[i] = "-"
    }
    $('<div>').text(guessWord[i]).attr('class', guessWord[i]).appendTo('div.guess')
  }

  // hiding the spaces in the answers
  $('div.-').css("visibility", "hidden")

  // append the starting image
  // $('div.hangman-image').append("<img src='images/hangman6.png'></img>");

  var guessWordLetterDivs = $('div.guess > div')

  // create alphabet buttons:
  buttons = $('#buttons');
  letters = $('<ul>').attr("class", "alphabet");
  for (var i = 0; i < alphabet.length; i++) {
    list = $('<li>').attr("class", "letter");
    list.text(alphabet[i]);
    buttons.append(letters);
    letters.append(list);
  }

  //letters turn black when clicked
  $("li.letter").on("click", function(e) {
    if ($(this).css("background-color") === "rgba(179, 179, 179, 0.3)") {
      return;
    }
    $(this).css("background-color", "rgba(179, 179, 179, 0.3)");
    letterSelected = $(this).text()
    guessCorrect = false;
      for (var i = 0; i < guessWordLetterDivs.length; i++) {
        if (guessWordLetterDivs[i].innerHTML === letterSelected) {
          var div = guessWordLetterDivs[i]
          div.style['color'] = 'black';
          guessCorrect = true;
        }

      }
      if (!guessCorrect) {
          subtractLives();
      }

  })

  function subtractLives() {
    errors++;
    switch (errors) {
      case 1:
          $('#hangman6').css("display", "none");
          $('#hangman5').css("display", "inline-block");
        break;
      case 2:
        $('#hangman5').css("display", "none");
        $('#hangman4').css("display", "inline-block");
        break;
      case 3:
        $('#hangman4').css("display", "none");
        $('#hangman3').css("display", "inline-block");
        break;
      case 4:
        $('#hangman3').css("display", "none");
        $('#hangman2').css("display", "inline-block");
        break;
      case 5:
        $('#hangman2').css("display", "none");
        $('#hangman1').css("display", "inline-block");
        break;
      case 6:
        $('#hangman1').css("display", "none");
        $('#hangman-full').css("display", "inline-block");
        for (var i = 0; i < guessWordLetterDivs.length; i++) { guessWordLetterDivs[i].style['color'] = 'black' }
        break;
      default:

    }
  //   if (errors > 5) {
  //     $('div.hangman-image').html("")
  //     $('div.hangman-image').append("<img src='images/hangman-full.png' ></img>")
  //     for (var i = 0; i < guessWordLetterDivs.length; i++) { guessWordLetterDivs[i].style['color'] = 'black' }
  //   } else {
  //   var imageTag = "<img src='" + hangmanImage[errors-1] + "' ></img>"
  //   $('div.hangman-image').html("")
  //   $('div.hangman-image').append(imageTag);
  // }
}




});
// Javascript functions for concentration game
$(document).ready(function() {
  var clicks = 0; //keep track of number of clicks
  var firstChoice; //first card clicked - will store the index
  var secondChoice; //second card clicked - will store the index
  var firstChoiceDiv; //first card clicked - will store the parent div
  var secondChoiceDiv; //second card clicked - will store the parent div
  var matches = 0; // logs the number of matched cards

  skills = []
  skills[0] = {id: 0, photo: "images/ruby.png"}
  skills[1] = {id: 1, photo: "images/html.png"}
  skills[2] = {id: 2, photo: "images/ai.png"}
  skills[3] = {id: 3, photo: "images/js.png"}
  skills[4] = {id: 4, photo: "images/git.png"}
  skills[5] = {id: 5, photo: "images/css.png"}
  skills[6] = {id: 6, photo: "images/jquery.png"}
  skills[7] = {id: 7, photo: "images/ps.png"}
  skills[8] = {id: 8, photo: "images/sql.png"}
  skills[9] = {id: 9, photo: "images/rails.png"}
  skills[10] = {id: 10, photo: "images/ruby.png"}
  skills[11] = {id: 11, photo: "images/html.png"}
  skills[12] = {id: 12, photo: "images/ai.png"}
  skills[13] = {id: 13, photo: "images/js.png"}
  skills[14] = {id: 14, photo: "images/git.png"}
  skills[15] = {id: 15, photo: "images/css.png"}
  skills[16] = {id: 16, photo: "images/jquery.png"}
  skills[17] = {id: 17, photo: "images/ps.png"}
  skills[18] = {id: 18, photo: "images/sql.png"}
  skills[19] = {id: 19, photo: "images/rails.png"}

  cardDivs = [".card0", ".card1", ".card2", ".card3", ".card4", ".card5", ".card6", ".card7", ".card8", ".card9", ".card10", ".card11", ".card12", ".card13", ".card14", ".card15", ".card16", ".card17", ".card18", ".card19", ]

  var front_img = "images/logo3.png"
  shuffleCards(skills)

  function dealCards() {
  for (var i = 0; i < 20; i++) {
    var this_div = ".card" + i;
    var front_card = "<img src='"+ front_img +"' class='face front'></img>";
    var back_card = "<img src='"+ skills[i].photo +"' class='face back'></img>";
    $(front_card).appendTo(this_div);
    $(back_card).appendTo(this_div);
  }};

  dealCards();

  $('div.skill img').on('click', function(e) {
      //once matched the card cant be selected again
      if ($(this).parent().hasClass("stay")) {
        return;
      }

      //wont register the same card if you click it twice
      if ($(this).parent().hasClass("flip")) {
        return;
      }

      if (clicks === 0) {
          $(this).parent().toggleClass("flip");
          clicks++;
          firstChoice = findChoiceId($(this).parent());
          firstChoiceDiv = findDivClass($(this).parent());
      } else {
          $(this).parent().toggleClass("flip");
          secondChoice = findChoiceId($(this).parent());
          clicks++;
          secondChoice = findChoiceId($(this).parent());
          secondChoiceDiv = findDivClass($(this).parent());

          if (!checkMatch(firstChoice, secondChoice, firstChoiceDiv, secondChoiceDiv)) {
            setTimeout(function() {
              flipCards(firstChoiceDiv, secondChoiceDiv);
            }, 1300); }
      }
  })

  function checkMatch(firstChoice, secondChoice, firstChoiceDiv, secondChoiceDiv) {
    clicks = 0;
    if (firstChoice === secondChoice) {
      $("." + firstChoiceDiv).toggleClass("stay");
      $("." + secondChoiceDiv).toggleClass("stay");
      matches++;
      $('#number-of-matches').text("Matches: " + matches + "/10")
      if (matches === 10) {
        $('.modal').fadeIn(2000);
      }
      return true;
      //match
    } else {
      //reset
      return false;
    }
  }

  function findChoiceId(div) {
    var divClass = $(div).attr("class");
    divClass = divClass.split(" ");
    divClass = divClass[0];
    var imageFind = "div." + divClass + " img.back";
    imageFind = $(imageFind).attr("src");
    var choice = findCardId(imageFind);
    return choice;
  }

  function findDivClass(divClicked) {
    var divClass = $(divClicked).attr("class");
    divClass = divClass.split(" ");
    divClass = divClass[0];
    return divClass
  }

  function flipCards(firstChoiceDiv, secondChoiceDiv) {
    $('div').not('.stay').removeClass("flip")
  }

  function findCardId(image) {
    //image is the photo link
    for (var i = 0; i < skills.length; i++) {
      if (skills[i].photo === image) {
        return skills[i].id;
      }
    }
  }

  function shuffleCards(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function reDealCards() {
  for (var i = 0; i < cardDivs.length; i++) {
  var eachCard = cardDivs[i];
  $(eachCard).html("");
}
shuffleCards(skills)
dealCards();
}


$("#show-all-skills").on("click", function(e) {
  e.preventDefault();
  $('#number-of-matches').text("Matches: 10/10")
  $('div.skill').addClass("flip");
  $('.modal').fadeIn(1000);
})

$("#reset-all-skills").on("click", function(e) {
  location.reload();
  // e.preventDefault();
  // matches = 0;
  // clicks = 0;
  // $('#number-of-matches').text("Matches: 0/10");
  // $('.modal').css("display", "none");
  // $('div.skill').removeClass("flip");
  // $('div.skill').removeClass("stay");
  // reDealCards();
})

//KONAMI code for keypress recognition
const pressed = [];
const secretCode = 'ArrowUpArrowDownArrowUpArrowDownArrowLeftArrowRight';

window.addEventListener('keyup', (e) => {
  pressed.push(e.key);
  //if using word characters (-secretCode.length - 1, pressed.length - secretCode.length)
  pressed.splice(-7, pressed.length - 6);
  if (pressed.join('').includes(secretCode)) {
    text_replace();
  }
});

var text_replace = function() {
  // Replace text.
  var hc = 6;
  var hs;
  var h;
  var k;
  var words = ['Delightful','Fantastic','Pleasing','Fun','Magical','Lovely','Captivating','Charming','Amazing','Wonderful'];
  while(hc >= 1) {
    hs = document.getElementsByTagName('h' + hc);
    for (k = 0; k < hs.length; k++) {
      h = hs[k];
      h.innerHTML = words[Math.floor(Math.random()*words.length)] + ' ' + h.innerHTML;
      if (hc === 2) {
        h.class = "border"
        var inside = h.innerText;
        h.innerHTML = `<span> ${inside} </span>`;
      }
    }
    hc-=1;
  }
};

const reveal = document.querySelector('#reveal-code');
reveal.addEventListener('click', function(e) {
  e.preventDefault;
  reveal.innerText = "↑ ↓ ↑ ↓ ← →";
  reveal.id = "";

})

//hover functions for nav bar


const navLinks = document.querySelectorAll('nav a');

function resetNav(e) {
  navLinks.forEach(link => link.classList = "")
}

function resetContent(e) {
  const contentAll = document.querySelectorAll('main > div');
  contentAll.forEach(div => div.style.display = "none")
}

function clickNav(e) {
  e.preventDefault()
  resetNav(e);
  resetContent(e)
  e.path[0].classList.value += "toggleNav";
  const content = $(this).attr('href');
  document.querySelector(content).style.display = "block"
}

navLinks.forEach(link => link.addEventListener('click', clickNav));


// functions for hiding and showing content
document.querySelector('#me-section').display = "none";
const contentEducation = document.querySelector('#education-section');
const contentSkills = document.querySelector('#skills-section');
const contentCProjects = document.querySelector('#projects-section');
const contentPProjects = document.querySelector('#experience-section');
const contentContact = document.querySelector('#contact-section');

const contentAll = document.querySelectorAll('main > div');


});
