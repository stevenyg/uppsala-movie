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
                    <h3>Oscar 2022</h3>
                    {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://akcdn.detik.net.id/community/media/visual/2022/03/29/momen-bersejarah-di-oscar-2022.jpeg?w=700&q=90"
                    alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Oscar 2022</h3>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://livetstrad.com/wp-content/uploads/2021/07/GettyImages-645739336copy-5a944cac8e1b6e003764236a.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-1"
                    alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Oscar 2022</h3>
                    {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )

}
