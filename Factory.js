class Track {
        constructor(model, price) {
            this.model = model;
            this.price = price;
        }
        returnModelDetails() {
            return `This model is ${this.model} and costs ${this.price}`;
        }
}

class Motor {
        constructor(model, price) {
            this.model = model;
            this.price = price;
        }
        returnModelDetails() {
            return `This model is ${this.model} and costs ${this.price}`;
        }
}
    
class Car {
        constructor(model, price) {
            this.model = model;
            this.price = price;
        }
        returnModelDetails() {
            return `This model is ${this.model} and costs ${this.price}`;
        }
}

class Vehicle {
        constructor(type) {
        this.type = type;
        }
        returnDetails() {
        switch (this.type) {
            case "TRACK":
            return new Track(2012, 5000); 
            case "MOTOR":
            return new Motor(2012, 8000); 
            case "CAR":
            return new Car(2012, 15000); 
            default:
            console.log("Invalid Car Type");
        }
        }
}
  // Motor
    let HOGAN = new Vehicle("MOTOR");
    let hoganDetails = HOGAN.returnDetails();
    console.log(hoganDetails.returnModelDetails());

  // Car
    let KIA = new Vehicle("CAR");
    let kiaDetails = KIA.returnDetails();
    console.log(kiaDetails.returnModelDetails());

  // Track
    let CAT = new Vehicle("TRACK");
    let catDetails = CAT.returnDetails();
    console.log(catDetails.returnModelDetails());
  