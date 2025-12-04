function blog ({title, author, body, Public}){
    return(

         <div className="card">
            <h1>{title}</h1>
            <h6>{author}</h6>
            <p>{body}</p>

        </div>
       
      
    )
}
export default blog