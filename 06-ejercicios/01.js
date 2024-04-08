function Usuario(name){
    this.id = Math.random();
    this.name = name;
}

let user = new Usuario('Nicolas');
let user2 = new Usuario('Daniel');
console.log(user,user2);