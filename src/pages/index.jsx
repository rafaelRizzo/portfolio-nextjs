import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Experiences from "@/components/Experiences/Experiences";
import Main from "@/components/Main/Main";
import Profissionals from "@/components/Profissionals/Profissionals";
import Projects from "@/components/Projects/Projects";
import Template from "@/template/Template";

const images = [
    '/images/project-chama-la.png',
    '/images/project-loopstudios.png',
    '/images/project-reports.png',
    '/images/project-google.png',
    '/images/project-chihiro.png',
];

const links = [
    'https://chama-la.rafael-rizzo.com',
    'https://loopstudios.rafael-rizzo.com',
    'https://reports.rafael-rizzo.com',
    'https://clone-google.rafael-rizzo.com',
    'https://landingpage-chihiro.netlify.app',
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
