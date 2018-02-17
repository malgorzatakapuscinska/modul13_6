
var EventEmitter = require('events').EventEmitter; // bo potrzebujemy tylko klasy EventEmitter
var OSinfo = require('./modules/OSinfo');
var time = require('./modules/time');
var emitter = new EventEmitter();


emitter.on('beforeCommand', function(instruction){
	console.log('You wrote: ' + instruction + ' trying run command ..')
});

emitter.on('afterCommand', function(){
	console.log('Finished command');
});

process.stdin.setEncoding('utf-8');
console.log('Wpisz komendę: ');
console.log('/sysOSinfo - system info, /system-language, /exit - end app, node-version');

process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if(input !== null) {
        var instruction = input.trim();
        emitter.emit('beforeCommand', instruction);

        switch(instruction) {
        	case 'node-version':
        		console.log('Node version is: ' + process.versions.node);
        		break;
        	case '/system-language':
        		process.stdout.write('System language is ' + process.env.lang);
        		break;
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/sysOSinfo':
            	OSinfo.print();
            	time.getUptime();
            	break;
            default:
                process.stderr.write('Wrong instruction!\n');
        };
        emitter.emit('afterCommand');

    }
});


