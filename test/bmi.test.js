function bmiTest(weight, feet, inches) {
    const height = feet * 12 + inches;
    return ((weight / (height * height)) * 703).toFixed(1);
  }
  
  QUnit.test( "bmiTest()", function( assert ) {
    var result = bmiTest( 140, 6, 2 );
  
    assert.equal( result, 18.0, "Underweight" );
  });
  QUnit.test( "bmiTest()", function( assert ) {
    var result = bmiTest( 150, 6, 0 );
  
    assert.equal( result, 20.3, "Normal Weight" );
  });
  QUnit.test( "bmiTest()", function( assert ) {
    var result = bmiTest( 200, 6, 0 );
  
    assert.equal( result, 27.1, "Overweight" );
  });
  QUnit.test( "bmiTest()", function( assert ) {
    var result = bmiTest( 225, 6, 0 );
  
    assert.equal( result, 30.5, "Obesity" );
  });