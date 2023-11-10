// Main.jsx
import React, { useState, useRef } from 'react';
import styles from "@/components/Main/Main.module.css";
import AudioPlayer from "@/components/Audio/Audio";

export default function Main(props) {
    const audioTracks = ["/music2.mp3", "/music1.mp3", "/music3.mp3"];
    const [audioPlaying, setAudioPlaying] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const audioRef = useRef(null);

    const handleAudioPlayChange = (newIsPlaying) => {
        setAudioPlaying(newIsPlaying);

        if (newIsPlaying) {
            setShowToast(false);
        } else {
            setShowToast(true);
        }
    };

    const handleClickContinue = () => {
    }

    return (
        <>
            <section className={`${styles.container_main} text-center flex flex-col items-center justify-center`}>
                <div className={`${styles.container_title} font-bold text-9xl items-center justify-center text-center flex gap-5`}>
                    <h1>Rafael</h1>
                    <h1>Rizzo</h1>
                </div>
                <h2 className="font-light text-3xl">Desenvolvedor Full stack</h2>
            </section>

            <div onClick={handleClickContinue}>
                <AudioPlayer tracks={audioTracks} onPlayChange={handleAudioPlayChange} audioRefProp={audioRef} />
            </div>

        </>
    );
}
