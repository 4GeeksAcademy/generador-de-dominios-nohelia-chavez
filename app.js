//Arrays

let pronoun = ['mi', 'tu', 'la', 'el','nuestra']; //array de pronombres
let adj = ['dulce','salvaje', 'épica', 'gigante', 'secreta'];//Array de adjetivos
let noun = ['arepa', 'estrella', 'camioner', 'heroes', 'pintores'];//Array de nombres
let extension = ['.com', '.net','.er', '.or', 'es'];//Array de extensiones donde las extensiones de dominio .er y .es permitirán generar hacks como hero.es o vampi.er

function generarDominios (){
  let dominios = [];

  // mis bucles anidados para recorrer todas las combinaciones posibles 
  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun){
        for (let ext of extension){

          let extSinPunto = ext.replace('.','');  // elimino el punto de la extensión (`.es` → `es`) 
          let dominio;
          let esHack = false;  // se inicia como false y solo se vuelve true si se cumple el if que detecta el hack. 

          if (n.endsWith(extSinPunto)){
            let hack = n.slice(0,- extSinPunto.length);// Quitamos el final del `noun` para meter el punto justo allí "heroes" = "es" --> "hero"--> hero.es
            dominio = `${p}${a}${hack}.${extSinPunto} ✅`; // Agrega check entonces es un hack domain.
          }else{
            dominio = `${p}${a}${n}${ext}`;//si no es un hack entonces se forma el dominio completo normal.
          }
           dominios.push(dominio); //aqui se agrega(push) el dominio que es el valor generado del array(dominios).
        }
      }
    }
  }
  return dominios; // me devuelve la lista completa de los dominios.
}

let resultado = generarDominios();

console.log("🌐 Lista de dominios generados:");


// imprime cada dominio con su número.
resultado.forEach((dominio, index) => {
  console.log(`${index + 1}.${dominio}`);
});