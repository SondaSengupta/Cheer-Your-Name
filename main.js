 $( document ).ready(function() {
   $("#cheer").click(function(event) {
    event.preventDefault();
    var name = $('#nameInput').val().toUpperCase();
    var $ul = $('#nameCheer');
    var $li = $('<li>');
    $li.text(assertName(name) + ' ' + cheerFor(name) + ' ' + nameIsGreat(name) );
    $ul.append($li);
  })
});

function assertName(name) {
  return "Your name is " + name + "!";
};

function makeNameCapitalized(name){
  return name.toUpperCase();
};

function cheerFor(name){
  return name.split('').map(function(letter){
    if (letter === ' '){
      return ' ';
    } else if (letter === 'A' ||
      letter === 'E' ||
      letter === 'F' ||
      letter === 'H' ||
      letter === 'I' ||
      letter === 'L' ||
      letter === 'M' ||
      letter === 'N' ||
      letter === 'O' ||
      letter === 'R' ||
      letter === 'S' ||
      letter === 'X') {
        return "Give me an... " + letter + "!";
      } else {
        return "Give me a... " + letter + "!";
      };
  }).join("\n");
};

function nameIsGreat(name){
  return name + " is Great!";
};
