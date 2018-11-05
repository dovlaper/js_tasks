// foo1();

var foo1 = function(){
    console.log("form function: " + x);
};
// foo1();
x = 3;
item1 = "global"
{
    var item2 = "scope1";
    let item3 = "inside scope";
    {
        alert(item1);
        alert(item2);
        alert(item3);
//        alert(item4); // item 4 is not defined
        var item7 = "item u scope drugog nivoa";
    }

    var item5 = "declaration after use var";
    let item6 = "declaration after use let";
}

var foo = function(scope){
    alert("SKOP => " + scope);
    var item4 = "inside function scope";
    alert(item1);
    alert(item2);
//  alert(item3); // item 3 ne postoji u ovom scope ok to je let to je normalno
    alert(item4);
//  alert(item6); // naravno puko jer let
    alert(item7);

}
alert("out of any scope " + item2);
// alert("out of function scope " + item4); var ima function scope
foo("Poziv funkcije iz js fajla");