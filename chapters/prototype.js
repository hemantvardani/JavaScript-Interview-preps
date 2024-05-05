
const a={
    name:"hemant",
    surname:"vardani",
    nestedObj:{
            name: "vardani",
            nestedObj:{
                    name: "kumar",
                    getName: function (){
                            console.log("name is", this.name)
                    }
            }
    }
}

const b=[2,3,56,7]
console.log(a)
console.log(a.__proto__.__proto__)
console.log(Array.prototype)
console.log(Object.prototype===b.__proto__.__proto__)
console.log(a)
console.log(a.__proto__)
console.log(Object.prototype)
console.log(a.__proto__===Object.prototype)

Array.prototype.mymethod=()=>{
    console.log('hello g')
}


b.mymethod=function(){
    console.log("not hello ")
}

b.mymethod()

console.log(b)


class Person {
    Fname="hemant"
}
Person.prototype.getName=()=>{
    console.log("jflsjflsfljsl")
}
const obj= new Person();
obj.getName()
