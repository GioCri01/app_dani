import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  getProductById,
  getProductByName,
} from "../../services/products.services";
import "./DetailProducts.css";


const DetailProdacts = () => {
  const { id } = useParams();

  const [product, setProduct] = useState();
  const [currentAudio, setCurrentAudio] = useState(
    require(`../../assets/audio/cappella_dry.wav`)
  );
  const [updatePlayer, setUpdatePlayer] = useState(true);

  useEffect(() => {
    setProduct(getProductByName(id));
  }, []);

  return (
    <div className="DetailProduct">
      <div className="jumbotron">
        <div
          className="img-prodotto"
          style={{
            backgroundImage: `url(${product?.dettaglio_prodotto_img[0]})`,
          }}
        >
          <div className="descr-prodotto">
            <h1>{product?.nome_prodotto}</h1>
            <h3>{product?.descrizione_prodotto}</h3>
          </div>
        </div>
      </div>
      <div className="info-product">
        <div>
          <h3>Cos è L'Evolver</h3>
          <p>
            L'Outboard Audio "Evolver" prodotto da Orage è un dispositivo audio
            esterno progettato per aggiungere caratteristiche sonore specifiche
            a qualsiasi segnale audio. In particolare, è un saturatore
            analogico, il che significa che lavora manipolando il segnale audio
            in modo simile ai saturatori a valvole o a nastro, ma con
            un'elaborazione completamente analogica. Il saturatore analogico
            "Evolver" è progettato per aggiungere armoniche al suono, il che
            significa che è in grado di enfatizzare e aggiungere toni o parziali
            armoniche al segnale originale. Le armoniche sono suoni che si
            verificano naturalmente sopra il suono fondamentale di una nota
            musicale o di un suono, e aggiungono ricchezza, calore e carattere
            al suono complessivo. Il processo di saturazione analogica di
            "Evolver" può variare da una leggera colorazione del suono a una
            distorsione più pronunciata, a seconda delle impostazioni scelte
            dall'utente. Questo permette di modellare il suono in diverse forme,
            fornendo una vasta gamma di opzioni creative per l'ingegnere del
            suono o il musicista. Inoltre, la capacità di "Evolver" di
            aggiungere armoniche a qualsiasi suono lo rende estremamente
            versatile, adatto sia per l'uso in studi di registrazione
            professionale che in contesti musicali dal vivo. Può essere
            utilizzato per dare più carattere e presenza a strumenti musicali,
            voci o addirittura per trattare interi mix audio. In sintesi,
            "Evolver" è un outboard audio che offre un'elevata qualità di
            saturazione analogica, consentendo agli utenti di modellare e
            arricchire il suono aggiungendo armoniche a qualsiasi segnale audio.
          </p>
        </div>
        <div>
          <h3>Specifiche HI-FI</h3>
          <img src={product?.table_product} alt="" />
        </div>
      </div>
      <div>
        <div className="audio-section">
          
          <div className="player-container">
            <h1>Ascolta le Demo Audio</h1>
            {updatePlayer && (
              <audio controls>
                <source src={currentAudio} type="audio/wav" />
              </audio>
            )}
            <div>
              <label htmlFor="">Seleziona Traccia : </label>
              <select
                className="select"
                onChange={($event) => {
                  setCurrentAudio(
                    require(`../../assets/audio/${$event.target.value}.wav`)
                  );
                  setUpdatePlayer(false);
                  setInterval(() => {
                    setUpdatePlayer(true);
                  }, 10);
                  console.log("currentAudio", currentAudio);
                }}
                name=""
                id=""
              >
                {product?.track_list.map((item) => (
                  <option value={item.source}>{item.title}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <div className="offset"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProdacts;
