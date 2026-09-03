const ocs = [
  {
    id: "01",
    nombre: "Kyrin",
    categoria: "mha",
    imagen: "../images/Sami/MhaOcs/KyrinSinMaquillar.webp",

    genero: "Masculino",
    nacionalidad: "Japones",

    quirk: {
      nombre: "Gorgon",
      descripcion:
        "Cualquiera que lo vea a los ojos se convertira en piedra al rededor de 30 mins - 1 hora, su quirk, la cual es una mutacion, le da caracteristicas de una serpiente tambien.",
    },

    historia:
      "Abandonado en un orfanato, Kyrin crecio solo debido a la negligencia que le daban ahi. Eventualmente, escapo del orfanato y fue resguardado en la casa de su ahora madre adoptiva, convirtiendose en villano junto a ella en un tiempo despues. En una mision fallida, Kyrin es atrapado por los estudiantes de la UA, al ver lo joven que era, deciden poner a prueba un programa de rehabilitacion, en el cual Kyrin participa e inicia a crecer como una mejor persona, dejando la villania e uniendose a 1A para ser un heroe.",

    curiosidades: [
      "Ama los murcielagos, tiene una obsecion casi extrema",
      "Es muy frio e inexpresivo, pero saca la lengua y la guarda rapidamente de vez en cuando",
      "Ademas es autista",
    ],
  },
  {
    id: "02",
    nombre: "Hunter",
    categoria: "mha",
    imagen: "../images/Sami/MhaOcs/Hunter.webp",

    genero: "Masculino",
    nacionalidad: "Mexicano",

    quirk: {
      nombre: "Nombre del Quirk2",
      descripcion:
        "Su fuerza esta elevada a niveles increíbles, su fuerza física es capaz de cargar un auto y más pesado, corre a la misma velocidad que un caballo, y aún con todo eso, es increíblemente difícil que se canse",
    },

    historia:
      "Hunter fue vendido a un sitio de peleas ilegales donde hacen que niños, adolescentes, y adultos, usan su quirk para pelear a muerte contra su oponente. Hunter fue el niño más joven que inició las peleas, debido a su quirk, pero la policía encontró el lugar y sacaron a Hunter de ahí. Hunter fue puesto en adopción, y para su suerte, fue encontrado por una pareja japonesa. Se lo llevaron de regreso a Japón, pero justo para su mala suerte, había ganado una reputación y lo querían para más peleas ilegales. Hunter escapa de la situación por si solo está vez, y dd ahi en adelante va por la misma ruta, como todos los descendientes. Son adoptados por Lilith, se vuelven villanos, los captura la UA y se rehabilitan volviéndose héroes.",

    curiosidades: [
      "es como un golden retriever, igual de pendejo y energético le preguntas el abecedario y se queda pensando",
      "su película favorita es mi pobre angelito",
      "por alguna extraña razón siempre tiene un gansito con el, ni puta idea de donde lo saca",
    ],
  },
];

console.log(ocs[0]);

ocs.forEach((oc) => {
  console.log(oc.nombre);
});
