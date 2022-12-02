
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import BandDetail from './BandDetail';
import {FormattedMessage} from 'react-intl';
const { useEffect, useState } = require("react");


function oldestBand(bands) {
    var currentYear = 2022;
    var nameOldestBand = "";
    var greatestDifference = 0;

    bands.forEach(band => {
        if (currentYear - band.foundation_year > greatestDifference) {
            greatestDifference = currentYear - band.foundation_year;
            nameOldestBand = band.name;
        }
    });
    return [nameOldestBand, greatestDifference];
  }


function Bands() {
    const [bands, setBands] = useState([]);
    const [currentBand, setCurrentBand] = useState([]);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        const URL =
          "https://gist.githubusercontent.com/josejbocanegra/806a4dcd1af61b4cc498d24c52e84320/raw/8711b7af9091d2831ed043563cad2a61311b0a5f/music-bands.json";
        fetch(URL)
          .then((data) => data.json())
          .then((data) => {
              setBands(data);
          });
      }, []);

      const onClickName = (index) => {
        if (!clicked) {
            setClicked(true);
        }
        setCurrentBand(bands[index-1]);
        console.log("clicked");
    };

    const detailVisibility = () => {
        return clicked ? "visible" : "hidden";
    };


      var values = oldestBand(bands);
      var nameOldestBand = values[0];
      var greatestDifference = values[1];

      function GetTable() {
        return (
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>#</th>
                        <th><FormattedMessage id="name"/></th>
                        <th><FormattedMessage id="country"/></th>
                        <th><FormattedMessage id="genre"/></th>
                        <th><FormattedMessage id="foundation"/></th>
                    </tr>
                </thead>
                <tbody>
                    {bands.map((band) => (
                        <tr key={band.id}>
                            <td>{band.id}</td>
                            {/*eslint-disable-next-line*/}
                            <td><a href="#" onClick={() => onClickName(band.id)}>{band.name}</a></td>
                            <td>{band.country}</td>
                            <td>{band.genre}</td>
                            <td>{band.foundation_year}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        );}

      return(
        <div>
        <Row style={{backgroundColor: "#A6C8CD"}}>
            <Col md={1} style={{marginTop: "1%", marginBottom: "1%"}}>
                <img src="notes.png" alt="decorative" style={{maxHeight: "3vw", width: "auto"}}></img>
            </Col>
            <Col>
                <h1 style={{marginTop: "1%"}}><FormattedMessage id="title"/></h1>
            </Col>
            </Row>
        <Container style={{marginTop: "4vw"}}>
            <Row>
            <Col md={8}>
         <GetTable/>
         <Row>
         <p style={{textAlign: "left"}}><FormattedMessage id="oldestBand" 
         values={{ nameOldestBand: nameOldestBand, greatestDifference: greatestDifference }}/></p>
        </Row>
         </Col>
         <Col md={4} style={{ visibility: detailVisibility(), alignItems: "right" }} >
                <BandDetail id={currentBand.id} image={currentBand.image} name={currentBand.name} description={currentBand.description} />
            </Col>
            </Row>
        
      </Container>
      </div>
      );
}

export default Bands;