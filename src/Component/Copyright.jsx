import { Container } from "react-bootstrap";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcAmazonPay } from "react-icons/fa";


function Copyright() {
    return(
        <section>
            <div className="bottom py-2 text-light">
                <Container className="d-flex justify-content-between">
                    <div>
                        <p>Copyright © Your name</p>
                        <br />
                        <p>
                        Distributed by: 
                        <a href="/">Themewagon</a>
                        </p>
                    </div>
                    <div>
                        <span className="fa-lg p-1 bottom1"><FaCcVisa /></span>
                        <span className="fa-lg p-1 bottom1"><FaCcMastercard  /></span>
                        <span className="fa-lg p-1 bottom1"><FaCcPaypal  /></span>
                        <span className="fa-lg p-1 bottom1"><FaCcAmazonPay  /></span>
                    </div>
                </Container>
            </div>
        </section>
    )
}
export default Copyright;