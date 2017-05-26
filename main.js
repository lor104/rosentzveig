
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

  var front_img = "images/logo.png"
  shuffleCards(skills)

  for (var i = 0; i < 20; i++) {
    var this_div = ".card" + i;
    var front_card = "<img src='"+ front_img +"' class='face front'></img>";
    var back_card = "<img src='"+ skills[i].photo +"' class='face back'></img>";
    $(front_card).appendTo(this_div);
    $(back_card).appendTo(this_div);
    }

  $('img').on('click', function(e) {
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
      if (matches === 10) {
        console.log("winner winner chicken dinner")
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

});
