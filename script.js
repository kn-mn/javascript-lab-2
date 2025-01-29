for (let number = -1; number <= 1; number++)
if (number > 0) {
    console.log('number is larger than zero');
} else if (number < 0) {
    console.log('number is smaller than zero');
} else {
    console.log('number is zero');
}


let day = '7';
switch (day) {
    case '1':
        console.log("it's Monday");
        break;
    case '2':
        console.log("it's Tuesday");
        break;
    case '3':
        console.log("it's Wednesday");
        break;
    case '4':
        console.log("it's Thursday");
        break;
    case '5':
        console.log("it's Friday");
        break;
    case '6':
        console.log("it's Saturday");
        break;
    case '7':
        console.log("it's Sunday");
        break;
}


for (let i = 0; i <= 5; i++) {
    console.log(i)
}


let i = 0;
while (i <= 5) { 
    console.log(i);
    i++;
}


let j = 0; 
do {
    console.log(j);
    j++;
} while (j <= 5);


for (let i = 0; i<=5; i++) {
if (i === 3) 
    break;
    console.log(i);
}


for (let i = 0; i <= 5; i++) {
    if (i === 3) 
        continue;
    console.log(i);
}


let globalVar = "I'm global!";
function scopeExample() {
    let localVar = "I'm local!";
  console.log(globalVar);
  console.log(localVar);
}

scopeExample(); {
    console.log(globalVar);
    console.log(localVar); // this is not defined outside the function
}