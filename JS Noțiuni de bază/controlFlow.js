
//for loops

const people = ["Andrei", "Bogdan", "Ion", "Anton"]

for(i=people.length - 1; i >= 0; i--) {
    console.log(people[i])
    if(people[i] === "Andrei") {
        people.push("Elena") 
    }
}

let number = 1;

while(number <= 10) {
    /* console.log(number); */
    number++
}


do{
    console.log
} while(number <= 10)
