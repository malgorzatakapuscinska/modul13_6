var os = require('os');
var colors = require('colors');


// os.uptime() method returns the system uptime in number of seconds. On Windows the returned value includes fractions of a second.

function getUptime(){
	var uptime = os.uptime();
	var uptimeRounded = Math.round(uptime);
	var uptimeMinutes = Math.floor(uptimeRounded/60);
	var uptimeSeconds = uptimeRounded-(uptimeMinutes*60);
	console.log('Uptime: '.green +  uptimeMinutes + " min " + uptimeSeconds + " sec");
}

exports.getUptime = getUptime;