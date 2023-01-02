
import { Row,Col, Container} from "react-bootstrap";
import ProfileSection from "../components/ProfileSection";
import "./Account.css"
export default function Account(){
  

    return(
        <Container id="account">

            <Row >
                <ProfileSection/>
            </Row>
           
        </Container>
    )

}