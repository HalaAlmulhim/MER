class Cards{
    constructor(name,cost){
        this.name = name;
        this.cost = cost;
    }
}

class UnitCards extends Cards{
    constructor(name, cost, power, resilience){
        super(name,cost);
        this.power = power;
        this.resilience = resilience;
    }

    attck(target) {
        target.resilience -= this.power;
        // console.log(`${target.name} 's resilience has reduced by ${this.power} and the current target ${target.red_belt_ninja} `)
    }

}

class EffectCards extends Cards{
    constructor(name, cost, sate, magnitude){
        super(name,cost);
        this.sate = sate;
        this.magnitude = magnitude;
    }

    play(target) {
        if( target instanceof UnitCards ) {
            if(this.sate == "power"){
                if (this.magnitude > 0){
                    target.power += this.magnitude
                    console.log(`${target.name} 's ${this.sate} has increase by ${this.magnitude} and has become ${target.power}`)
                }else{
                    target.power += this.magnitude
                    console.log(`${target.name} 's ${this.sate} has decrease by ${Math.abs(this.magnitude)} and has become ${target.sate}`)
                }
            }else{
                if (this.magnitude > 0){
                    target.resilience += this.magnitude
                    console.log(`${target.name} 's ${this.sate} has increase by ${this.magnitude} and has become ${target.resilience}`)
                }else{
                    target.power += this.magnitude
                    console.log(`${target.name} 's ${this.sate} has decrease by ${Math.abs(this.magnitude)} and has become ${target.resilience}`)

                }

            }

        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

const red_belt_ninja = new UnitCards("Red Belt Ninja",3,3,4);
const black_belt_ninja = new UnitCards("Black Belt Ninja",4,5,4);

const hard_algorithm = new EffectCards("Hard Algorithm", 2, "resilience", magnitude=3);
const unhandled_promise_rejection=new EffectCards("Unhandled Promise Rejection", 1, "resilience", magnitude=-2)
const pair_programming= new EffectCards("Pair Programming",	3, "power", magnitude= 2)


hard_algorithm.play(red_belt_ninja);
unhandled_promise_rejection.play(red_belt_ninja)
pair_programming.play(red_belt_ninja)
red_belt_ninja.attck(black_belt_ninja)