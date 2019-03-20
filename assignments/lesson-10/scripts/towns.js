
function demoData() {
    var section = document.querySelector('#demo');
    var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

    var request = new XMLHttpRequest();
    request.open('GET', requestURL);

    request.responseType = 'json';
    request.send();

    request.onload = function() {
        var data = request.response;
        thetowns(data);
    
    function showTowns(jsonObj) {
        var towns = jsonObj['towns'];
    
        for (var i = 0; i < towns.length; i++) {
            var simplename = towns[i].name.toLowerCase().replace(' ','');
            if (simplename == "preston") || (simplename == "sodasprings") || (simplename == "fishhaven") 
               
            var myArticle = document.createElement('article');
            var townName = document.createElement('h2');
            var motto = document.createElement('p');
            var year = document.createElement('p');
            var population = document.createElement('p');
            var rainfall = document.createElement('p');
            var image = document.createElement('img');
    
            var imageSrc = 'images/' + simplename + '.jpg'; 

            townName.textContent = towns[i].name;
            motto.textContent = towns[i].motto;
            year.textContent = 'Year Founded: ' + towns[i].yearFounded;
            population.textContent = 'Population: ' + towns[i].currentPopulation;
            rainfall.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
            
            image.setAttribute('src', imageSrc);
    
                myArticle.appendChild(myImg);
                myArticle.appendChild(myH4);
                myArticle.appendChild(myH6);
                myArticle.appendChild(myPara1);
                myArticle.appendChild(myPara2);
                myArticle.appendChild(myPara3);
                
                section.appendChild(myArticle);
            }
               
        }
        } 
    }