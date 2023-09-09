let Ceo = null;
class CEO
{
    constructor(name , age ,address)
    {
        if(Ceo == null)
        {
            this.name = name;
            this.age = age;
            this.address = address;
            Ceo = this
        }
        else
        {
            return Ceo
        }
        
    }
}

let firstCEO = new CEO("waraki" , 24 , 'menofia')
let secCEO = new CEO('omar' ,23 , 'giza' )

console.log(firstCEO);
console.log(secCEO);

