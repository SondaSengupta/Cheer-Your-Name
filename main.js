document.addEventListener('DOMContentLoaded', function (){
  document.getElementById('cheer').addEventListener('click', function(){
    var name = document.forms[0].nameInput.value
    var $ul = document.getElementById('nameCheer');
    $ul.innerHTML = '';
    assertName(name);

  })
})



// String Output "Your name is Lisa"
// Turn name into string of letters
// Turn all letters into lowercase
// If there is an AEFHILMNORSX, then it uses 'an'
// String "Give me [a/an] ... [letter]"
// appendchild to DOM


function productArray(array){
  return _.reduce(array, function(prev, next){
    return prev * next;
  });
}

function assertName(name) {
  $('body').append("<p> Your name is <p>")
  $('p').append(name);
  return "Your name is " + name;
}
