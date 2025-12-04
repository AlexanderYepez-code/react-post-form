import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
const initianFromData ={
  title : "",
  author: "",
  body: "",
  Public: "",
}
function App() {
  const [formData, setFormData] = useState(initianFromData);
  function updateData(event){
    const key = event.target.name;
    const newObjet = {
      ...formData,
      [key]: event.target.value,
    };
    setFormData(newObjet)
  }

  return (
    <section className='container'>
      <h2>inserisci un nuovo Blog</h2>
      <div>
        <form action="">
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
        </form>

      </div>
    </section>

    
  )
}

export default App
