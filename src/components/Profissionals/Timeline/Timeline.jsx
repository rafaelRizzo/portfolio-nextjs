import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import styles from "@/components/Profissionals/Timeline/Timeline.module.css"
import TooltipComponent from '@/components/Tooltip/Tooltip';

export default function TimelineComponent() {
    return (
        <Timeline position="alternate">
            <TimelineItem>
                <TimelineSeparator>
                    <TooltipComponent
                        content="Desbravando os horizontes da tecnologia, lidero iniciativas de desenvolvimento de sistemas na Phonevox. Minha paixão por transformar códigos em soluções inovadoras é a força propulsora por trás do nosso sucesso contínuo.">
                        <TimelineDot className={styles.atual} />
                    </TooltipComponent>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <div>
                        <p><b>Phonevox</b></p>
                        <p><b>Analista e desenvolvedor de sistemas</b></p>
                        <p>Out. 2023 ~ Atualmente</p>
                    </div>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TooltipComponent
                        content="Na vanguarda do suporte técnico, contribuí significativamente para a eficiência operacional ao oferecer suporte excepcional para servidores PABX in Cloud na Phonevox. Dezembro de 2022 marca um marco muito importante em minha jornada profissional.">
                        <TimelineDot color='success' />
                    </TooltipComponent>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <div>
                        <p>Phonevox</p>
                        <p>Suporte para servidores PABX in Cloud</p>
                        <p>Dez. 2022</p>
                    </div>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TooltipComponent
                        content="Ao lidar com reclamações, aprendi a transformar desafios em oportunidades de aprimoramento. Minha habilidade em compreender as necessidades dos clientes e fornecer soluções eficazes foi essencial para fortalecer a reputação da empresa.">
                        <TimelineDot color='success' />
                    </TooltipComponent>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <div>
                        <p>Phonevox</p>
                        <p>Atendente de reclamações</p>
                        <p>Fev. 2021</p>
                    </div>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TooltipComponent
                        content="Nos meus primeiros passos profissionais na Lan House - Sky Net, desbravei um caminho de multitarefas, desempenhando uma variedade de funções nos serviços gerais. Durante cinco anos, fui moldado pela experiência, preparando-me para desafios mais complexos e estimulantes.">
                        <TimelineDot color='success' />
                    </TooltipComponent>
                </TimelineSeparator>
                <TimelineContent>
                    <div>
                        <p>Lan House Sky Net</p>
                        <p>Serviços Gerais</p>
                        <p>Jan. 2016 ~ Fev. 2021</p>
                    </div>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}