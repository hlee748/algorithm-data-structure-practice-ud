function validAnagram(str1, str2){
	// add whatever parameters you deem necessary - good luck!
	if(str1.length != str2.length){
		return false
	  }
      let newStr1 = str1.split("")
      let newStr2 = str2.split("")
      
      let frequencyCounter1 = {}
      let frequencyCounter2 = {}
      
      for (let val of newStr1) {
		      frequencyCounter1[val] = (frequencyCounter1[val] || 0 ) + 1
      }
      for (let val of newStr2) {
		      frequencyCounter2[val] = (frequencyCounter2[val] || 0 ) + 1
      }
      
      for (let key in frequencyCounter1){
			      if(frequencyCounter2[key] !== frequencyCounter1[key]){
					      return false
			      }
	      }
      return true
      }