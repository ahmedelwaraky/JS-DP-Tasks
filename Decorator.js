
class Coffee {
    cost() 
    {
        return 5; 
    }
}

class MilkDecorator {
    constructor(coffee) 
    {
        this.coffee = coffee;
    }
    cost() 
    {
        return this.coffee.cost() + 2;
    }
}

class SugarDecorator {
    constructor(coffee)
    {
        this.coffee = coffee;
    }
    cost()
    {
        return this.coffee.cost() + 1; 
    }
}

class WhippedCreamDecorator {
    constructor(coffee) 
    {
        this.coffee = coffee;
    }
    cost()
    {
        return this.coffee.cost() + 3; 
    }
}

// only coffee 
const espresso = new Coffee();
console.log("Espresso cost: $" + espresso.cost()); 
//coffee with milk
const espressoWithMilk = new MilkDecorator(espresso);
console.log("Espresso with Milk cost: $" + espressoWithMilk.cost());
//coffee with milk , sugar and cream
const brewedCoffeeWithSugarAndCream = new WhippedCreamDecorator(new SugarDecorator(new Coffee()));
console.log("Brewed Coffee with Sugar and Whipped Cream cost: $" +brewedCoffeeWithSugarAndCream.cost());
