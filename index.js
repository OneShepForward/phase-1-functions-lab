// Code your solution in this file!
function distanceFromHqInBlocks(startBlock) {
    return Math.sqrt((42-startBlock)**2);
}

function distanceFromHqInFeet(block) {
    return ((distanceFromHqInBlocks(block))*264);
}

function distanceTravelledInFeet(startBlock, endBlock) {
    return Math.sqrt(((startBlock - endBlock)*264)**2);
}

function calculatesFarePrice(startBlock, endBlock) {
    let distance = distanceTravelledInFeet(startBlock, endBlock);
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return ((distance - 400) * 0.02);
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}