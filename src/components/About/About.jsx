import styles from "@/components/About/About.module.css"
import Section from "../Section/Section"

export default function About() {
    return (
        <>
            <Section title="Sobre mim">
                <div className={styles.container_about}>
                    <p>Como <span>desenvolvedor full stack</span>, eu não apenas escrevo código, eu construo pontes entre o front-end e o back-end. Minha jornada é transformar e minha paixão está em ver o panorama completo, criando soluções que vão além das expectativas!</p>
                </div>
            </Section>
        </>
    )
}