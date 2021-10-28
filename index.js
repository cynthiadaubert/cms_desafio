function addWorkCard(parameters = {}) {
  const template = document.querySelector("#portfolio-card-template");
  const container =
    document.querySelector(
      ".contenedor-portf"
    ); /* <--a donde va a ir a parar el contenido del template */

  template.content.querySelector(".card-title").textContent = parameters.title;
  template.content.querySelector(".portf-img").src = parameters.image;
  template.content.querySelector(".card-link").src = parameters.url;
  template.content.querySelector(".card-text-content").textContent =
    parameters.description;

  const cloned = document.importNode(template.content, true);
  container.appendChild(cloned);
}

/* *DEVUELVE EL ARRAY CON OBJETOS QUE VAMOS A PASAR AL ADDWORDCARD* */
function getWorks() {
  return fetch(
    "https://cnd.contentful.com/spaces/zo7euwrtovoc/environments/master/entries?access_token=bm_FCTa7YGpnFNbn-4rRu8bQ9wtpSpRSEBPPp6NDWh0&content_type=works"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const fieldsCollection = data.items.map((item) => {
        return {
          title: item.fields.titulo,
          description: item.fields.descripcion,
        };
      });
      return fieldsCollection;
    });
}

function main() {
  /*  getWorks va a ser asincronico */
  getWorks().then(function (works) {
    for (const w of works) {
      addWorkCard(w);
    }
  });

  /*  addWorkCard({
    title: "hola",
    description: "blablablabla",
    url: "https://lunahayward.carrd.co/",
    image:
      "https://i.picsum.photos/id/1012/250/250.jpg?hmac=GLgbvPbEH0U0sMn90Ik3esvMT84HVyUE7hJohwessRE",
  });

  addWorkCard({
    title: "hola 2.0",
    description: "blablablablablablablablabla",
    url: "https://www.google.com/",
    image:
      "https://i.picsum.photos/id/1012/250/250.jpg?hmac=GLgbvPbEH0U0sMn90Ik3esvMT84HVyUE7hJohwessRE",
  }); */
}

main();
