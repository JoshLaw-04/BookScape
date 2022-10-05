import { useContext, useState } from "react";
import { Card, Col, Container, Row } from 'react-bootstrap';
import "./Home.css";
import BookContext from "../contexts/BookContext";

function BookList() {

  let { searchResults } = useContext(BookContext);
  let [bookItem, setBookItem] = useState();

  return (

    <>
            {
              searchResults.map((item) => {
                    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let amount=item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                    if(thumbnail!== undefined && amount !==undefined)
                    {
                        return (
                            <>
                            <div className="card" onClick={() =>{setBookItem(item)}}>
                                <img src={thumbnail} alt="" />
                                <div className="bottom">
                                    <h3 className="title">{item.volumeInfo.title}</h3>
                                    <p className="amount">${amount}</p>
                                </div>
                            </div>
                            </>
                        )
                    }
                    
                })
            }

        </>


  )

}






// function BookList() {

//     return (
//         <div id="CardsCol">
      
//         <Container>
//             <Row>

//                 <Col>
//                     <Card id="CardBorder" style={{ width: '245px' }}>
//                         <Card.Img variant="top" src="holder.js/30px30?text=Image cap" />
//                         <Card.Body>
//                             <Card.Title>Title</Card.Title>
//                             <Card.Text>
//                                 Author
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </Col>
    
//                 <Col>
//                     <Card id="CardBorder" style={{ width: '245px' }}>
//                         <Card.Img variant="top" src="holder.js/30px30?text=Image cap" />
//                         <Card.Body>
//                             <Card.Title>Title</Card.Title>
//                             <Card.Text>
//                                 Author
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </Col>

//                 <Col>
//                     <Card id="CardBorder" style={{ width: '245px' }}>
//                         <Card.Img variant="top" src="holder.js/30px30?text=Image cap" />
//                         <Card.Body>
//                             <Card.Title>Title</Card.Title>
//                                 <Card.Text>
//                                     Author
//                                 </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </Col>
    
//             </Row>
//             <br></br>
//             <Row>

//                 <Col>
//                     <Card id="CardBorder" style={{ width: '245px' }}>
//                         <Card.Img variant="top" src="holder.js/30px30?text=Image cap" />
//                         <Card.Body>
//                             <Card.Title>Title</Card.Title>
//                             <Card.Text>
//                                 Author
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </Col>
    
//                 <Col>
//                     <Card id="CardBorder" style={{ width: '245px' }}>
//                         <Card.Img variant="top" src="holder.js/30px30?text=Image cap" />
//                         <Card.Body>
//                             <Card.Title>Title</Card.Title>
//                             <Card.Text>
//                                 Author
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </Col>

//                 <Col>
//                     <Card id="CardBorder" style={{ width: '245px' }}>
//                         <Card.Img variant="top" src="holder.js/30px30?text=Image cap" />
//                         <Card.Body>
//                             <Card.Title>Title</Card.Title>
//                             <Card.Text>
//                                 Author
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </Col>
    
//             </Row>
//             <br></br>
//             <Row>
//                 <Col>
//                     <Card id="CardBorder" style={{ width: '245px' }}>
//                         <Card.Img variant="top" src="holder.js/30px30?text=Image cap" />
//                         <Card.Body>
//                             <Card.Title>Title</Card.Title>
//                             <Card.Text>
//                                 Author
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </Col>
    
//                 <Col>
//                     <Card id="CardBorder" style={{ width: '245px' }}>
//                         <Card.Img variant="top" src="holder.js/30px30?text=Image cap" />
//                         <Card.Body>
//                             <Card.Title>Title</Card.Title>
//                             <Card.Text>
//                                 Author
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </Col>

//                 <Col>
//                     <Card id="CardBorder" style={{ width: '245px' }}>
//                         <Card.Img variant="top" src="holder.js/30px30?text=Image cap" />
//                         <Card.Body>
//                             <Card.Title>Title</Card.Title>
//                             <Card.Text>
//                                 Author
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </Col>
    
//             </Row>
            
//         </Container>
  
//         </div>
//     )

  
// }


export default BookList;