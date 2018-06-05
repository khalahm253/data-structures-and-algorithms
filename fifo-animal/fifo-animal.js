'use strict';

class AnimalShelter {
    constructor() {
      this.catQueue = [];
      this.dogQueue = [];
    }
    enqueue(animal) {
      if (animal.type === 'cat') {
        this.catQueue.unshift(animal);
        return 'cat added';
      } else if (animal.type === 'dog') {
        this.dogQueue.unshift(animal);
        return 'dog added';
      } throw new Error('animal must be a cat or dog');
    }
    dequeue(pref) {
      let chosenType = pref;
      if (pref !== 'cat' && pref !== 'dog') {
        const rand = Math.random();
        if (rand < 0.5) {
          chosenType = 'cat';
        } else {
          chosenType = 'dog';
        }
      }
  
      if (chosenType === 'cat') {
        return this.catQueue.pop();
      } 
      return this.dogQueue.pop();
    }
  };