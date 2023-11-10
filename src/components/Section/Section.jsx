import styles from "@/components/Section/Section.module.css"
export default function Section(props) {
    return (
        <>
            <section className={styles.container}>
                <h1>{props.title}</h1>
                {props.children}
            </section>
        </>
    )
}