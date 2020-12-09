const part1 = data =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(doPart1(data));
    }, 1000);
  }); 

function doPart1(data){
  data = Array.from(data);
  temp=[];
  num="";
  for(let i=0;i<data.length;i++){
    if (data[i]=="\n"){
      temp.push(parseInt(num));
      num="";
    }
    else{
      num+=data[i];
    }
  }
  data=temp;
  //console.log(data);
  outer:
  for (let i=25;i<data.length;i++){
    //console.log(i + ": " + data[i]);
    inner:
    for(let j=i-25;j<i;j++){
      for(let k=j+1;k<i;k++){
        if (parseInt(data[j])+parseInt(data[k])===parseInt(data[i])){
          //console.log("Line "+i+":"+data[i]+"="+data[j]+"+"+data[k]);
          continue outer;
        }
      }
    }
    console.log("Found at " + i);
    return data[i];
  }
  return "No answer";
}

function doPart2(data){
data = Array.from(data);
  temp=[];
  num="";
  for(let i=0;i<data.length;i++){
    if (data[i]=="\n"){
      temp.push(parseInt(num));
      num="";
    }
    else{
      num+=data[i];
    }
  }
  data=temp;
  //console.log(data);
  let magicNumber =70639851;
  outer:
  for (let i=0;i<data.length-1;i++){
    let n=i+1;
    let total = data[i]+data[n];
    while (total<magicNumber) {
      n++;
      total+=data[n];
    }
    if (total==magicNumber)
      return data[i] + " & "+ data[n];
  }
  return "Nothing"
}

const part2 = data =>
  new Promise(resolve => {
    setTimeout(() => {
        resolve(doPart2(data));
    }, 1000);
  });

module.exports = {
  part1 
  ,part2
};
