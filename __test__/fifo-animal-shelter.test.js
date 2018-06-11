'use strict';

const AnimalShelter = require('../fifo-animal/fifo-animal.js');
const Animal = require('../fifo-animal/animal');

// redefining global Math object for testing random function
const mockMath = Object.create(global.Math);

test('animal shelter', () => {
  const shelter = new AnimalShelter();

  const fluffy = new Animal('Fluffy', 'cat');
  const mittens = new Animal('Mittens', 'cat');
  const shadow = new Animal('Shadow', 'cat');
  const fido = new Animal('Fido', 'dog');
  const rover = new Animal('Rover', 'dog');
  const max = new Animal('Max', 'dog');

  shelter.enqueue(fluffy);
  shelter.enqueue(mittens);
  shelter.enqueue(rover);
  shelter.enqueue(shadow);
  shelter.enqueue(fido);
  shelter.enqueue(max);

  // catQueue: shadow, mittens, fluffy
  // dogQueue: max, fido, rover

  expect(shelter.catQueue[0].name).toEqual('Shadow');
  expect(shelter.catQueue[1].name).toEqual('Mittens');
  expect(shelter.catQueue[2].name).toEqual('Fluffy');

  expect(shelter.dogQueue[0].name).toEqual('Max');
  expect(shelter.dogQueue[1].name).toEqual('Fido');
  expect(shelter.dogQueue[2].name).toEqual('Rover');

  expect(shelter.dequeue('cat').name).toEqual('Fluffy');
  expect(shelter.dequeue('dog').name).toEqual('Rover');

  // catQueue: shadow, mittens
  // dogQueue: max, fido

  mockMath.random = () => 0.6;
  global.Math = mockMath;
  expect(shelter.dequeue('').name).toEqual('Fido');

  mockMath.random = () => 0.3;
  global.Math = mockMath;
  expect(shelter.dequeue('').name).toEqual('Mittens');
});
test('throws error on enqueue bad animal', () => {
  const shelter = new AnimalShelter();
  const bad = new Animal('NotADog', 'penguin');
  expect(() => {
    shelter.enqueue(bad);
  }).toThrow();
});