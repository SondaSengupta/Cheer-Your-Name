var q = QUnit;

q.test( "Is qUnit Working?", function( assert ) {
  assert.ok( 1 == "1", "Yes, ready to go!" );
});

q.test("Your name is Eliza!", function(assert){
  assert.equal(assertName("Eliza"), "Your name is Eliza!");
});

q.test("Your name is Another Name!", function(assert){
  assert.equal(assertName("Lisa"), "Your name is Lisa!");
});

q.test("makeNameCapitalized", function(assert){
  expectedCapital = "LISA";
  assert.equal(makeNameCapitalized("Lisa"), expectedCapital);
});

q.test("cheerfor(name)", function(assert){
  expectedCheer = "Give me an... A!\nGive me an... L!";
  assert.equal(cheerFor("AL"), expectedCheer);
});

q.test("cheerfor(name)", function(assert){
  expectedCheer = "Give me a... B!\nGive me an... O!\nGive me a... B!";
  assert.equal(cheerFor("BOB"), expectedCheer);
});

q.test("nameiSGreat", function(assert){
  ending = "BOB is Great!";
  assert.equal(nameIsGreat("BOB"), ending);
});
