function solve(obj) {
  let result = {};

  let smallEngine = { power: 90, volume: 1800 };
  let normalEngine = { power: 120, volume: 2400 };
  let monsterEngine = { power: 200, volume: 3500 };

  result.model = obj.model;

  if (obj.power <= 90) {
    result.engine = smallEngine;
  } else if (obj.power >= 91 && obj.power <= 120) {
    result.engine = normalEngine;
  } else if (obj.power >= 121) {
    result.engine = monsterEngine;
  }

  result.carriage = { type: obj.carriage, color: obj.color };

  if (obj.wheelsize % 2 == 0) {
    let wheelSize = Number(obj.wheelsize) - 1;
    result.wheels = [wheelSize, wheelSize, wheelSize, wheelSize];
  } else {
    result.wheels = [
      obj.wheelsize,
      obj.wheelsize,
      obj.wheelsize,
      obj.wheelsize,
    ];
  }

  return result;
}
solve({
  model: "Ferrari",
  power: 200,
  color: "red",
  carriage: "coupe",
  wheelsize: 21,
});
