'use strict';


module.exports = function hasLoop () {

  
  if(!sll) return null;
  if(!Object.keys(sll).length) return null;
  
  
  let sll2 = Object.assign({}, sll);

  
  let curr = sll2;

  
  while(curr.next) {
    
    if(curr.next.seen === true) return true;
   
    curr.seen = true;
    
    curr = curr.next;
    
  }
  
  return false;
};