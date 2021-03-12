import { useState } from "react";
import Header from "../../components/HeaderImage";
import CollapsibleDiv from "../../components/CollapsibleDiv";

export default function faq() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="flex h-full w-full flex-col 2xl:pt-20">
            <Header image="faq_header.png" title="F.A.Q." description="Risposte a quasi tutte le tue risposte" />
            <div className="flex h-full w-full flex-col 2xl:px-28 2xl:py-36">
            
                <CollapsibleDiv caption="COME POSSO TRACCIARE IL MIO PACCO?"
                description="Quando iniziamo a preparare il tuo pacco ti spediamo una e-mail con le 
                        informazioni sulla consegna e un link per tracciare il tuo ordine online."
                value={1}
                index={activeIndex}
                setIndex={setActiveIndex}
                />

                <CollapsibleDiv caption="CHE TIPI DI SPEDIZIONE OFFRITE?"
                description="Puoi scegliere tra due tipi di spedizione, quella Standard gratis per 
                ordinativi pari o superiori a €50,00 e quella Express a pagamento."
                value={2}
                index={activeIndex}
                setIndex={setActiveIndex}
                />

                <CollapsibleDiv caption="ACQUISTANDO ONLINE, QUALI SONO I COSTI DI SPEDIZIONE E DI TRASPORTO STANDARD?"
                description="Per tutti gli ordini di valore pari o superiori a €50,00 le spese di 
                spedizione standard sono gratuite. Sotto i €50,00 di acquisto vengono applicate le spese di Spedizione Standard. Per la Spedizione Standard
                 con consegna a domicilio il costo è di €4,99."
                value={3}
                index={activeIndex}
                setIndex={setActiveIndex}
                />

                <CollapsibleDiv caption="QUANTO TEMPO CI VUOLE PER LA CONSEGNA STANDARD?"
                description="Se tutti gli articoli che hai ordinato sono disponibili, con la spedizione
                standard riceverai il pacco da 4 a 7 giorni lavorativi dalla conferma dell'ordine."
                value={4}
                index={activeIndex}
                setIndex={setActiveIndex}
                />

                <CollapsibleDiv caption="QUANTO COSTA IL SERVIZIO EXPRESS?"
                description={`Il servizio express ha un costo di €10,00 indipendentemente dal quantitativo dell'ordine.
                Se tutti gli articoli che hai ordinato sono disponibili, con la spedizione Express riceverai il pacco entro 1-2 giorni lavorativi dalla conferma dell'ordine.`}
                value={5}
                index={activeIndex}
                setIndex={setActiveIndex}
                />

                <CollapsibleDiv caption="SERVIZIO EXPRESS: COME FUNZIONA?"
                description="Con il servizio express i tuoi ordini ti verranno recapitati a domicilio
                tramite corriere TNT Express entro 1-2 giorni lavorativi. La spedizione del pacco avviene entro le 24 ore dal ricevimento dell'ordine."
                value={6}
                index={activeIndex}
                setIndex={setActiveIndex}
                />

                <CollapsibleDiv caption="È POSSIBILE PRENOTARE GLI ARTICOLI NEL CARRELLO?"
                description="Un articolo è prenotato solo quando l'acquisto è stato
                concluso con il pagamento. Gli articoli aggiunti al carrello vengono tenuti in memoria per 7 giorni, ma non ti possiamo garantire che siano
                 sempre disponibili. Se un articolo è molto richiesto, potrebbe essere disponibile quando lo salvi nel tuo carrello, ma esaurito una volta
                  che arrivi alla pagina del pagamento."
                value={7}
                index={activeIndex}
                setIndex={setActiveIndex}
                />

                <CollapsibleDiv caption="IN CHE PAESI SPEDITE?"
                description="Spediamo in tutta Italia, isole comprese. Possono emettere
                un ordine solo le persone di età pari o superiore a 18 anni, che non siamo sotto tutela, con indirizzo in Italia. La consegna il giorno dopo
                 Express è disponibile in quasi tutta Italia, 2 giorni per Calabria e isole. Nella pagina del pagamento troverai tutte le opzioni per l'indirizzo inserito."
                value={8}
                index={activeIndex}
                setIndex={setActiveIndex}
                />

                <CollapsibleDiv caption="CHE METODI DI PAGAMENTO ACCETTATE?"
                description="Per i tuoi acquisti puoi scegliere di pagare con:
                PayPal, PostePay, Bonifico bancaro o vaglia postale. Puoi scegliere il metodo che preferisci al momento del pagamento."
                value={9}
                index={activeIndex}
                setIndex={setActiveIndex}
                />

                <CollapsibleDiv caption="COME FUNZIONA PAYPAL?"
                description={`Per il momento il seguente metodo di pagamento è disponibile solo on-line (tramite il nostro negozio non è ancora possibile). Il tuo pagamento richiede solo pochi passi:
                Seleziona PayPal al momento del pagamento;
                Verrai reindirizzato al sito web di PayPal per procedere al pagamento;
                Se sei già utente PayPal, puoi accedere con i tuoi dati e confermare il pagamento. Se non sei registrato su PayPal puoi creare un account e puoi confermare il pagamento;
                Al termine dell'operazione verrai re-indirizzato su questo sito: il tuo ordine ed il tuo pagamento sono stati inviati con successo.`}
                value={10}
                index={activeIndex}
                setIndex={setActiveIndex}
                />

                <CollapsibleDiv caption="COME POSSO EFFETTUARE UN RESO?"
                description={`Hai sempre diritto di recedere dal tuo ordine entro 14 giorni, senza dover fornire alcuna ragione. Il periodo di recesso inizia dal giorno di consegna dell'ultimo articolo/i del tuo ordine. Puoi restituire il tuo ordine entro 14 giorni a partire dal giorno di ricevimento del pacco. Tutti i nostri pacchi contengono un'etichetta di reso che dovrai usare per restituire la merce. Se desideri restituire dei prodotti, inviaci una e-mail all'indirizzo di posta elettronica enricodimauro@gmail.com specificando solo gli articoli che vuoi restituire, noi vi invieremo i dati per il rinvio della merce.
                Usa il modulo di reso che trovi nel pacco ed inserisci il codice che più si avvicina alla ragione del reso;
                Metti l’articolo/gli articoli che desideri restituire nel pacco insieme al modulo di reso. Ricorda che devi sempre allegare il modulo di reso alla merce;
                Spedisci il pacco usando per la spedizione l’indirizzo da noi dato;
                Ti invieremo una e-mail di conferma quando il pacco arriverà al nostro magazzino. A questo punto verrai rimborsato per la merce resa.`}
                value={11}
                index={activeIndex}
                setIndex={setActiveIndex}
                />

                <CollapsibleDiv caption="DEVO PAGARE PER IL RESO?"
                description="Le spese di reso sono a carico dell'acquirente."
                value={12}
                index={activeIndex}
                setIndex={setActiveIndex}
                />

                <CollapsibleDiv caption="RICEVERÒ INFORMAZIONI SU COME STA PROCEDENDO IL RESO?"
                description="Dopo aver ricevuto il pacco con il suo reso nel nostro magazzino, ti invieremo 
                una notifica di annullamento via e-mail con la conferma della ricezione del pacco. Provvederemo al rimborso della somma che hai pagato usando 
                lo stesso metodo che hai scelto tu per il pagamento dell’ordine, entro 14 giorni dalla notifica di annullamento non appena avremo ricevuto il 
                pacco o una prova che il pacco è stato spedito."
                value={13}
                index={activeIndex}
                setIndex={setActiveIndex}
                />

                <CollapsibleDiv caption="HO PERSO IL MODULO PER EFFETTUARE IL RESTO, COSA POSSO FARE?"
                description="Se hai perso il modulo di reso, puoi contattare il nostro servizio clienti 
                per ricevere assistenza, ti verrà inviato tramite e-mail con allegato un nuovo modulo resi da poter stampare."
                value={14}
                index={activeIndex}
                setIndex={setActiveIndex}
                />
            
            </div>
            <div className="flex items-center bg-blue-400
            2xl:py-20 2xl:px-20 2xl:mt-20">
                <div className="flex justify-between items-center 2xl:w-11/12 flex-row">
                <p className="text-white font-bold
                2xl:text-6xl 2xl:w-7/12 whitespace-pre-line">Scopri tutta la nostra gamma di servizi e prodotti {`\n`} per la comunicazione visiva</p>
                <div className="border-4 border-white flex justify-center items-center 
                2xl:h-24 2xl:px-28">
                    <p className="text-white font-semibold 2xl:text-2xl">Scopri</p>
                </div>
                </div>
            </div>
        </div>
    )
}
