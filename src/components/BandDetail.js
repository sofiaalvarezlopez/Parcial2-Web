
import Card from 'react-bootstrap/Card';

function BandDetail(props) {
    return(
        <Card id={props.id}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
              <Card.Title>{props.name}</Card.Title>
              <Card.Text>
                {props.description}
              </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default BandDetail;