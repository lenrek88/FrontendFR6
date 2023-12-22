const startTime = Date.now();
const finishTime = Date.now();

console.log(finishTime-startTime);


function Logger() {

    this.result = 0;

    this.start = function() {
        this.result = Date.now();
    }
    
    this.end = function () {
        this.result = Date.now() - this.result;
    }

}

const logger = new Logger();

logger.start();
logger.end();

console.log(logger.result);