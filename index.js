class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  // static exceptions(string){
  //   let ray = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
  //   // return ray.find(string);
  //   return true
  // }

  static titleize(string){
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let ray = string.split(' ')
    let i = 0;
    let returnValue = ray.map(function(word){
      if (i == 0) {
        i += 1
        return word.charAt(0).toUpperCase() + word.slice(1);
      } else if (exceptions.includes(word)) {
        return word
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
    })
    return returnValue.join(' ')
    
  }

  // const alligator = ["thick scales", 80, "4 foot tail", "rounded snout"];

  // alligator.includes("thick scales"); // returns true


  //   let ray = string.split(' ')
  //   let i = 0;
  //   ray.forEach(function(word){
  //     if (i = 0) {
  //       console.log(word.toUpperCase())
  //       i += 1;
  //       return word.toUpperCase();
  //     } else if ( true ) {
  //       // console.log(exceptions(word))
  //       return word
  //     } else {

  //       return word.word.toUpperCase();
  //     }
  //   })

  //   return 
  // }

}