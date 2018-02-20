/***********************************
Kata Dictionary Replacer for Ambientia
Aki Karppanen, 2018
************************************/

var fs = require('fs');
    
    try 
    {
        //load the external dictionary-file, read the data and split it in to an array.
        var data = fs.readFileSync('dict.txt', 'utf8').split(";");        
    } 
    catch(e) {
        console.log('Error in file read: ', e.stack)
    }

function DictReplacer(StrToReplace, dict) {
    console.log("Original string: "+StrToReplace);
    StringArray = StrToReplace.split(" ");
    var finalString = "";
    StringArray.forEach(function(word) {
        //checks for words with $ prefix and suffix.
    if (word.startsWith('$') && word.endsWith('$')) {
        //found a word to replace since it has a $ prefix and suffix.
    if (dict.includes(word)) {
        //the word is in the dictionary, find it's location in the array.  
    var index = dict.indexOf(word);
        //since we are using word pairs in our dictionary, the replacement will always have the index of the word + 1.
        //replace the word with the one in the dictionary
    word = dict[index+1];
    }
    }
    finalString += word + " ";    
        
    }, this);   
    
    return finalString; 
    
}

//for demonstration purposes, using hardcoded strings
console.log("Replaced String: "+DictReplacer("", data)+"\n");
console.log("Replaced String: "+DictReplacer("\$temp\$", data)+"\n");
console.log("Replaced String: "+DictReplacer("\$temp\$ here comes the name \$name\$", data)+"\n");