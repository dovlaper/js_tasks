var array = [];
var laptop = {
    'name'  :   'mekani',
    'RAM'   :   8,
    'SSD'   :   128,
    'CPU'   :   "intel  i5 ...",
    'components' : ['a', 'b']
};

array['a'] = 1;
array['b'] = "Djurica";
array.push({'user':'vlada', 'pass':'123', 2:202});
array.push({'user':'vlada', 'pass':'123', 2:202});
array.push({'user':'vlada', 'pass':'123', 2:202});
array.push(laptop)

console.log(array.pop());
console.log(array.pop());
console.log(array.pop());
console.log(array.pop());


var Person = function (name, lastName, gender){
    this.name = name;
    this.lastName = lastName;
    this.gender = gender;
}

Person.prototype.getName = function(){
    return this.name;
}

Person.prototype.getLastName = function(){
    return this.lastName;
}

Person.prototype.getGender = function(){
    return this.gender;
}

Person.prototype.toString = function(){
    return "name: " + this.name + ", last name: " + this.lastName + ", gender: " + this.gender;
}

var a = new Person("vlada", "antonic","male");
// Student extends Person

var Student = function(name, lastName, gender, index){
    var id = 0;
    Person.call(this, name, lastName, gender);
    this.index = index;
}

Student.prototype = Object.create(Person.prototype); // Nije bas nasledjivanje, vise kao da delegiram sve iz osobe Studentu
Student.prototype.constructor = Student; // podesim konstruktor da ne bude od Person nego od Student

Student.staticId = 0;
Student.incStatic = function(){
    this.staticId++;
};

Student.prototype.next = function(){
    ++id;
    console.log(id);
}


var vlada = new Student("Vladimir", "Antonic","male","sw2-2015");


Student.staticVar = 0;
Student.staticMethod = function(){
    console.log(staticVar);
}


// callback example




    function foo(x,callback1, callback2){
        if(x[1] < 5) {
            callback1(x);
        }
        else {
            callback2(x);
        }
    }

    function increment(x){
        console.log(++(x[1]));
    }

    function decrement(x){
        console.log(--(x[1]));
    }

    t = 0;
    var obj = {1:t};
    foo(obj, increment, decrement);
    foo(obj, increment, decrement);
    foo(obj, increment, decrement);
    foo(obj, increment, decrement);

    // promise example

    let promise  = new Promise(function(resolve, reject){
        setTimeout(function() {
            resolve('Rizolvovano');
          }, 3000);
    });

    promise.then(function(value){
        console.log(value);
    })
    .catch( () => console.log("rejectovano"));

    // another promise example
    var x = 444;

    var promise1 = new Promise(function(resolve, reject){
        if (isNaN(x))
            reject(x);
        else resolve(x);
    });

    promise1.then(number => console.log(number + 2))
            .catch(notnumber => console.log(notnumber + " nije broj! :("));