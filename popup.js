var x = setInterval(function() {
    document.getElementById("CDT").innerHTML = "Animal Crossing New Horizons will be available in</br>" + CDT.days + " Days " + CDT.hours + " Hrs " + CDT.minutes + " Mins " + CDT.seconds + " Secs";

    if (distance < 0) {
        document.getElementById("CDT").innerHTML = "Animal Crossing New Horizons has been available for</br>" + CUT.days + " Days " + CUT.hours + " Hrs " + CUT.minutes + " Mins " + CUT.seconds + " Secs";
    }
}, 1000);