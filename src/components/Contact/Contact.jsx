import * as React from 'react';
import Section from "../Section/Section";
import IconButton from '@mui/material/IconButton';
import { BsLinkedin } from "react-icons/bs";
import { PiInstagramLogoFill } from "react-icons/pi";
import { BiLogoGmail } from "react-icons/bi";

import styles from "@/components/Contact/Contact.module.css"

export default function Contact() {
    return (
        <>
            <Section title="Contato" >
                <div className={styles.container_contact}>
                    <a href="https://www.linkedin.com/in/rafael-rizzo-breschi-b02547216/" target='_blank'>
                        <IconButton variant="outlined"><BsLinkedin /></IconButton>
                    </a>
                    <a href="https://www.instagram.com/rafael_breschi/" target='_blank'>
                        <IconButton variant="outlined"><PiInstagramLogoFill /></IconButton>
                    </a>
                    <a href="mailto:contatorafaelrizzodev@gmail.com" target='_blank'>
                        <IconButton variant="outlined"><BiLogoGmail /></IconButton>
                    </a>
                </div>
            </Section>
        </>
    )
}
