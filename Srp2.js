// Shipment Interface
class Shipment {
    constructor(pickupDate, deliveryDate, commodities, shipFrom, shipTo) {
        this.pickupDate = pickupDate;
        this.deliveryDate = deliveryDate;
        this.commodities = commodities;
        this.shipFrom = shipFrom;
        this.shipTo = shipTo;
    }
    calculateCost() {
        throw new Error("calculateCost() method must be implemented.");
    }
}

  // Playground Shipment
class PlaygroundShipment extends Shipment {
    constructor(pickupDate, deliveryDate, commodities, shipFrom, shipTo) {
    super(pickupDate, deliveryDate, commodities, shipFrom, shipTo);
    }
    calculateCost() {
      // Add logic to calculate cost for Playground shipment
      // ...
      return 100; // Dummy cost for illustration
    }
} 

  // Air Shipment
class AirShipment extends Shipment {
    constructor(pickupDate, deliveryDate, commodities, shipFrom, shipTo) {
    super(pickupDate, deliveryDate, commodities, shipFrom, shipTo);
    }
    calculateCost() {
      // Add logic to calculate cost for Air shipment
      // ...
      return 200; // Dummy cost for illustration
    }
}

  // Shipment Manager
class ShipmentManager {
    constructor() {
    this.shipments = [];
    }
    placeShipment(shipment) {
      // Add shipment to the shipments list
        this.shipments.push(shipment);
    }
    getTotalCost() {
        let totalCost = 0;
        for (const shipment of this.shipments) {
            totalCost += shipment.calculateCost();
        }
        return totalCost;
    }
}

  // Example usage
const shipmentManager = new ShipmentManager();
const playgroundShipment = new PlaygroundShipment("2023-09-10","2023-09-15",["Commodity 1", "Commodity 2"],"Shipper A","Customer X");
shipmentManager.placeShipment(playgroundShipment);

const airShipment = new AirShipment("2023-09-12","2023-09-18",["Commodity 3", "Commodity 4"],"Shipper B","Customer Y");
shipmentManager.placeShipment(airShipment);
const totalCost = shipmentManager.getTotalCost();

console.log("Total shipment cost:", totalCost);