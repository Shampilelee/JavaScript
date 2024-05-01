
// DIGITAL CLOCK PROGRAM

function update_Clock(params) {
    
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);

    const time_String = `${hours}:${minutes}:${seconds}`;
    /*
        ! FOR NORMAL CLOCK(AM/PM), FOLLOW INSTRUCTIONS BELOW !
        !! FOLLOW IN THE SAME ORDER AS LISTED BELOW !!
        1. RENAME 'const hours' TO 'let hours'.
        2. CREATE [ const meridiem = hours >= 12 ? "PM" : "AM"; ].
        3. CONVERT MILITARY-TIME, TO NORMAL-TIME [ 'hours = hours % 12;'
            [ 13:00 % 12 ] hours WILL BE = '1:00'.
            [ 05:00 % 12 ] hours WILL BE = '5:00'.
            ! THIS IS WHY WE ADDED '|| 12;' !
            INCASE THE MILITARY TIME IS '00:00' OR '12:00', IT WILL BE SET AS NORMAL TIME TO = 12AM.
        ]
        4. TO START THE HOUR WITH '0' = '04:45 PM' CUT THE [.toString().padStart(2, 0);] FROM 'let hours', AND ADD IT TO 'hours' like-this [ hours = hours.toString().padStart(2, 0); ].
        5. IN 'const time_String' ADD '${meridiem}' AFTER '${seconds}'
        6. DONE.
    */

    document.getElementById("clock").textContent = time_String;
}

update_Clock();

/*
    TO GET THIS CLOCK TO UPDATE EVERY SECOND, 
    WE'LL FOLLOW THE 'update_Clock();' WITH THE 'setInterval();' FUNCTION,
    IT'S CALLS A FUNCTION REPEATEDLY, IN THIS CASE IT'S CALLS 'update_Clock();' IN EVERY ONE-SECOND = 'setInterval(update_Clock, 1000);'
*/
setInterval(update_Clock, 1000);





















