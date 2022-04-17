function Contacto() {
    return (
  
      <>
          <h1>Contacto</h1>
          <h3>Nombre</h3>
          <input type="text" name="name"/><br></br><br></br>
          <h3>Correo</h3>
          <input type="text" name="correo"/><br></br><br></br>
          <h3>Mensaje</h3>
          <input type="text" name="mensaje"  minlength="50" maxlength="25" size="50" /><br></br><br></br>
          <button type="button" background-color= "gray" >Send text</button><br></br>
  
      </>
      
      )
  }
  export default Contact;