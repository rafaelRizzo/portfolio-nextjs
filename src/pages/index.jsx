import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Experiences from "@/components/Experiences/Experiences";
import Main from "@/components/Main/Main";
import Profissionals from "@/components/Profissionals/Profissionals";
import Projects from "@/components/Projects/Projects";
import Template from "@/template/Template";

const images = [
    '/images/project-chama-la.jpg',
    '/images/project-loopstudios.jpg',
    '/images/project-reports.jpg',
    '/images/project-google.jpg',
    '/images/project-chihiro.jpg',

    '/images/project-landing-nike.jpg',
    '/images/project-caravan.jpg',
    '/images/project-clima.jpg',
    '/images/project-sorvete.jpg',
];

const links = [
    'https://chama-la.rafael-rizzo.com',
    'https://loopstudios.rafael-rizzo.com',
    'https://reports.rafael-rizzo.com',
    'https://clone-google.rafael-rizzo.com',
    'https://landing-chihiro.rafael-rizzo.com',

    'https://landing-nike.rafael-rizzo.com',
    'https://caravan.rafael-rizzo.com',
    'https://clima.rafael-rizzo.com',
    'https://sorveteria.rafael-rizzo.com',

];

export default function Home() {

    return (
        <>
            <Template>
                <Main />
                <About />
                <Experiences />
                <Profissionals />
                <Projects images={images} links={links} />
                <Contact />
            </Template>
        </>
    )
}
