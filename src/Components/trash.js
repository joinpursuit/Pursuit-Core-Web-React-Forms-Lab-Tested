const mostCommonElement = (array) => {
    let obj = {};
    for (let i = 0; i < array.length; i++) {
      let element = array[i];
      if (obj[element]) {
        obj[element] += 1;
      } else {
        obj[element] = 1;
      }
    }
    let mostCommon = -Infinity;
    let commonElement;
    for (let key in obj) {
      if (obj[key] > mostCommon) {
        mostCommon = obj[key];
        commonElement = key;
      }
    }
    if (parseInt(commonElement)) {
      return parseInt(commonElement);
    } else {
      return commonElement;
    }
  };