const FluxThis = require('fluxthis');
const ImmutableStore = FluxThis.ImmutableStore;
const Immutable = ImmutableStore.Immutable;

const constants = require('./../constants');

module.exports = new ImmutableStore({
    displayName: 'JobStore',
    init() {
        this.jobs = Immutable.Map({});
        this.bindActions(
            constants.JOB_HISTORY_SUCCESS, this.historySuccess,
            constants.JOB_HISTORY_FAILURE, this.historyFailure,
            constants.JOB_REBALANCE_SUCCESS, this.rebalanceSuccess,
            constants.JOB_REBALANCE_FAILURE, this.rebalanceFailure,
            constants.JOB_EXPAND_SUCCESS, this.expandSuccess,
            constants.JOB_EXPAND_FAILURE, this.expandFailure,
            constants.JOB_DELETE_SUCCESS, this.deleteSuccess,
            constants.JOB_DELETE_FAILURE, this.deleteFailure,
            constants.JOB_VALIDATE_SUCCESS, this.validateSuccess,
            constants.JOB_VALIDATE_FAILURE, this.validateFailure,
            constants.JOB_START_SUCCESS, this.startSuccess,
            constants.JOB_START_FAILURE, this.startFailure,
            constants.JOB_STOP_SUCCESS, this.stopSuccess,
            constants.JOB_STOP_FAILURE, this.stopFailure,
            constants.JOB_LIST_SUCCESS, this.listSuccess,
            constants.JOB_LIST_FAILURE, this.listFailure,
            constants.JOB_ENABLE_SUCCESS, this.enableSuccess,
            constants.JOB_ENABLE_FAILURE, this.enableFailure,
            constants.JOB_GET_SUCCESS, this.getSuccess,
            constants.JOB_GET_FAILURE, this.getFailure
        );
    },
    private: {
        historySuccess({request, response}) {

        },
        historyFailure({request, response}) {

        },
        rebalanceSuccess({request, response}) {

        },
        rebalanceFailure({request, response}) {

        },
        expandSuccess({request, response}) {

        },
        expandFailure({request, response}) {

        },
        deleteSuccess({request, response}) {
            this.jobs = this.jobs.delete(request.params.id);
        },
        deleteFailure({request, response}) {

        },
        validateSuccess({request, response}) {
            if (reponse.body.result === 'valid') {
            }
        },
        validateFailure({request, response}) {

        },
        startSuccess({request, response}) {
            const body = response.body;
            // body.success;
            // body.unauthorized;
            // body.error;
        },
        startFailure({request, response}) {

        },
        stopSuccess({request, response}) {
            const body = response.body;
            // body.success;
            // body.unauthorized;
            // body.error;
        },
        stopFailure({request, response}) {

        },
        listSuccess({request, response}) {
            const jobs = {};
            response.body.forEach(job => jobs[job.id] = job);
            this.jobs = Immutable.fromJS(jobs);
        },
        listFailure({request, response}) {

        },
        enableSuccess({request, response}) {
            const {id} = request.params;
            this.jobs = this.jobs.setIn([id, 'disabled'], !request.params.enable);
        },
        enableFailure({request, response}) {

        },
        getSuccess({request, response}) {
            const {id} = request.params;
            const job = Immutable
                .fromJS(response.body);

            this.jobs = this.jobs.set(id, job);
        },
        getFailure({request, response}) {

        }
    },
    // Getters
    public: {
        getJobs() {
            return this.jobs;
        }
    }
});
