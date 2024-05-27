function esVocal(letra) {
  // La función recibe un argumento llamado letra el cual es un string.
  // Retorna como resultado un string que indica si el argumento letra es una vocal.
  // de lo contrario retorna el string "Dato incorrecto"
  // Por ejemplo: 
  // "a" ---> "Es vocal"
  // "u" ---> "Es vocal"
  // "n" ---> "Dato incorrecto"
  // "texto largo" ---> "Dato incorrecto"
  // Tu código:
  if (typeof letra !== "string" || letra.length !== 1 ){
    return "Dato incorrecto"
  }
  
  let vocal = letra.toLowerCase();

  if( vocal === "a" || vocal === "e" || vocal === "i" || vocal === "o" || cocal === "u") {
    return "Es Vocal";
  }else{
    return "Dato incorrecto";
  }
}

module.exports = esVocal;
