/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Facebook.

Given an unordered list of flights taken by someone, each represented as (origin, destination) pairs, and a starting airport, compute the person's itinerary. If no such itinerary exists, return null. If there are multiple possible itineraries, return the lexicographically smallest one. All flights must be used in the itinerary.

For example, given the list of flights [('SFO', 'HKO'), ('YYZ', 'SFO'), ('YUL', 'YYZ'), ('HKO', 'ORD')] and starting airport 'YUL', you should return the list ['YUL', 'YYZ', 'SFO', 'HKO', 'ORD'].

Given the list of flights [('SFO', 'COM'), ('COM', 'YYZ')] and starting airport 'COM', you should return null.

Given the list of flights [('A', 'B'), ('A', 'C'), ('B', 'C'), ('C', 'A')] and starting airport 'A', you should return the list ['A', 'B', 'C', 'A', 'C'] even though ['A', 'C', 'A', 'B', 'C'] is also a valid itinerary. However, the first one is lexicographically smaller.
*/

class Flight {
  constructor(origin=null,destination=null) {
    this.origin=origin;
    this.destination=destination;
  }
}

const makeRoute = (yourArrayOfObjs) => {
  let output = [];
  let temp;
  for (i = 0; i< yourArrayOfObjs.length; i++) {


  }
}

const leg1 = new Flight('SFO', 'HKO')
const leg2 = new Flight('YYZ', 'SFO')
const leg3 = new Flight('YUL', 'YYZ')
const leg4 = new Flight('HKO', 'ORD')
const iten1 = [leg1,leg2,leg3,leg4]



$(document).ready(function() {
  $('#button1').click(function(){
    value1 = $('#input1-section-1').value();
    $('#output-section-0').text(1)
  })
});
