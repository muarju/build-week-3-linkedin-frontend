import {Card} from "react-bootstrap";
import faker from "faker";


const MeActivity = (props) => {
  return (
    <>
        <div className="card mb-3 activity mt-2">
            <div className="row no-gutters">
                <div className="col-md-2">
                <Card.Img
                    className="activity-image"
                    variant="top"
                    src={props.randomimage}
                />
                </div>
                <div className="col-md-10">
                <div className="card-body">
                    <h5 className="activity-body-header">
                    {faker.random.words()}
                    </h5>
                    <p className="card-text">Elon Musk shared this </p>
                    <p className="card-text">
                    <small className="text-muted pr-1">3 React</small>
                    <small className="text-muted">1 Comment</small>
                    </p>
                </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default MeActivity;
