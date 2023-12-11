function shout(string) {
    return string.toUpperCase();
}
function whisper(string){
    return string.toLowerCase();
}

function logShout(string){
    const spy = "Hello";

console.log(spy);
console.log(spy.toUpperCase());

console.log(spy === spy.toUpperCase());
}

function logWhisper(string){
    const spy = "Hello";

console.log(spy);
console.log(spy.toLowerCase());

console.log(spy === spy.toLowerCase());
}

 function sayHiToHeadphonedRoommate(string){


    // const hello = ("I can't hear you!");
    // console.log(hello);
    // console.log(hello.toLowerCase());
    // console.log(hello === hello.toLowerCase());
    // return (hello);

    if (string === string.toLowerCase()){
        return ("I can't hear you!")
    }
    if (string === string.toUpperCase()){
        return ("YES INDEED!")
    }
    if (string === ("Let's have dinner together!")){
        return ("I would love to!")
    }
 }

sayHiToHeadphonedRoommate("hello")
console.log (sayHiToHeadphonedRoommate("Let's have dinner together!"))