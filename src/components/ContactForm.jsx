import { useState } from 'react'

function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('contactForm', JSON.stringify(form))
    alert('Mensaje guardado (demo)')
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="row">
        <div>
          <label>NOMBRE</label>
          <input name="name" onChange={handleChange} required />
        </div>

        <div>
          <label>APELLIDOS</label>
          <input name="lastName" onChange={handleChange} required />
        </div>
      </div>

      <div>
        <label>EMAIL</label>
        <input type="email" name="email" onChange={handleChange} required />
      </div>

      <div>
        <label>ASUNTO</label>
        <select name="subject" onChange={handleChange} required>
          <option value="">Selecciona un asunto</option>
          <option>Compra</option>
          <option>Envío</option>
          <option>Soporte</option>
        </select>
      </div>

      <div>
        <label>MENSAJE</label>
        <textarea name="message" rows="5" onChange={handleChange} required />
      </div>

      <button type="submit">ENVIAR MENSAJE</button>
    </form>
  )
}

export default ContactForm