import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Recipes() {
  return (
    <CardGroup className="CardGroup">
     <Card className="Card">
      <Card.Img variant="top" src="https://www.saltandlavender.com/wp-content/uploads/2019/03/creamy-mushroom-chicken-1-768x1088.jpg" alt="creamy mushroom by salt&Lavender" height="200px" />
      <Card.Body>
        <Card.Title>Chicken in cream of mushrooms</Card.Title>
        <Card.Text>
         full recipe here!
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
    <Card className="Card">
      <Card.Img variant="top" src="https://georgeats.com/wp-content/uploads/2022/10/Green-Protein-Pasta-6-1024x1536.jpg" alt="green spaghetti by George Eats" height="200px"/>
      <Card.Body>
        <Card.Title>Green Spaghetti</Card.Title>
        <Card.Text>
         full recipe here!
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
    <Card className="Card">
      <Card.Img variant="top" src="https://carameltintedlife.com/wp-content/uploads/2021/11/air-fryer-orange-chicken-1-4.jpg" alt="orange chicken by caramel tinted life" height="200px" />
      <Card.Body>
        <Card.Title>Orange chicken</Card.Title>
        <Card.Text>
         Full recipe here!
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
    <Card className="Card">
      <Card.Img variant="top" src="https://gypsyplate.com/wp-content/uploads/2022/07/birria-tacos_05-768x1152.jpg" alt="tacos by gipsyplate" height="200px" />
      <Card.Body>
        <Card.Title>Birria Tacos</Card.Title>
        <Card.Text>
         Full recipe here!
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
    </CardGroup>
);
}



export default Recipes;