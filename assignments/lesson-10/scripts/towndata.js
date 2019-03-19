fetch('js/towndata.json').then(response => {return response.json();}).then(data => {
	var i, x = "";
    for (i in data.towns) {
		if ( i == 1 || i == 4 || i == 5 ) {
		x += "<a href=\"" + ((data.towns[i].name).replace(/\s/g, '').toLowerCase()) + ".html\"><div class=\"townlink\"><br><h2>" + data.towns[i].name + "</h2>";
		x += "<div class=\"townbio\"><br><span class=\"motto\">" + data.towns[i].motto + "</span><br><br>";
		x += "<span class=\"year1\">Year Founded:</span> <span class=\"year2\">" + data.towns[i].yearFounded + "</span><br><br>";
		x += "<span class=\"pop1\">Population:</span> <span class=\"pop2\">" + data.towns[i].currentPopulation + "</span><br><br>";
		x += "<span class=\"rain1\">Annual Rain Fall:</span> <span class=\"rain2\">" + data.towns[i].averageRainfall + "\"</span><br><br></div>";
		x += "<figure><img src=\"img/town-" + i + ".jpg\" alt=\"Town\"></figure></div></a>";
		} else { continue; }
    }
    document.getElementById("demo").innerHTML = x;
}).catch(err => {
  console.log(err)
});