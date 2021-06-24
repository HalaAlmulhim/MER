class Ninja{
    constructor (name, health, speed, strength){
        this.name = name;
        this.health = 0;
        this.speed = 3;
        this.strenghth = 3;
    }

    sayName(){
        console.log(this.name);
    }

    showStats(){
        console.log(`Ninja's name: ${this.name}, health : ${this.health} , speed : ${this.speed} , strenghth : ${this.strenghth} `);
    }

    drinkSake() {
        this.health +=10;
        // or we can say also
        // this.health = this.health + 10 ;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
