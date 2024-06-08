let arr = [2,4,9,10,45,67,8,90];

console.log(`${arr} Boshlanishdagi array`);

let newArr = [];

for(let i = 0; i<arr.length; i++){
    if(arr[i]%2 == 0){
        newArr.push(arr[i])
    }
}

console.log(`${newArr} Juft sonlarga ajratilgan array`)