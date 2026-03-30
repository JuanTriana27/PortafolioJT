// Contact.tsx — Página de contacto
// EmailJS maneja el envío sin backend propio — correcto para un portafolio.
// Las credenciales viven en .env con prefijo VITE_ (requerido por Vite).

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import styles from './Contact.module.css'

// ─── Configuración ────────────────────────────────────────────────────────────
// import.meta.env es la forma de Vite de leer variables de entorno.
// REACT_APP_ no funciona en Vite — solo VITE_ es expuesto al cliente.
const EMAILJS_CONFIG = {
    serviceId:  import.meta.env.VITE_EMAILJS_SERVICE_ID  as string,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
    publicKey:  import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string,
}

// ─── Tipos ────────────────────────────────────────────────────────────────────
type AlertState = {
    type: 'success' | 'error' | null
    message: string
}

// ─── Componente ───────────────────────────────────────────────────────────────
export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null)

    const [isLoading, setIsLoading] = useState(false)
    const [alert, setAlert]         = useState<AlertState>({ type: null, message: '' })

    // Muestra el alert y lo oculta automáticamente después de 5 segundos
    function showAlert(type: AlertState['type'], message: string) {
        setAlert({ type, message })
        setTimeout(() => setAlert({ type: null, message: '' }), 5000)
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (!formRef.current) return

        // Validación de configuración temprana — falla claro en desarrollo
        if (!EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.templateId || !EMAILJS_CONFIG.publicKey) {
            showAlert('error', 'Error de configuración: verifica las variables VITE_EMAILJS_* en tu .env')
            return
        }

        setIsLoading(true)

        try {
            await emailjs.sendForm(
                EMAILJS_CONFIG.serviceId,
                EMAILJS_CONFIG.templateId,
                formRef.current,
                EMAILJS_CONFIG.publicKey,
            )

            showAlert('success', '¡Mensaje enviado! Te respondo pronto.')
            formRef.current.reset()

        } catch (error) {
            console.error('EmailJS error:', error)
            showAlert('error', 'No se pudo enviar el mensaje. Intenta de nuevo o escríbeme directo al email.')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className={styles.page}>
            <div className={styles.container}>

                {/* ── Header ───────────────────────────────────────────────── */}
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Contacto</span>
                    <h1 className={styles.title}>¿Tienes un proyecto<br />en mente?</h1>
                    <p className={styles.subtitle}>
                        Escríbeme y hablamos. Respondo en menos de 24 horas.
                    </p>
                </div>

                {/* ── Layout: formulario + info ─────────────────────────────── */}
                <div className={styles.layout}>

                    {/* Info lateral */}
                    <aside className={styles.info}>
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>Email directo</span>
                            <a
                                href="mailto:trianajuan28@gmail.com"
                                className={styles.infoValue}
                            >
                                trianajuan28@gmail.com
                            </a>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>Ubicación</span>
                            <span className={styles.infoValue}>Cali, Colombia</span>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>Disponibilidad</span>
                            <span className={styles.infoBadge}>Abierto a oportunidades</span>
                        </div>
                    </aside>

                    {/* Formulario */}
                    <div className={styles.formWrap}>

                        {/* Alert de feedback */}
                        {alert.type && (
                            <div className={`${styles.alert} ${styles[`alert${alert.type === 'success' ? 'Success' : 'Error'}`]}`}
                                role="alert"
                            >
                                {alert.message}
                            </div>
                        )}

                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className={styles.form}
                            noValidate
                        >
                            <div className={styles.row}>
                                <div className={styles.field}>
                                    <label htmlFor="user_name" className={styles.label}>
                                        Nombre
                                    </label>
                                    <input
                                        id="user_name"
                                        name="user_name"
                                        type="text"
                                        placeholder="Tu nombre"
                                        required
                                        disabled={isLoading}
                                        className={styles.input}
                                    />
                                </div>
                                <div className={styles.field}>
                                    <label htmlFor="user_email" className={styles.label}>
                                        Email
                                    </label>
                                    <input
                                        id="user_email"
                                        name="user_email"
                                        type="email"
                                        placeholder="tu@email.com"
                                        required
                                        disabled={isLoading}
                                        className={styles.input}
                                    />
                                </div>
                            </div>

                            <div className={styles.field}>
                                <label htmlFor="subject" className={styles.label}>
                                    Asunto
                                </label>
                                <input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    placeholder="¿De qué se trata?"
                                    required
                                    disabled={isLoading}
                                    className={styles.input}
                                />
                            </div>

                            <div className={styles.field}>
                                <label htmlFor="message" className={styles.label}>
                                    Mensaje
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    placeholder="Cuéntame sobre tu proyecto..."
                                    required
                                    disabled={isLoading}
                                    className={`${styles.input} ${styles.textarea}`}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className={styles.submitBtn}
                            >
                                {isLoading ? (
                                    <>
                                        <span className={styles.spinner} aria-hidden="true" />
                                        Enviando...
                                    </>
                                ) : (
                                    'Enviar mensaje'
                                )}
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}
