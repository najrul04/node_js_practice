const EventEmitter = require('events');

const emitter = new EventEmitter();

function startPeriod() {
    console.log('Class Started');

    // Raise Event when bell rings
    setTimeout(() => {
        emitter.emit('bellRinging', {
            period: 'first',
            text: 'period Ended',
        });
    }, 2000);
}

module.exports = startPeriod;
// Raise an Event

// emitter.emit('bellRinging');
