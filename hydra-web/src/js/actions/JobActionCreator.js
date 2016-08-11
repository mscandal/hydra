const APIActionCreator = require('fluxthis').APIActionCreator;
const constants = require('./../constants');

module.exports = new APIActionCreator({
    displayName: 'JobActionCreator',
    getHistory: {
        route: '/job/history',
        method: 'GET',
        success: constants.JOB_HISTORY_SUCCESS,
        failure: constants.JOB_HISTORY_FAILURE,
        createRequest(id) {
            return {
                params: {id}
            };
        }
    },
    rebalance: {
        route: '/job/rebalance',
        method: 'GET',
        success: constants.JOB_REBALANCE_SUCCESS,
        failure: constants.JOB_REBALANCE_FAILURE,
        createRequest(id) {
            return {
                params: {id}
            };
        }
    },
    expand: {
        route: '/job/expand',
        method: 'GET',
        success: constants.JOB_EXPAND_SUCCESS,
        failure: constants.JOB_EXPAND_FAILURE,
        createRequest(id) {
            return {
                params: {id}
            };
        }
    },
    delete: {
        route: '/job/delete',
        method: 'GET',
        success: constants.JOB_DELETE_SUCCESS,
        failure: constants.JOB_DELETE_FAILURE,
        createRequest(id) {
            return {
                params: {id}
            };
        }
    },
    validate: {
        route: '/job/validate',
        method: 'GET',
        success: constants.JOB_VALIDATE_SUCCESS,
        failure: constants.JOB_VALIDATE_FAILURE,
        createRequest(id) {
            return {
                params: {id}
            };
        }
    },
    start: {
        route: '/job/start',
        method: 'GET',
        success: constants.JOB_START_SUCCESS,
        failure: constants.JOB_START_FAILURE,
        createRequest(id, task = -1) {
            return {
                params: {id, task}
            };
        }
    },
    stop: {
        route: '/job/stop',
        method: 'GET',
        success: constants.JOB_STOP_SUCCESS,
        failure: constants.JOB_STOP_FAILURE,
        createRequest(id, task = -1) {
            return {
                params: {id, task}
            };
        }
    },
    getList: {
        route: '/job/list',
        method: 'GET',
        success: constants.JOB_LIST_SUCCESS,
        failure: constants.JOB_LIST_FAILURE
    },
    getJob: {
        route: '/job/get',
        method: 'GET',
        success: constants.JOB_GET_SUCCESS,
        failure: constants.JOB_GET_FAILURE,
        createRequest(id) {
            return {
                params: {id}
            };
        }
    },
    enable: {
        route: '/job/enable',
        method: 'GET',
        success: constants.JOB_ENABLE_SUCCESS,
        failure: constants.JOB_ENABLE_FAILURE,
        createRequest(ids, enable) {
            return {
                params: {
                    jobs: ids.join(',')
                    enable: enable ? 1 : 0
                }
            };
        }
    }
});
