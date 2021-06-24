//hoisting
var beatles =['paul','george','john','ringo']; //global scope
function printNames(names){
    //printNames scope
    function actuallyPrintingNames(){
        //actuallyPrintingName scope
        
        for (let i=0; i < names.length; i++ )// for loop scope
        var name =name;
        //or
        //let name;
        //name=name;
        console.log(name[i]);
    }

}

//destructuring
const person = { 
        firstName: 'Bob', 
        lastName: 'Marley', 
        email: 'bob@marley.com', 
        password: 'sekureP@ssw0rd9', 
        username: 'barley', 
        createdAt: 1543945177623
    };
    const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

    
    //ES 5
    var username = person.username;
    var animal = animal[0];

    //ES 6
    const {username} = person;
    const [animal] = animals;
    const password = "123456";
    const {password:hashpwd} = person;
    const [animal1,animal2, ...theRest] = animals;
    //animal1 ="horse"
    //animal2 = "dog"
    // theRest = ['fish','cat','bird']
    const animalsTwo = [...animals];
    animalsTwo.pop();
    //animalsTwo = ['horse','dog','fish','cat' ]
    //animals = ['horse','dog','fish','cat','bird' ]

    function addNums(num1 , num2){
        return num1 + num2;
    }
    const addNums = (num1 ,num2) => num1 + num2;
    addNums (5 ,6);//11