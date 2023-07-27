// Code your solution in this file!


function distanceFromHqInBlocks(address) {
    let distance;   
    if (address >= 42) {
    distance = (address - 42) 
    console.log(distance)
} else if (address < 42) {
    distance = (42 - address)
}
    console.log(distance)
    return distance;
}  
// distanceFromHqInBlocks(43)

// function distanceFromHqInFeet(distance) {
//     let distanceFeet = 264 * distance;
//     console.log(distanceFeet);
//     return distanceFeet;
// }
// distanceFromHqInFeet(1)
  
  function distanceFromHqInFeet(distance) {
    const distanceBlocks = distanceFromHqInBlocks(distance);
    let distanceFeet = distanceBlocks * 264
    return distanceFeet;
  }

  function distanceTravelledInFeet(start, destination) {
    let travelledFeet 
    if (destination > start) {
        travelledFeet = (destination - start) * 264
    } else if (destination < start) {
        travelledFeet = (start - destination) * 264
    }
    return travelledFeet
  }

  function calculatesFarePrice(start, destination) {
    const travelledFeet = Math.abs(destination - start) * 264;
    let farePrice
    if (travelledFeet <= 400) { 
        farePrice = 0
    } else if (travelledFeet > 400 && travelledFeet <= 2000) {
        farePrice = (travelledFeet - 400) * 0.02
    } else if ( travelledFeet > 2000 && travelledFeet <= 2500) {
        farePrice = 25
    } else {farePrice = "cannot travel that far"}
    return farePrice;
  }

