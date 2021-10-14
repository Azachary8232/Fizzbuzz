

/*
create a For Loop that runs from 1 to 100
create an if statement that pulls out numbers that are multiples of 3 or 5 <-- first and second ifElse statement
create statement that pulls out multiples of 3 and 5  <-- first if statement
print all other numbers <--else statement
*/

for( var i = 1; i <101; i++){
    
    if( i % 3 ==0 && i % 5 == 0){
        console.log("Fizzbuzz");
    }
    
    else if( i % 3 == 0){
        console.log("Fizz");
    }

    else if( i % 5 == 0){
        console.log("Buzz");
    }

    else {
        console.log(i);
    }
}
