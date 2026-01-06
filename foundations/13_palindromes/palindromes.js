const palindromes = function (stringgg) {
    // - Use regex to remove anything that is NOT a letter (a-z) or number (0-9)
    const processedString = stringgg
                            .toLowerCase()
                            .replace(/[^a-z0-9]/g, "");
                            
    const lengthh = processedString.length;
    for (let i = 0; i < lengthh / 2; i++) {
        if (processedString[i] !== processedString[lengthh - 1 - i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
