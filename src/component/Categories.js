import { Container , Row , Col, NavLink } from "react-bootstrap"
import cateimg1 from "../images/everyday value.jpg"
import cateimg2 from "../images/ala cart.png"
import cateimg3 from "../images/sharing.jpg"
import cateimg4 from "../images/beverage.png"
import cateimg5 from "../images/signature boxes.jpg"
import cateimg6 from "../images/snaks bev.jpg"


export const Categories = ()=>{
    return(
    <section className="categ">
            <Container>
       <div className="categ-head">
       <Row>
                    <Col xs={4} md={4} xl={3}>
                        <h1 className="heading">Browse Categories</h1>
                    </Col>
                    <Col xs={8} md={8} xl={9}>
                      <hr className="line"/>
                    </Col>
                </Row>
       </div>
        <Row className="align-items-center">
            <Col xs={6} md={4} xl={2}>
            <NavLink> <img src={cateimg1} alt="" /></NavLink>
            </Col>
            <Col xs={6} md={4} xl={2}>
            <NavLink> <img src={cateimg2} alt="" /></NavLink>
            </Col>
            <Col xs={6} md={4} xl={2}>
            <NavLink> <img src={cateimg3} alt="" /></NavLink>
            </Col>
            <Col xs={6} md={4} xl={2}>
            <NavLink><img src={cateimg4} alt="" /></NavLink>
            </Col>
            <Col xs={6} md={4} xl={2}>
            <NavLink><img src={cateimg5} alt="" /></NavLink>
            </Col>
            <Col xs={6} md={4} xl={2}>
            <NavLink> <img src={cateimg6} alt="" /></NavLink>
            </Col>
            
        </Row>
    </Container>
    </section>
    )
}