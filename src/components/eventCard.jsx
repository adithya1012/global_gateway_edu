import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function EventCard() {
  return (
    <Card style={{ width: "18rem", border: "solid" }}>
      <Card.Img
        variant="top"
        src="../images/event-1.jpg"
        style={{ width: "inherit" }}
      />
      <Card.Body style={{ border: "solid" }}>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default EventCard;
