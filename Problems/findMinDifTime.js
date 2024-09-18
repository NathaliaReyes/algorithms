/**
 * @param {string[]} timePoints
 * @return {number}
 */

/**
 * 
 * Given a list of 24-hour clock time points in "HH:MM" format, return the minimum minutes difference between 
 * any two time-points in the list.
Example 1:
Input: timePoints = ["23:59","00:00"] // these are strings
Output: 1
Example 2:
Input: timePoints = ["00:00","23:59","00:00"]
Output: 0
 */

const getHour = (hour) => { //hour is a string like: "23:11"
    let hourSeparated = hour.split(':');
    let resultHours = parseInt(hourSeparated[0])
    return resultHours;
}

const getMinutes = (hour) => { //min is a string like: "23:11"
    let hourSeparated = hour.split(':');
    let resultMinutes = parseInt(hourSeparated[1])
    return resultMinutes;
}

var findMinDifference = function(timePoints) {
    const findTheDifference = (time1, time2) => {
     
      let time1Hour = getHour(time1) // 12
      let time2Hour = getHour(time2) // 12
  
      let time1Minutes = getMinutes(time1) 
      let time2Minutes = getMinutes(time2)
      
      if(time1Hour == time2Hour){
        return Math.abs(time1Minutes - time2Minutes);
      } else {
        return Math.abs(time2Hour-time1Hour)*60 + Math.abs(time2Minutes-time1Minutes)
      }
    }
  
    var minDifference = 24*60;
    for (var i = 0; i < timePoints.length-1; i++) {
      for (var j = i+1; j < timePoints.length; j++) {
        let difference = findTheDifference(timePoints[i], timePoints[j]);
        if (difference < minDifference)
          minDifference = difference;
      }
    }
  
    return minDifference;
      
  };

  console.log(findMinDifference(['23:11', '23:10', '22:11','16:14','17:20']));

   // Same hour:
      //
      // time1 = "12:00"
      // time2 = "12:05"
      //
      // difference = 5
      //
      // Different hour:
      //
      // time1 = "12:00"
      // time2 = "13:05"
      //
      // difference = 65
      //
      // Second time is smaller than the first:
      //
      // time1 = "12:05"
      // time2 = "12:00"
      //
      // "Wrap around" case:
      //
      // time1 = "1:05"
      // time2 = "23:05"
      //
      //Need to finish the wrap case..
  