var q = QUnit;

q.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

q.test( "return product of an array", function(assert){
  var array = [1,2,3,4,5,6,7,8,9];
  assert.equal( productArray(array), 362880 );
});

q.test("Your name is !", function(assert){
  var name = "Lisa";
  assert.equal(assertName(name), "Your name is Lisa");
});
