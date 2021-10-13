/*function testFunction() {
    let x = "foo";
    if (x.length > 2) {
        let x2 = "Foo2";
    }
    console.log(x);
    console.log(x2);
}
testFunction();*/

// Need to run code like this:
function testFunction2() {
    let x = "foo";
    if (x.length > 2) {
        let x2 = "Foo2";
        console.log(x2); // x2 cannot run outside of local scope
    }
    console.log(x);

}
testFunction2();

/*function doSomething() {
    console.log(a);
    console.log(foo());
    let a = 1;
    function foo() {
      return 2;
    }
  }
  doSomething();*/

  // Need to run code like:
  function doSomething2() {
    let a = 1; // a needs to be initialised BEFORE running
    console.log(foo()); // function can be called anywhere in the code
    function foo() {
      return 2;
    }
    console.log(a);

  }
  doSomething2();