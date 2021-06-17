import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions, feedbackActions } from '../_actions';
import Header from '../_components/HeaderComponent';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import './HomePage.css';

function HomePage() {
    const users = useSelector(state => state.users);
    const feedbacks = useSelector(state => state.feedbacks);
    console.log("sadf", feedbacks, users);
    const user = useSelector(state => state.authentication.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getAll());
        dispatch(feedbackActions.get());
    }, []);

    function handleDeleteUser(id) {
        dispatch(userActions.delete(id));
    }

    return (
        <>
            <Header></Header>
            <div className="col-lg-8 offset-lg-2">
                <div className="white-box">
                    <h1>Hi {user.firstName}!</h1>
                    <p>You're logged in.</p>
                    <h3>All registered users:</h3>
                    {users.loading && <em>Loading data...</em>}
                    {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                    {users.items &&
                        <ul>
                            {users.items.map((u, index) =>
                                <li key={u.id}>
                                    {u.firstName + ' ' + u.lastName}
                                    {
                                        u.deleting ? <em> - Deleting...</em>
                                            : u.deleteError ? <span className="text-danger"> - ERROR: {u.deleteError}</span>
                                                : <span>
                                                    {user.username == u.username &&
                                                        <a onClick={() => handleDeleteUser(u.id)} className="text-danger">-&nbsp; Delete</a>
                                                    }
                                                    </span>
                                    }
                                </li>
                            )}
                        </ul>
                    }


                    <hr />
                    <h3>Feedbacks: </h3>
                </div>
                {(feedbacks.items && feedbacks.items.feedbacks) &&
                    <>
                        <ul>
                            {feedbacks.items.feedbacks.reverse().map((feedback, index) =>
                                <>
                                    <Card key={feedback.id}>
                                        <CardBody>
                                            <CardTitle tag="h5">{feedback.firstName + ' ' + feedback.lastName}</CardTitle>
                                            <CardText>{feedback.feedback}</CardText>
                                            {feedback.dated &&
                                                <CardText>
                                                    <small className="text-muted">{new Date(feedback.dated).toLocaleString()}</small>
                                                </CardText>
                                            }
                                        </CardBody>
                                    </Card>
                                    <br />
                                </>
                            )}
                        </ul>
                    </>
                }
            </div>
        </>
    );
}

export { HomePage };