// Esta lista contiene toda la informacion que se mostrara en las tarjetas.
// Para agregar otro personaje, crea un nuevo objeto con esta misma estructura.
const ocs = [
  {
    id: "01",
    nombre: "Kyrin 🦇",
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
    nombre: "Hunter 🦁",
    categoria: "mha",
    imagen: "../images/Sami/MhaOcs/Hunter.webp",

    genero: "Masculino",
    nacionalidad: "Mexicano",

    quirk: {
      nombre: "super human",
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

// Buscamos el elemento <main> de Mha.html para insertar las tarjetas dentro.
const main = document.querySelector("main");

// Crea un elemento HTML, agrega texto y le asigna una clase CSS.
function createTextElement(tagName, text, className) {
  const element = document.createElement(tagName);
  element.textContent = text;
  element.className = className;
  return element;
}

let sectionCounter = 0;

// Crea una seccion que puede abrirse y cerrarse con su propio boton.
function createCollapsibleSection(title, content) {
  const section = document.createElement("section");
  section.className = "oc-card__section";

  sectionCounter += 1;
  const sectionId = `section-${sectionCounter}`;
  const sectionButton = createTextElement(
    "button",
    title,
    "oc-card__section-toggle",
  );
  sectionButton.type = "button";
  sectionButton.setAttribute("aria-expanded", "false");
  sectionButton.setAttribute("aria-controls", sectionId);

  const sectionContent = document.createElement("div");
  sectionContent.className = "oc-card__section-content";
  sectionContent.id = sectionId;
  sectionContent.hidden = true;
  sectionContent.append(content);

  sectionButton.addEventListener("click", () => {
    const isOpen = !sectionContent.hidden;
    sectionContent.hidden = isOpen;
    sectionButton.setAttribute("aria-expanded", String(!isOpen));
  });

  section.append(sectionButton, sectionContent);
  return section;
}

function createOcCard(oc) {
  // La tarjeta se construye desde cero para usar los datos del personaje.
  const card = document.createElement("article");
  card.className = "oc-card";

  const image = document.createElement("img");
  image.className = "oc-card__image";
  image.src = oc.imagen;
  image.alt = `Imagen de ${oc.nombre}`;

  const content = document.createElement("div");
  content.className = "oc-card__content";
  content.append(
    createTextElement("h2", oc.nombre, "oc-card__title"),
    createTextElement("p", `Categoria: ${oc.categoria}`, "oc-card__category"),
  );

  const details = document.createElement("div");
  details.className = "oc-card__details";
  // hidden oculta los detalles hasta que el usuario pulse el boton.
  details.hidden = true;
  details.append(
    createTextElement("h3", "Informacion personal", "oc-card__heading"),
    createTextElement(
      "p",
      `Genero: ${oc.genero} | Nacionalidad: ${oc.nacionalidad}`,
      "oc-card__text",
    ),
  );

  const curiosidades = document.createElement("ul");
  // Cada curiosidad se convierte en un elemento <li> de la lista.
  oc.curiosidades.forEach((curiosidad) => {
    curiosidades.append(createTextElement("li", curiosidad, "oc-card__fact"));
  });

  details.append(
    createCollapsibleSection(
      `Quirk: ${oc.quirk.nombre}`,
      createTextElement("p", oc.quirk.descripcion, "oc-card__text"),
    ),
    createCollapsibleSection(
      "Historia",
      createTextElement("p", oc.historia, "oc-card__text"),
    ),
    createCollapsibleSection("Curiosidades", curiosidades),
  );

  const toggleButton = document.createElement("button");
  toggleButton.className = "oc-card__toggle";
  toggleButton.type = "button";
  toggleButton.textContent = "Mostrar informacion";
  toggleButton.setAttribute("aria-expanded", "false");
  toggleButton.addEventListener("click", () => {
    // Si los detalles estan ocultos, la tarjeta se abrira; si no, se cerrara.
    const isOpen = !details.hidden;

    if (!isOpen) {
      // Antes de abrir esta tarjeta, cerramos cualquier otra que este abierta.
      document.querySelectorAll(".oc-card__details").forEach((otherDetails) => {
        if (otherDetails !== details) {
          otherDetails.hidden = true;
          const otherButton =
            otherDetails.parentElement.querySelector(".oc-card__toggle");
          otherButton.textContent = "Mostrar informacion";
          otherButton.setAttribute("aria-expanded", "false");
        }
      });
    }

    details.hidden = isOpen;
    toggleButton.textContent = isOpen
      ? "Mostrar informacion"
      : "Ocultar informacion";
    toggleButton.setAttribute("aria-expanded", String(!isOpen));
  });

  // Orden visual de la tarjeta: imagen, contenido, detalles y boton.
  content.append(details, toggleButton);
  card.append(image, content);
  return card;
}

// Repetimos el proceso para cada personaje de la lista.
ocs.forEach((oc) => main.append(createOcCard(oc)));
