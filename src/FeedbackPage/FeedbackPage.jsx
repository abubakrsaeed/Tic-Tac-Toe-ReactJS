import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { feedbackActions } from '../_actions';
import '../LoginPage/Login.css';
import Header from '../_components/HeaderComponent';


function FeedbackPage() {
    let cached = JSON.parse(localStorage.getItem('user'));
    const [feedback, setFeedback] = useState({
        firstName: cached.firstName,
        lastName: cached.lastName,
        username: cached.username,
        feedback: '',
        dated: null
    });
    const [submitted, setSubmitted] = useState(false);
    const submitting = useSelector(state => state.feedbacks.submitting);
    const dispatch = useDispatch();

    function handleChange(e) {
        const { name, value } = e.target;
        setFeedback(feedback => ({ ...feedback, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (feedback.firstName && feedback.lastName && feedback.username && feedback.feedback) {
            dispatch(feedbackActions.submit(feedback));
        }
    }

    return (
        <>
        <Header />
        <div className="body">
            <div className="box col-lg-8 offset-lg-2">
                <h2 className="text-center">Your Feedback</h2>
                <form name="form" onSubmit={handleSubmit}>
                    {/* <div className="form-group">
                        <label>First Name</label>
                        <input type="text" name="firstName" value={feedback.firstName} onChange={handleChange} className={'form-control' + (submitted && !feedback.firstName ? ' is-invalid' : '')} />
                        {submitted && !feedback.firstName &&
                            <div className="invalid-feedback">First Name is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" name="lastName" value={feedback.lastName} onChange={handleChange} className={'form-control' + (submitted && !feedback.lastName ? ' is-invalid' : '')} />
                        {submitted && !feedback.lastName &&
                            <div className="invalid-feedback">Last Name is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" name="username" value={feedback.username} onChange={handleChange} className={'form-control' + (submitted && !feedback.username ? ' is-invalid' : '')} />
                        {submitted && !feedback.username &&
                            <div className="invalid-feedback">Username is required</div>
                        }
                    </div> */}
                    <div className="form-group">
                        {/* <label>Feedback</label> */}
                        <textarea name="feedback" value={feedback.feedback} onChange={handleChange} className={'form-control' + (submitted && !feedback.feedback ? ' is-invalid' : '')}></textarea>
                        {submitted && !feedback.feedback &&
                            <div className="invalid-feedback">Feedback is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">
                            {submitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                            Submit
                        </button>
                        <Link to="/home" className="btn btn-link">Cancel</Link>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}

export { FeedbackPage };