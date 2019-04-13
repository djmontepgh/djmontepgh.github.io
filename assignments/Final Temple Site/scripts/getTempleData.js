

var myRequest = new XMLHttpRequest();
myRequest.open('GET', '\directory/temples.json');



myRequest.onload = function () {
    var data = JSON.parse(myRequest.responseText);

    showRomeITClosures(data);
    showSanDiegoClosures(data);
    showGilbertClosures(data);
    showWashintonDCClosures(data);

    // RomeIT
    function showRomeITClosures(jsonObj) {
        var closureDate = jsonObj.temple[0].closures;

        $.each( closureDate, function( index ) {
            var dateData = closureDate[index].date;

            var myP = document.createElement('p');
            myP.textContent = dateData;
            document.getElementById('RomeITClosures').appendChild(myP);
            console.log( index + ": " + dateData );
          });
    }

    // San Diego
    function showSanDiegoClosures(jsonObj) {
        var closureDate = jsonObj.temple[1].closures;

        $.each( closureDate, function( index ) {
            var dateData = closureDate[index].date;

            var myP = document.createElement('p');
            myP.textContent = dateData;
            document.getElementById('SanDiegoClosures').appendChild(myP);
            console.log( index + ": " + dateData );
          });
    }

    // Gilbert
    function GilbertClosures(jsonObj) {
        var closureDate = jsonObj.temple[3].closures;

        $.each( closureDate, function( index ) {
            var dateData = closureDate[index].date;

            var myP = document.createElement('p');
            myP.textContent = dateData;
            document.getElementById('GilbertClosures').appendChild(myP);
            console.log( index + ": " + dateData );
          });
    }

    // Washinton DC
    function showWashintonDCClosures(jsonObj) {
        var closureDate = jsonObj.temple[3].closures;

        $.each( closureDate, function( index ) {
            var dateData = closureDate[index].date;

            var myP = document.createElement('p');
            myP.textContent = dateData;
            document.getElementById('WashintonDCClosures').appendChild(myP);
            console.log( index + ": " + dateData );
          });
    }
}

myRequest.send();