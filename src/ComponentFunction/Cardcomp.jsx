import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Card.css"

function Cardcomp(props) {
  return (
    <div className='ree'>
    <Card >
      {/* <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJLc4ZwM_aZLiRfbYEwJPsCy4QM_mI7a5z6w&usqp=CAU" /> */}
      <img src={props.image} ></img>
      
      <Card.Body>
        <Card.Title>{props.tit}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        
      </Card.Body>
    
    </Card>
    </div>
  );
}

export default Cardcomp;