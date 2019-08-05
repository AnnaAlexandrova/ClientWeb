var countries = [
    {
        name: "Ireland",
        cities: [
            {
                name: "Dublin",
                population: 10987234
            },
            {
                name: "Portlaoise",
                population: 154985
            }
        ]
    },
    {
        name: "Russian Federation",
        cities: [
            {
                name: "Moscow",
                population: 17934123
            },
            {
                name: "Saint-Petersburg",
                population: 12096234
            },
            {
                name: "Novosibirsk",
                population: 1576245
            }
        ]
    },
    {
        name: "Cuba",
        cities: [
            {
                name: "Havana",
                population: 7902345
            },
            {
                name: "Trinidad",
                population: 546238
            },
            {
                name: "Santa Clara",
                population: 134642
            }
        ]
    }
];

function getCountriesWithMaxCitiesCount(countries) {
    var result = countries.reduce(function (maxCitiesCount, currentCountry) {
        if (currentCountry.cities.length >= maxCitiesCount) {
            maxCitiesCount = currentCountry.cities.length;
        }
        return maxCitiesCount;
    }, [0]);

    return countries.filter(function (country) {
        return country.cities.length === result;
    }).map(function (country) {
        return country.name;
    });
}

console.log(getCountriesWithMaxCitiesCount(countries));

function findCountriesPopulation(countries) {
    var countriesList = {};
    countries.forEach(function (country) {
        var countryName = country.name;
        countriesList[countryName] = findPopulation(country);
    });
    return countriesList;
}

function findPopulation(country) {
    return country.cities.reduce(function (sum, city) {
        var currentPopulation = city.population;

        return sum + currentPopulation;
    }, 0);
}

var countriesPopulation = findCountriesPopulation(countries);

for (var curCountry in countriesPopulation) {
    if (countriesPopulation.hasOwnProperty(curCountry)) {
        console.log(curCountry + " " + countriesPopulation[curCountry]);
    }
}