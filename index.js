class Formatter {
  
    static capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)      
    }
    static sanitize(string) {
      return string.replace(/[^A-Za-z0-9']+/g,'',/\s/);
      }
    
    
    static titleize(string) {
      const word = string.split(" ")
      const newWord= word.toUpperCase()
      for (let i = 0; i < newWord.length; i++) {
        newWord[i] = newWord[i][0].toUpperCase() + newWord[i].substr(1);
        return newWord.join(" ");
    }
    }
  }
  