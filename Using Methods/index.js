function createCar(make, model, year) {
  return {
    make,
    model,
    year,
    describeCar() {
      console.log(`This car is a ${this.year} ${this.make} ${this.model}.`);
    }
  };
}


createCar("Ford", "Mustang", 2021).describeCar();

