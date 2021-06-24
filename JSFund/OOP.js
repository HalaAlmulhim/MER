//food
class dish{
    constructor(name , type , ingredients , calories){
        this.name = name;
        this.type = type;
        this.ingredients = [...ingredients];
        this.calories = calories;
    }
    listIngredients(){
        for(let i =0; i< this.ingredients.length; i++){
            console.log(this.ingredients[i]);
        }
    }
    displayCalories(){
        console.log(this.calories);
    }
}

class Dessert extends Dish{
    constructor(name , type , ingredients , calories , isVegan){
        super(name , type , ingredients , calories )
        this.isVegan = isVegan;
    }
}

var soup = new Dish("cream of mushroom", "side Dish", ["cream", "mushroom", 
"salt","pepper" ,"butter", "flour"], 300)
var iceCream = new Dessert("vanilla bean ice cream","dessert" ,
["cream", "suger", "vanilla", "eggs", "salt"], 500,false)

soup.ingredients()
soup.displayCalories()
iceCream.ingredients()
iceCream.displayCalories()