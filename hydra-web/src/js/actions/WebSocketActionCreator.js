const Dispatcher = require('fluxthis/src/dispatcherInstance');
const requirejs = require('requirejs');

const app = requirejs('app');

const events = [
    'host.update',
    'job.update',
    'job.delete',
    'task.queue.size'
];

events.forEach((type) =>
    app.server.on(type, (payload) =>
        Dispatcher.dispatch({type, payload})));

module.exports = events;
