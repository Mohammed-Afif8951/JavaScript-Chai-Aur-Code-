//for of loop


const arr = [1,2,3,4,5];

for (const num of arr){
  //  console.log(num);
}

const greetings = "Hello World";
for(const greet of greetings){
   // console.log(`greetings word ${greet}`);
    
}

const map = new Map()
map.set("IN", "India")
map.set("I", "India")
map.set("UN","United Nation")
map.set("UAE","Dubia")

for(const [key,value] of map){
    //console.log(`${key} -> ${value}`);
}

for(const [key,value] in map){
    //console.log(`${key} -> ${value}`);
}
for(const [key] in map){
    console.log(key);
}
//console.log(map);



//For In Loop

const myObject = {
    "js":"JavaScript",
    "cpp":"C++",
    "py":"Python"
}

for(const key in myObject){
  //  console.log(`${key} is for key ${myObject[key]}`);
    
}

//for each

const lang = ['js','c++','ruby','python']

// lang.forEach( function (item){
//     console.log(item);
// })
    
lang.forEach( (item)=>{
//    console.log(item);
    
})
lang.forEach( (item,index, arr)=>{
    console.log(`${index} -> ${item} -> ${arr}`);
    
})