// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker2 {
    constructor(object) {
        this.dimensions = object.dimensions; 
    }
    volume() {
        return (this.dimensions.length * this.dimensions.width * this.dimensions.height);
    }
    surfaceArea(){
        return 2 * (this.dimensions.length * this.dimensions.width + this.dimensions.length * this.dimensions.height + this.dimensions.width * this.dimensions.height);
    }
  }

  const cuboid2 = new CuboidMaker2({
    dimensions: {
      length: 4,
      width: 5,
      height: 5,
    },
  });

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.