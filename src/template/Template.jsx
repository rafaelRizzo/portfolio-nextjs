import styles from "@/template/Template.module.css"
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export default function Template(props) {
    return (
        <ThemeProvider theme={darkTheme}>
            <div className={styles.container}>
                {props.children}
            </div>
        </ThemeProvider>
    )
}
