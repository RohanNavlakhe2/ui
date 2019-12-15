let date;
let i=0;
let currentPositionOfMinute;
let currentPositionOfHourHand;
let minutes;
let updatingTime=()=> {
    date = new Date().toLocaleTimeString();
    $('#a1').text(date.split(':')[0]);
    $('#a2').text(date.split(':')[1]);
    $('#a3').text(date.split(':')[2].split(" ")[0]);
    $('#a4').text(date.split(':')[2].split(" ")[1]);
};

let moveSecond=()=>{
   let currentPositionOfSecond=Number.parseInt($('#a3').text().split(" ")[0])*6+90;
   $('#second').css(
       "transform",`rotate(${currentPositionOfSecond}deg)`
   );
  /* if for not repeating the display block
  **/
   if(i===0) {
       $('#second').css(
           "display", "block"
       );
       i=1;
   }
};

let moveMinute=()=>{
    minutes=Number.parseInt($('#a2').text());
    currentPositionOfMinute=minutes*6+90;

    $('#minute').css(
        "transform",`rotate(${currentPositionOfMinute}deg)`
    );

};

let initialPositionOfHourHand=()=>{
     currentPositionOfHourHand=Number.parseInt($('#a1').text())*30+90;

    $('#hour').css(
        'transform',`rotate(${currentPositionOfHourHand}deg)`
    );
};

let movingHourHandBasedOnMinutes=()=>{
    $('#hour').css(
        'transform',`rotate(${minutes*0.5+
        currentPositionOfHourHand}deg)`
    );
};

/*Calling this funtion after every 1 second to update the time each second*/
setInterval(updatingTime,1000);

/*Calling this funtion after every 1 second to move the second hand every second*/
setInterval(moveSecond,1000);

/*Calling this function to move the minute hand. We can call this function after
* every 1 minute /60 sec/ 60000 milisec but for time accuracy purpose im caling it
* after every 1 second*/
setInterval(moveMinute,1000);


/* Here Im using setTimeout() for 1 second because here I want to get the current hour
 from article a1 and we are putting value in that a1 using setInterval() function which
 we are calling after every 1 second.*/
setTimeout(initialPositionOfHourHand,1000);

/*Calling this function to move the hour hand based on current minutes.
  We can call this function after
* every 1 minute/60 sec/60000 milisec but for time accuracy purpose im caling it
* after every 1 second*/
setInterval(movingHourHandBasedOnMinutes,1000);


