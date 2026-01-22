
var maxProfit = function(prices) {
  
let best=0
for(let i=0;i<prices.length-1;i++){
    for(let j=i+1;j<prices.length;j++){
        if(prices[i]-prices[j]<best){
            best=prices[i]-prices[j]
        }
    }
}
return Math.abs(best)
};

// above one my firts approcah ..but time limit exceeded 
