// AudioPlayer.jsx
import React, { useState, useRef, useEffect } from "react";
import { CiPlay1, CiPause1 } from "react-icons/ci";
import styles from "@/components/Audio/Audio.module.css";

const AudioPlayer = ({ tracks, onPlayChange, audioRefProp }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isComponentMounted, setIsComponentMounted] = useState(false);

    // Mover a chamada do useRef para fora do escopo condicional
    const audioRef = useRef(null);
    const currentTrackIndex = useRef(0);

    const startPlayback = () => {
        audioRef.current.src = tracks[currentTrackIndex.current];
        const playPromise = audioRef.current.play();

        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    // A reprodução foi iniciada com sucesso
                })
                .catch((error) => {
                    console.error("Erro ao reproduzir áudio:", error);
                });
        }
    };

    useEffect(() => {
        if (!isComponentMounted) {
            audioRef.current = new Audio();
            setIsComponentMounted(true);
        } else {
            if (isPlaying) {
                startPlayback();
            } else {
                audioRef.current.pause();
            }
        }
    }, [tracks, currentTrackIndex, isPlaying, isComponentMounted]);

    const handleAudioEnded = () => {
        currentTrackIndex.current = (currentTrackIndex.current + 1) % tracks.length;
        startPlayback();
    };

    const handleTogglePlay = () => {
        const newIsPlaying = !isPlaying;
        setIsPlaying(newIsPlaying);
        onPlayChange(newIsPlaying);
    };

    return (
        <div>
            {isComponentMounted && (
                <audio
                    controls
                    ref={audioRef}
                    onEnded={handleAudioEnded}
                    onPlay={() => setIsPlaying(true)}
                    className="opacity-0 z-10 fixed top-0"
                >
                    <source src={tracks[currentTrackIndex.current]} type="audio/mpeg" />
                </audio>
            )}
            <button className={styles.container_audio} onClick={handleTogglePlay}>
                {isPlaying ? <CiPause1 /> : <CiPlay1 />}
            </button>
        </div>
    );
};

export default AudioPlayer;
