const findTheOldest = function(peeps) {
    const sorted = peeps.sort(function(a,b){

        const currentYear = new Date().getFullYear();
        let aDeath;
        let bDeath;
        if (!a.yearOfDeath){
            aDeath =  currentYear;
        } else {
            aDeath = a.yearOfDeath;
        }
        if (!b.yearOfDeath){
            bDeath =  currentYear;
        } else {
            bDeath = b.yearOfDeath;
        }
        const aAge = aDeath - a.yearOfBirth;
        const bAge = bDeath - b.yearOfBirth;
        return aAge - bAge;
    });
   return sorted[sorted.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
