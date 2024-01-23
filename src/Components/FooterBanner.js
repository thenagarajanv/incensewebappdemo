import ads1 from './BannerImages/ads5.webp';
import ads2 from './BannerImages/ads4.webp';
import ads3 from './BannerImages/ads1.webp'
import Carousel from 'react-bootstrap/Carousel';

function FooterBanner(){
    return(
        <div>
            <Carousel>
            <Carousel.Item interval="300">
                <img alt='' src={ads1} width={300} height={400} class="d-block w-100"/>
            </Carousel.Item>
            <Carousel.Item interval="300">
                <img alt='' src={ads2} width={300} height={400} class="d-block w-100"/>
            </Carousel.Item>
            <Carousel.Item interval="300">
                <img alt='' src={ads3}  width={300} height={400} class="d-block w-100"/>
            </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default FooterBanner;