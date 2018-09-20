/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */

module.exports =  function getLoveTrianglesCount(preferences = []){
  var count = 0;
    for(var n = 0; n < preferences.length;n++){    
      var k = preferences[n];
        for (var i = n; i < preferences.length; i++) {
          if (preferences[i] == n+1){
            for(var x = n; x < preferences.length;x++){
              if(preferences[x]==i+1){
                if(x+1==k&&k!=i+1&&k!=n+1){                                  
                  count++;                 
                  break;                  
                }
              }
            }       
          }
        }
      }
  return count;
};

