import { Container , Col , Row , NavLink } from "react-bootstrap"
import card1 from "../images/card1.jpg"
import card2 from "../images/card2.jpg"
import card3 from "../images/card3.jpg"
import card4 from "../images/card4.jpg"

export const Cards = () =>{
    return(
        <Container>
            <div className="cards-head">
       <Row>
                    <Col xs={3} md={2} xl={2}>
                        <h1 className="heading">Top Selling</h1>
                    </Col>
                    <Col xs={9} md={10} xl={10}>
                      <hr className="line"/>
                    </Col>
                </Row>
       </div>
       <Row className="align-items-center card-gap">

            <Col xs={12} md={6} xl={3}>
            <NavLink>
                 <div className="card-1">
                    <div className="card-div">
                   <img className="card-img" src={card1} alt="" />
                   </div>
                   <label className="card-title">Krunch Burger</label>
                   <p className="card-desc">Crunchy chicken fillet, spicy mayo, lettuce...</p>
                   <label className="price">RS 250</label> <button className="add-bucket">Add to bucket</button>
                </div> 
                
            </NavLink>
            </Col>

            <Col xs={12} md={6} xl={3}>
            <NavLink>
                <div className="card-1">
                <div className="card-div">
                   <img className="card-img" src={card2} alt="" />
                   </div>
                   <label className="card-title">Hot Wings</label>
                   <p className="card-desc">10 Pcs of our Signature Hot & Crispy Wings</p>
                   <label className="price">RS 250</label> <button className="add-bucket">Add to bucket</button>
                    </div> 
                </NavLink>
            </Col>

            
            <Col xs={12} md={6} xl={3}>
            <NavLink>
                <div className="card-1">
                <div className="card-div">
                   <img className="card-img" src={card3} alt="" />
                   </div>
                   <label className="card-title">Midnight Deal3</label>
                   <p className="card-desc">Mighty Zinger + regular drink</p>
                   <label className="price">RS 250</label> <button className="add-bucket">Add to bucket</button>
                    </div> 
                    </NavLink>
            </Col>
            <Col xs={12} md={6} xl={3}>
            <NavLink>
                <div className="card-1">
                <div className="card-div">
                   <img className="card-img" src={card4} alt="" />
                   </div>
                   <label className="card-title">Full Meal</label>
                   <p className="card-desc">Krunch + 1 regular Fries + 1 regular Drink</p>
                   <label className="price">RS 250</label> <button className="add-bucket">Add to bucket</button>
                    </div> 
                    </NavLink>
            </Col>    
        </Row>
        </Container>

    )
}