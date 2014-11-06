 $( document ).ready(function() {
   $("#cheer").click(function(event) {
    event.preventDefault();
    var name = $('#nameInput').val();
    var $ul = $('#nameCheer');
    var $li = $('<li>');
    $li.text(assertName(name));
    $ul.append($li);
  })
});



// String Output "Your name is Lisa"
// Turn name into string of letters
// Turn all letters into lowercase
// If there is an AEFHILMNORSX, then it uses 'an'
// String "Give me [a/an] ... [letter]"
// appendchild to DOM

function assertName(name) {
  return "Your name is " + name + "!";
};

function cheerFor(name){
  return name.split('').map(function(letter){
    if (letter === ''){
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
