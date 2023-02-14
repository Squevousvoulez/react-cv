import img_1 from '../assets/images/img_1.png';
import img_2 from '../assets/images/img_2.png';
import img_3 from '../assets/images/img_3.png';
import img_4 from '../assets/images/img_4.png';
import img_5 from '../assets/images/img_5.png';
import img_6 from '../assets/images/img_6.png';
import img_7 from '../assets/images/img_7.png';
import img_8 from '../assets/images/img_8.png';
import img_9 from '../assets/images/img_9.png';
import img_10 from '../assets/images/img_10.png';
import img_11 from '../assets/images/img_11.png';
import '../assets/css/portfolio.css';
const Portfolio = () => {
    return(
        <section className="portfolio">
            <article>
                <figure><img src={img_1} alt="" />
                    <figcaption>Projet 01</figcaption>
                </figure>
            </article>
            <article>
                <figure><img src={img_2} alt="" />
                    <figcaption>Projet 02</figcaption>
                </figure>
            </article>
            <article>
                <figure><img src={img_3} alt="" />
                    <figcaption>Projet 03</figcaption>
                </figure>
            </article>
            <article>
                <figure><img src={img_4} alt="" />
                    <figcaption>Projet 04</figcaption>
                </figure>
            </article>
            <article>
                <figure><img src={img_5} alt="" />
                    <figcaption>Projet 05</figcaption>
                </figure>
            </article>
            <article>
                <figure><img src={img_6} alt="" />
                    <figcaption>Projet 06</figcaption>
                </figure>
            </article>
            <article>
                <figure><img src={img_7} alt="" />
                    <figcaption>Projet 07</figcaption>
                </figure>
            </article>
            <article>
                <figure><img src={img_8} alt="" />
                    <figcaption>Projet 08</figcaption>
                </figure>
            </article>
            <article>
                <figure><img src={img_9} alt="" />
                    <figcaption>Projet 09</figcaption>
                </figure>
            </article>
            <article>
                <figure><img src={img_10} alt="" />
                    <figcaption>Projet 10</figcaption>
                </figure>
            </article>
            <article>
                <figure><img src={img_11} alt="" />
                    <figcaption>Projet 11</figcaption>
                </figure>
            </article>
        </section>
    )
}

export default Portfolio;