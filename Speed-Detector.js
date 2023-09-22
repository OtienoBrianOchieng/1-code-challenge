const speedOfCar = 70;

function speedDetector () {
    if (speedOfCar >= 1 && speedOfCar <= 70) {
        console.log ("OK"); return "OK";
    } 
    else if (speedOfCar >= 71 && speedOfCar <= 75) {
        console.log ("Points: 1"); return "points: 1";
    }
    else if (speedOfCar >= 76 && speedOfCar <= 80) {
        console.log ("Points: 2"); return "points: 2";
    }
    else if (speedOfCar >= 81 && speedOfCar <= 85) {
        console.log ("Points: 3"); return "points: 3";
    }
    else if (speedOfCar >= 86 && speedOfCar <= 90) {
        console.log ("Points: 4"); return "points: 4";
    }
    else if (speedOfCar >= 91 && speedOfCar <= 95) {
        console.log ("Points: 5"); return "points: 5";
    }
    else if (speedOfCar >= 96 && speedOfCar <= 100) {
        console.log ("Points: 6"); return "points: 6";
    }
    else if (speedOfCar >= 101 && speedOfCar <= 105) {
        console.log ("Points: 7"); return "points: 7";
    }
    else if (speedOfCar >= 106 && speedOfCar <= 110) {
        console.log ("Points: 8"); return "points: 8";
    }
    else if (speedOfCar >= 111 && speedOfCar <= 115) {
        console.log ("Points: 9"); return "points: 9";
    }
    else if (speedOfCar >= 116 && speedOfCar <= 120) {
        console.log ("Points: 10"); return "points: 10";
    }
    else if (speedOfCar >= 121 && speedOfCar <= 125) {
        console.log ("Points: 11"); return "points: 11";
    }
    else if (speedOfCar >= 126 && speedOfCar <= 130) {
        console.log ("Points: 12"); return "points: 12";
    }
    else if (speedOfCar >= 131) {
        console.log ("License Suspended"); return "License suspended";
    }
}
speedDetector();