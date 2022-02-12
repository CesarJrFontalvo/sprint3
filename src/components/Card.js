import React from 'react';

import { Card, Container } from 'react-bootstrap';

const Cardd = () => {
  return (
            <Container className=" d-flex">
<li>
<ul>

<Card className=" col-md-4">
                <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BMjk3ODhmNjgtZjllOC00ZWZjLTkwYzQtNzc1Y2ZhMjY2ODE0XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg" />
                <Card.Body>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
                </Card.Body>
            </Card>
</ul>

</li>

            </Container>
      
        );
};

export default Cardd;
