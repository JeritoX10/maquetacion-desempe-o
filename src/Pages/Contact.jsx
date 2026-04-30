import ContactForm from '../components/ContactForm'

function Contact() {
  return (
    <section className="contact-page">
      <div className="page-width">
        <h2 className="contact-title">CONTACTO</h2>
        <p className="contact-subtitle">¿Tienes alguna pregunta? Nos encantaría escucharte</p>
        <div className="contact-container">
          <div className="contact-info">
            <h3>INFORMACIÓN DE CONTACTO</h3>
            <div className="info-item">
              <span className="icon">◎</span>
              <div>
                <strong>DIRECCIÓN</strong>
                <p>Calle Urban Style 123</p>
                <p>28001 Madrid, España</p>
              </div>
            </div>
            <div className="info-item">
              <span className="icon">◔</span>
              <div>
                <strong>TELÉFONO</strong>
                <p>+34 91 123 45 67</p>
              </div>
            </div>
            <div className="info-item">
              <span className="icon">✉</span>
              <div>
                <strong>EMAIL</strong>
                <p>info@urbanthreads.com</p>
              </div>
            </div>
            <div className="info-item">
              <span className="icon">◷</span>
              <div>
                <strong>HORARIO</strong>
                <p>Lun - Vie: 9:00 - 18:00</p>
                <p>Sáb: 10:00 - 14:00</p>
              </div>
            </div>
          </div>
          <div className="contact-box">
            <h3>ENVÍANOS UN MENSAJE</h3>
            <div className="demo-box">
              Demo: Este es un formulario de demostración. Los mensajes no se enviarán realmente.
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact