import React from "react";
import "./Contatti.css";
import img1 from "../../assets/img/chi-siamo.png";
import img2 from "../../assets/img/untitled51.png";
import img3 from "../../assets/img/contatti_3.jpg";
import img4 from "../../assets/img/contatti_4.jpg";

const Contatti = () => {
  return (
    <div id="contatti-section" className="Contatti">
      <h1>About Orage Audio</h1>
      <div className="section">
        <div className="image">
          <img src={img1} alt="Description 1" />
        </div>
        <div className="text">
          <p>
            Benvenuti in Orage, un'azienda all'avanguardia nel settor
            dell'audio che unisce con maestria innovazione e nostalgia. Siamo
            mossi dalla passione per il suono e impegnati nella continua ricerca
            di eccellenza, creando prodotti che ispirano e soddisfano anche i
            gusti più raffinati.
          </p>
        </div>
      </div>
      <div className="section reverse">
        <div className="image">
          <img src={img2} alt="Description 2" />
        </div>
        <div className="text">
          <p>
            Il nostro prodotto di punta, il Saturatore Analogico Evolver, è una
            vera e propria pietra miliare nell'ambito dell'audio. Coniuga
            l'essenza del passato con le più recenti innovazioni tecnologiche,
            offrendo un'esperienza sonora senza precedenti. L’Evolver cattura il
            calore e il carattere delle apparecchiature audio vintage, mentre
            allo stesso tempo integra funzionalità all'avanguardia che
            consentono un controllo senza precedenti sulla saturazione e sul
            colore del suono. Con l’Evolver, puoi trasformare qualsiasi
            registrazione in un'autentica opera d'arte sonora, arricchendo ogni
            nota con una profondità e una caldazza senza tempo.
          </p>
        </div>
      </div>
      <div className="section ">
        <div className="image">
          <img src={img3} alt="Description 2" />
        </div>
        <div className="text">
          <p>
            Ma la nostra missione va oltre la creazione di un singolo prodotto.
            Da Orage, ci impegniamo costantemente nella ricerca di nuove
            frontiere dell'audio, esplorando tecnologie innovative e sviluppando
            soluzioni che ridefiniscono gli standard del settore. Con un team di
            talentuosi ingegneri e designer, siamo determinati a rimanere in
            costante evoluzione, sempre alla ricerca della perfezione e
            dell'innovazione.
          </p>
        </div>
      </div>
      <div className="section reverse">
        <div className="image">
          <img src={img4} alt="Description 2" />
        </div>
        <div className="text">
          <p>
            Unisciti a noi in questa straordinaria avventura nel mondo
            dell'audio, dove passato e futuro si fondono armoniosamente per
            creare qualcosa di veramente straordinario. Orage: dove
            l'innovazione incontra la nostalgia, e il suono è il cuore pulsante
            di tutto ciò che facciamo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contatti;
