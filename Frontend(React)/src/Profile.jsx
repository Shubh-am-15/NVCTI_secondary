import Header from './Header';
import Fade from "react-reveal/Fade";
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
function Profile() {
    return (
        <Fade>
            {/* <Header /> */}
            <Container className="m-3" />
            <Container className="m-5 heading">
                <Row>
                    <Col>Profile Page</Col>
                </Row>
            </Container>

        </Fade>
    );
}

export default Profile;