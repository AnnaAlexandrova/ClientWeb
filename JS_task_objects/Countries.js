var countries = [{
    name: "Ireland",
    cities: [{name: "Dublin", population: 10987234},
        {name: "Portlaoise", population: 154985}]
},

    {
        name: "Russian Federation",
        cities: [{name: "Moscow", population: 17934123},
            {name: "Saint-Petersburg", population: 12096234},
            {name: "Novosibirsk", population: 1576245}]
    },

    {
        name: "Cuba",
        cities: [{name: "Havana", population: 7902345},
            {name: "Trinidad", population: 546238},
            {name: "Santa Clara", population: 134642}]
    }
];

function findMaxCitiesCount(countries) {
    var maxCitiesCount = 0;
    for (var country in countries) {
        if (countries.hasOwnProperty(country)) {
            if (countries[country].cities.length >= maxCitiesCount) {
                maxCitiesCount = countries[country].cities.length;
            }
        }
    }

    var countriesList = [];
    for (country in countries) {
        if (countries.hasOwnProperty(country)) {
            if (countries[country].cities.length === maxCitiesCount) {
                countriesList.push(countries[country].name);
            }
        }
    }
    return countriesList;
}

console.log(findMaxCitiesCount(countries));

function findCountriesPopulation(countries) {
    var countriesPopulation = {};

    for (var currentCountry in countries) {
        if (countries.hasOwnProperty(currentCountry)) {
            var countryName = countries[currentCountry].name;

            countriesPopulation[countryName] = findPopulation(countries[currentCountry]);
        }
    }
    return countriesPopulation;
}

function findPopulation(country) {
    return country.cities.reduce(function (sum, city) {
        var currentPopulation = city.population;

        return sum + currentPopulation
    }, 0);
}

var countriesPopulation = findCountriesPopulation(countries);

for (var curCountry in countriesPopulation) {
    if (countriesPopulation.hasOwnProperty(curCountry)) {
        console.log(curCountry + " " + countriesPopulation[curCountry]);
    }
}