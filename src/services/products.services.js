// Importa la libreria uuid
import imgProdotto from "../assets/img/another.png";
import imgProdotto2 from "../assets/img/fine.png";
import products_ from "../assets/img/product_no_bg.png";
import img_1 from "../assets/img/untitled51.png";
import img_2 from "../assets/img/2_evo_noise.png";
import table from "../assets/img/tabella-specifiche.png";


const { v4: uuidv4 } = require("uuid");

// Funzione per generare un UUID univoco
function generateUUID() {
  return uuidv4();
}

// Esempio di utilizzo
export const productList = [
  {
    id_prodotto: generateUUID(),
    nome_prodotto: "Evolver",
    img_prodotto: products_,
    descrizione_prodotto:
      "L'Innovazione Vintage per un Suono Analogico Perfetto",
    dettaglio_prodotto_img: [img_2, img_1],
    table_product: table,
    track_list: [
      {
        title: "Cappella Dry",
        source: "cappella_dry",
      },
      {
        title: "Cappella Wet",
        source: "cappella_wet",
      },
      {
        title: "Elettronic Dry",
        source: "elettronic_dry",
      },
      {
        title: "Elettronic Wet",
        source: "elettronic_wet",
      },
      {
        title: "Rock Vox Dry",
        source: "Rockvox_dry",
      },
      {
        title: "Rock Vox Wet",
        source: "Rockvox_wet",
      },
      {
        title: "Trap Vox Dry",
        source: "trapvox_dry",
      },
      {
        title: "Trap Vox Wet",
        source: "trapvox_wet",
      },
    ],
  },
];

export const getProductByName = (name) => {
  return productList.find((x) => x.nome_prodotto === name);
};


