function getIntersection(arr1, arr2) {
  let Intersection = [];
  let newarr2 = [...arr2];
  arr1.forEach(arr1El => {
    newarr2.find((arr2El, index) => {
      if (arr1El === arr2El) {
        Intersection.push(arr1El);
        delete newarr2[index];
        return true;
      }
    })
  }); 
  return Intersection;
}; 