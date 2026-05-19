//1 cemlemek
let arr1=[1,3,6,2,7];
let sum=0
for(i=0;i<arr1.length; i++){
    console.log(arr1[i]);
    sum+=arr1[i]
}
console.log(sum);
 
console.log("--------------");

//2 en uzun soz
let arr2=["Anara","Kamal","Kenan"]
let log=arr2[0]
for(i=0;i<arr2.length;i++){
    if(arr2[i].length>log.length){
        console.log(arr2[i]);  
    }
    console.log(log);
}

console.log("--------------");

//3 boyukle
let arr3=["anar","kamal","kenan"]
for(i=0;i<arr3.length;i++)
{
    console.log(arr3[i].toLocaleUpperCase()); 
}
console.log("--------------");

//4 kvatratlari
let arr4=[10,2,6,9]
 for(i=0;i<arr4.length;i++){
    if(arr4[i])
        console.log(arr4[i]**2);   
 }

console.log("--------------");

//5 ikinci en boyuk eded
let arr5=[10,2,6,9]
arr5.sort((a,b)=>a-b)
console.log(arr5[1]);

console.log("--------------");

// 6 arrayin butun elementleri eynidir?
let arr6=[10,10,10,10]
let same=true
for(i=0;i<arr6.length;i++){
    if(arr6[i] !==arr6[0]){
        same=false
    }
} 
console.log(same);

console.log("--------------");

//7 ortalama qiymet
let arr7=[10,2,6,9,78,45,]
let plural=0
for(i=0;i<arr7.length;i++){
    console.log(arr7[i]);
    plural += arr7[i]   
}
let average=plural / arr7.length
console.log(plural);

console.log(average);

console.log("--------------");

//8 array random qarisdir sonra yeni array qalsin
let arr8=[1,2,3,4,5]
let newarr=arr8.sort(()=>Math.random()-0.5)
console.log(newarr);
 
console.log("--------------");
//9 eyni olanlari ayri yigmag
let arr=[1,1,2,4,3,5,3,7,3]
 let n=[]
 for(let i=0;i<arr.length;i++){
    if(arr.indexOf(arr[i])!==i){
        n.push(arr[i])
    }
 }
console.log(n);
    


































//ilk olan
// let arr=["test","hello","tea"]
// arr.sort().reverse()
// console.log(arr);


//ilk olan
// let arr=["Anar,2001","Kamal,1999","Kenan,2000",]
// arr.sort((a,b)=> a.split(",")[1]-b.split(",")[1])
// console.log(arr);
