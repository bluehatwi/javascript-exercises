const getTheTitles = function(books) {
    const titles = books.map(function(aBook){
        return aBook.title;
    });
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
