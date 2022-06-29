

const firebaseErrors = (code) => {
  switch (code) {

    case "auth/email-already-in-use":
        return "Email ya registrado"     
  
    default:
       return "Error del servidor";
  }

}

export default firebaseErrors