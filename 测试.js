
// var a="123"
// console.log(a.charAt(0))

// console.log(a.slice(0,2))

// console.log(a.substring(1,2))

// console.log(a.substr(1,2))

// console.log(a.indexOf("1"))

// var b=12.3
// console.log(Math.ceil(b))


// console.log(Math.round(b))

// console.log(Math.random()*100)

// console.log(Math.max(2,5))

// console.log(Math.min(2,5))

// console.log(Math.ceil(Math.PI))




// var date=new Date()
// console.log(date);
// console.log(new Date().toLocaleString());
// console.log(date.getDate());
// console.log(date.getDay());

// var arr1=[4,9,7,2,5]

// var arr2=[3]

// console.log(arr1.concat(arr2));

// var bb=arr1.join(" ")
// console.log(typeof bb);

// console.log(arr1.reverse());

// console.log(arr1.slice(0,1));

// console.log(arr1.sort());

// var obj={a:1,b:2}

// console.log(obj["a"]);

// var arr=[]
// Object.keys(obj).forEach(element => {
//     arr.push(element)   
// });
// console.log(arr);    


// var a=[1,2,3,4,5]

// var a2=a.map(function (item,index) {
//     return {index:item} 
// })
// console.log(a2);

var obj={a:1,b:2}
// var aaa=obj.map(function(item){
//   return item.a
// })
// console.log(aaa);

// var bb=obj.filter(function (item) {
//     return item.a==1
// })
// console.log(bb);

Object.keys(obj).forEach(item => {
    console.log(obj[item])
});













