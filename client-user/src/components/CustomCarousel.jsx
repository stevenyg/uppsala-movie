import Carousel from 'react-bootstrap/Carousel'

export default function CustomNavbar() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://thumb.viva.co.id/media/frontend/thumbs3/2022/03/28/6241426f7aa32-coda-menang-best-picture-film-terbaik-oscar-2022_1265_711.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://thumb.viva.co.id/media/frontend/thumbs3/2022/03/28/6241426f7aa32-coda-menang-best-picture-film-terbaik-oscar-2022_1265_711.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://thumb.viva.co.id/media/frontend/thumbs3/2022/03/28/6241426f7aa32-coda-menang-best-picture-film-terbaik-oscar-2022_1265_711.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )

}
