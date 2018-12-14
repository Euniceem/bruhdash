var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function (arr) {
      return arr.shift();
  },

  // returns the last element of an array
  last: function (arr) {
      return arr.pop();
  },

  // returns the index of the first matching element from left to right
  indexOf: function (arr, x) {
      return arr.indexOf(x);
  },

  // returns the index of the first matching element from right to left
  lastIndexOf: function (arr, x) {
      return arr.lastIndexOf(x);
  },

  // returns an array with all elements except for the last element
  initial: function(array) {
    var lastElem = array.pop();
    return array;
  },
  
  // returns an array with all falsey values removed
  compact: function(array) {
    for(var i = 0; i < array.length; i++){
      if(array[i] === false){

      }
    }
    return array.filter(Boolean);
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (array, x, y) {
    return array.slice(x, y);
    
    
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(arr, num){
    if(num === 0){
      return arr;
    }
    if(num){
      return arr.slice(num);
    } else {
      return arr.slice(1);  
    }

  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(arr, num) {
    if(num === 0){
      return arr;
    } else if(num){
      return arr.slice(0, num + 1);
    } else {
      return arr.slice(0, arr.length - 1);
    }
  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (arr, num) {
    var empty = [];
    if(num === 0){
      return empty;
    } else if(num){
      return arr.slice(0, num);
    } else if(num > arr.length){
      return arr;
    } else {
      empty.push(arr[0]);
      return empty;
    }
  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function (arr, n) {
    var empty = [];
    if(n > arr.length){
      return arr;
    } else if(n === 0){
      return empty;
    } else if(n){
      return arr.slice(n - 1, arr[arr.length -1]);
    } else{
      empty.push(arr[arr.length - 1]);
      return empty;
    }
  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function(arr, value, start, end) {
    if(!start && !end){
      return arr.fill(value);
    } else{
      for(var i = start; i < end; i++){
        arr.splice(i, 1, value);
      }
    }
    return arr;
  },

  // removes all given values from an array
  pull: function (arr, valueOne, valueTwo) {
    var arrDash = [];

    for (var i = 0; i < arr.length; i++) {
      // comparing the current iteration value to see if it equals valueOne (a) or valueTwo (b)
      if (arr[i] !== valueOne && arr[i] !== valueTwo) {
        // whatever is left over will be pushed into arrDash
        arrDash.push(arr[i]);
      }
    }
    // returning arrDash
    return arrDash;

  },

  // removes elements of an array corresponding to the given indices
  pullAt: function (arr, index) {
    var x = [];
    for(let i = 0; i < arr.length; i++){
      for(let y = 0; y < arr.length; i++){
        if(arr.indexOf(arr[i]) === index[y]){
          x.push(arr[i])
        }
      }
    }
    return x;
  },

  // creates an array excluding all the specified values
  without: function() {

  },

  // returns an array with specified values excluded
  difference: function() {

  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function () {

  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function () {

  },

  // creates an array of elements into groups of length of specified size
  chunk: function(){

  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function() {

  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function() {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function() {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {
    
  }
};
