import styles from "@/components/Experiences/Experiences.module.css"

import {
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaBootstrap,
    FaNodeJs,
    FaCentos,
    FaPhp
} from "react-icons/fa";
import { SiGrafana, SiGnubash } from "react-icons/si";
import { BiLogoJavascript, BiLogoTailwindCss } from "react-icons/bi";
import { DiAsterisk } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import Section from "../Section/Section";

export default function Experiences() {
    return (
        <>
            <Section title="Experiências">
                <div className={styles.container_cards}>
                    <div className={`${styles.card} ${styles.icon_html}`}>
                        <FaHtml5 />
                    </div>
                    <div className={`${styles.card} ${styles.icon_css}`}>
                        <FaCss3Alt />
                    </div>
                    <div className={`${styles.card} ${styles.icon_javascript}`}>
                        <BiLogoJavascript />
                    </div>
                    <div className={`${styles.card} ${styles.icon_react}`}>
                        <FaReact />
                    </div>
                    <div className={`${styles.card} ${styles.icon_php}`}>
                        <FaPhp />
                    </div>
                    <div className={`${styles.card} ${styles.icon_bootstrap}`}>
                        <FaBootstrap />
                    </div>
                    <div className={`${styles.card} ${styles.icon_tailwind}`}>
                        <BiLogoTailwindCss />
                    </div>
                    <div className={`${styles.card} ${styles.icon_nodejs}`}>
                        <FaNodeJs />
                    </div>
                    <div className={`${styles.card} ${styles.icon_mysql}`}>
                        <GrMysql />
                    </div>
                    <div className={`${styles.card} ${styles.icon_grafana}`}>
                        <SiGrafana />
                    </div>
                    <div className={`${styles.card} ${styles.icon_asterisk}`}>
                        <DiAsterisk />
                    </div>
                    <div className={`${styles.card} ${styles.icon_bash}`}>
                        <SiGnubash />
                    </div>
                    <div className={`${styles.card} ${styles.icon_centos}`}>
                        <FaCentos />
                    </div>
                </div>
            </Section>
        </>
    )
}
