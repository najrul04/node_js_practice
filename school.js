const EventEmitter = require('events');

class School extends EventEmitter {
    startPeriod() {
        console.log('Class Started');

        // Raise Event when bell rings
        setTimeout(() => {
            this.emit('bellRinging', {
                period: 'first',
                text: 'period Ended',
            });
        }, 2000);
    }
}

module.exports = School;
// Raise an Event

// emitter.emit('bellRinging');
