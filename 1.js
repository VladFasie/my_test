let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// I considered the surface to establish https://en.wikipedia.org/wiki/List_of_countries_and_dependencies_by_area

printLargeCountries();

// remove Tuvalu - has only 26 km^2
let tuvalu = largeCountries.shift(); 
console.warn(tuvalu, 'was removed');
printLargeCountries();

// add China ~270k km^2
largeCountries.unshift('China');
console.warn('China was added');
printLargeCountries();

// remove Monaco - has only 2 km^2
let monaco = largeCountries.pop();
console.warn(monaco, 'was removed');
printLargeCountries();

// add Pakistan ~882k km^2
largeCountries.push('Pakistan');
console.warn('Pakistan was remaddedoved');
printLargeCountries();

function printLargeCountries(){
    console.info('largeCountries: ', largeCountries.join());
}