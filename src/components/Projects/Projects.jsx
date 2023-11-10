// components/Carousel.js
import React from 'react';
import Section from '../Section/Section';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from "@/components/Projects/Projects.module.css"

export default function Projects({ images, links }) {
    if (!images || !Array.isArray(images) || images.length === 0) {
        return <p>Nenhuma imagem disponível.</p>;
    }

    // Certifique-se de que os arrays de imagens e links tenham o mesmo comprimento
    if (!links || !Array.isArray(links) || links.length !== images.length) {
        console.error("A quantidade de links não corresponde à quantidade de imagens.");
        return null;
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,  // Adicione esta linha para habilitar o autoplay
        autoplaySpeed: 5000,  // Defina a velocidade do autoplay em milissegundos
    };

    return (
        <Section title="Projetos">
            <div className={styles.container_carousel}>
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <a key={index} href={links[index]} target='_blank'>
                            <div key={index}>
                                <img src={image} alt={`slide-${index}`} />
                            </div>
                        </a>
                    ))}
                </Slider>
            </div>
        </Section>
    );
}
