class Bird {
    fly() {
        console.log('This bird can fly.');
    }
}

class Sparrow extends Bird {
    fly() {
        console.log('Sparrow can fly.');
    }
}

class Ostrich extends Bird {
    fly() {
        console.log('Ostrich cannot fly.');
    }
}

function makeBirdFly(bird) {
    bird.fly();
}

    const genericBird = new Bird();
    const sparrow = new Sparrow();
    const ostrich = new Ostrich();

  makeBirdFly(genericBird); // This bird can fly.
  makeBirdFly(sparrow);     // Sparrow can fly.
  makeBirdFly(ostrich);     // Ostrich cannot fly.
