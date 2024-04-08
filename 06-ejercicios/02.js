function createUser(name){
    return {
        id:Math.random(),
        name: name,
    }
}

let user = createUser('Felipe');
let user2 = createUser('Chanchito');
console.log(user,user2);