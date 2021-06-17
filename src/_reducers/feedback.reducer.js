import { feedbackConstants } from '../_constants';

export function feedbacks(state = {}, action) {
    switch (action.type) {
        case feedbackConstants.GETALL_REQUEST:
            return {
                loading: true
            };
        case feedbackConstants.GETALL_SUCCESS:
            return {
                items: action
            };
        case feedbackConstants.GETALL_FAILURE:
            return {
                error: action.error
            };

        case feedbackConstants.FEEDBACK_REQUEST:
            return {
                submitting: true
            };
        case feedbackConstants.FEEDBACK_SUCCESS:
            return {
                feedbacks: action.feedbacks
            };
        case feedbackConstants.FEEDBACK_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}