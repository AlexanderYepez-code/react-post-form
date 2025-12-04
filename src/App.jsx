import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
const initianFromData = {
  title: "",
  author: "",
  body: "",
  Public: "",
}
function App() {
  const [formData, setFormData] = useState(initianFromData);
  const [blogdata, setblogdata] = useState([]);
  function updateData(event) {
    const key = event.target.name;
    const inputType = event.target.type;
    const newObjet = {
      ...formData,
      [key]: inputType === "checkbox"? event.target.checked : event.target.value,
    };
    setFormData(newObjet)
  }
  function creaBlog (event) {
    event.preventDefault();
    setblogdata((current)=>[...current, formData]);
    setFormData(initianFromData)
    
  }

  return (
    <section className='container'>
      <h2>inserisci un nuovo Blog</h2>
      <div>
        <form action="" onSubmit={creaBlog}>
          {/* titolo */}
          <label htmlFor="title" className="form-label">Titolo</label>
          <input
            type="text"
            name='title'
            id='title'
            className='form-control'
            value={formData.title}
            onChange={updateData} />
          {/* author */}
          <label htmlFor="author" className="form-label">Autore</label>
          <input
            type="text"
            name='author'
            id='author'
            className='form-control'
            value={formData.author}
            onChange={updateData} />
          {/* Corpo */}
          <label htmlFor="body" className="form-label">Inserisci il corpo del blog</label>
          <textarea
            type="text"
            name='body'
            id='body'
            className='form-control'
            value={formData.body}
            onChange={updateData} rows={3} />
          {/* Public */}
          <div className='mx-3'>
            <label htmlFor="public" className="form-label ">Pubblicare</label>
            <input
              className='mx-1'
              type="radio"
              name='Public'
              id='public'
              value="public"
              checked={formData.Public === "public"}
              onChange={updateData}
            />
          </div>
          <div className='mx-3'>
            <label htmlFor="private" className="form-label">Bozza</label>
            <input
              className='mx-1'
              type="radio"
              name='Public'
              id='private'
              value="private"
              checked={formData.Public === "private"}
              onChange={updateData}
            />
          </div>


          <button type="submit"  className="btn btn-primary mb-3 mx-5 mt-5">Salva</button>
        </form>

      </div>
    </section>


  )
}

export default App
