import { Outlet } from 'react-router-dom'
import Navbar from '../layout/Navbar/Navbar'
import styles from '../layout/Navbar/Navbar.module.css'

// Layout global: todas las páginas heredan el Navbar.
// Outlet renderiza la página activa según la ruta.
export default function Layout() {
    return (
        <>
            <Navbar />
            <main
                className={styles.main}
                // Empuja el contenido hacia abajo para no quedar bajo el navbar fijo
                style={{ paddingTop: 'var(--navbar-height)' }}
            >
                <Outlet />
            </main>
        </>
    )
}