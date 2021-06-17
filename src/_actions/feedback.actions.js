import { feedbackConstants } from '../_constants';
import { feedbackService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const feedbackActions = {
    submit,
    get
};

function submit(feedback) {
    return dispatch => {
        dispatch(request({ username: feedback.username }));

        feedbackService.submit(feedback)
            .then(
                feedback => { 
                    dispatch(success(feedback));
                    history.push("/");
                    dispatch(alertActions.success('Feedback submitted'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(feedback) { return { type: feedbackConstants.FEEDBACK_REQUEST, feedback } }
    function success(feedback) { return { type: feedbackConstants.FEEDBACK_SUCCESS, feedback } }
    function failure(error) { return { type: feedbackConstants.FEEDBACK_FAILURE, error } }
}

function get() {
    return dispatch => {
        dispatch(request());

        feedbackService.get()
            .then(
                feedbacks => dispatch(success(feedbacks)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: feedbackConstants.GETALL_REQUEST } }
    function success(feedbacks) { return { type: feedbackConstants.GETALL_SUCCESS, feedbacks } }
    function failure(error) { return { type: feedbackConstants.GETALL_FAILURE, error } }
}
