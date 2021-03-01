import Header from "../../components/HeaderImage";

export default function faq() {
    return (
        <div className="flex h-full w-full flex-col">
            <Header image="wallpaper.jpg" title="F.A.Q." description="Risposte a quasi tutte le tue risposte" />
            <div className="flex h-full w-full flex-col 2xl:px-28 2xl:py-36">

                <p className="font-bold 2xl:text-2xl">COME POSSO TRACCIARE IL MIO PACCO?</p>
                <p className="2xl:text-xl 2xl:mt-4">Quando iniziamo a preparare il tuo pacco ti spediam una e-mail con le informazioni sulla consegna e un link per tracciare
                il tuo ordine online.</p>

                <p className="font-bold 2xl:text-2xl 2xl:mt-10">CHE TIPI DI SPEDIZIONE OFFRITE?</p>
                <p className="2xl:text-xl 2xl:mt-4">Puoi scegliere tra due tipi di spedizione, quella Standard gratis per ordinativi pari o superiori a €50,00
                e quella Express a pagamento.</p>

                <p className="font-bold 2xl:text-2xl 2xl:mt-10">ACQUISTANDO ONLINE, QUALI SONO I COSTI DI SPEDIZIONE E DI TRASPORTO STANDARD?</p>
                <p className="2xl:text-xl 2xl:mt-4">Per tutti gli ordini di valroe pari o superiori a €50,00 le spese di spedizione standard sono gratuite. Sotto i €50,00
                di acquisto vengono applicate le spese di Spedizione Standard. Per la Spedizione Stndard con consegna a domicilio il costo è di €4,99.</p>

                <p className="font-bold 2xl:text-2xl 2xl:mt-10">QUANTO TEMPO CI VUOLE PER LA CONSEGNA STANDARD?</p>
                <p className="2xl:text-xl 2xl:mt-4">Se tutti gli articoli che hai ordinato sono disponibili, con la spedizione standard riceverai il pacco da 4 a 7 
                giorni lavorativi dalla conferma dell'ordine.</p>

                <p className="font-bold 2xl:text-2xl 2xl:mt-10">QUANTO COSTA IL SERVIZIO EXPRESS?</p>
                <p className="2xl:text-xl 2xl:mt-4 whitespace-pre-line">Il servizio express ha un costo di €10,00 indipendentemente dal quantitativo dell'ordine{`\n`}
                Se tutti gli articoli che hai ordinato sono disponibili, con la spedizione Express riceverai il pacco entro 1-2 giorni lavorativi dalla conferma
                dell'ordine.</p>
                
                <p className="font-bold 2xl:text-2xl 2xl:mt-10">SERVIZIO EXPRESS: COME FUNZIONA?</p>
                <p className="2xl:text-xl 2xl:mt-4 whitespace-pre-line">Con il servizio express i tuoi ordini ti verranno recapitati a domicilio tramite corriere
                TNT Express entro 1-2 giorni lavorativi. La spedizione del pacco avviene entro le 24 ore dal ricevimento dell'ordine.</p>

                <p className="font-bold 2xl:text-2xl 2xl:mt-10">È POSSIBILE PRENOTARE GLI ARTICOLI NEL CARRELLO?</p>
                <p className="2xl:text-xl 2xl:mt-4 whitespace-pre-line">Un articolo è prenotato solo quando l'acquisto è stato concluso con il pagamento. Gli articoli
                aggiunt al carrello vengono tenuti in memoria per 7 giorni, ma non ti possiamo garantire che siano sempre disponibili. Se un articolo è molto richiesto,
                potrebbe essere disponibile quando lo salvi nel tuo carrello, ma esaurito una volta che arrivi alla pagina del pagamento.</p>

                <p className="font-bold 2xl:text-2xl 2xl:mt-10">IN CHE PAESI SPEDITE?</p>
                <p className="2xl:text-xl 2xl:mt-4 whitespace-pre-line">Spediamo in tutta Italia, isole comprese. Possono emettere un ordine solo le persone di età pari o
                superiore a 18 anni, che non siamo sotto tutela, con indirizzo in Italia. La consegna il giorno dopo Express è disponibile in quasi tutta Italia, 2 giorni
                per Calabria e isole. Nella pagina del pagamento troverai tutte le opzioni per l'indirizzo inserito.</p>

                <p className="font-bold 2xl:text-2xl 2xl:mt-10">CHE METODI DI PAGAMENTO ACCETTATE?</p>
                <p className="2xl:text-xl 2xl:mt-4 whitespace-pre-line">Per i tuoi acquisti puoi scegliere di pagare con: PayPal, PostePay, Bonifico bancaro o vaglia postale.
                Puoi scegliere il metodo che preferisci al momento del pagamento.</p>

                <p className="font-bold 2xl:text-2xl 2xl:mt-10">COME FUNZIONA PAYPAL?</p>
                <p className="2xl:text-xl 2xl:mt-4 whitespace-pre-line">Per il momento il seguente metodo di pagamento è disponibile solo on-line (tramite il nostro negozio 
                non è ancora possibile). Il tuo pagamento richiede solo pochi passi: {`\n`}
                Seleziona PayPal al momento del pagamento;{`\n`}
                Verrai reindirizzato al sito web di PayPal per procedere al pagamento;{`\n`}
                Se sei già utente PayPal, puoi accedere con i tuoi dati e confermare il pagamento. Se non sei registrato su PayPal puoi creare un account e puoi confermare il
                pagamento;{`\n`}
                Al termine dell'operazione verrai re-indirizzato su questo sito: il tuo ordine ed il tuo pagamento sono stati inviati con successo.</p>

                <p className="font-bold 2xl:text-2xl 2xl:mt-10">COME FUNZIONA PAYPAL?</p>
                <p className="2xl:text-xl 2xl:mt-4 whitespace-pre-line">Per il momento il seguente metodo di pagamento è disponibile solo on-line (tramite il nostro negozio 
                non è ancora possibile). Il tuo pagamento richiede solo pochi passi: {`\n`}
                Seleziona PayPal al momento del pagamento;{`\n`}
                Verrai reindirizzato al sito web di PayPal per procedere al pagamento;{`\n`}
                Se sei già utente PayPal, puoi accedere con i tuoi dati e confermare il pagamento. Se non sei registrato su PayPal puoi creare un account e puoi confermare il
                pagamento;{`\n`}
                Al termine dell'operazione verrai re-indirizzato su questo sito: il tuo ordine ed il tuo pagamento sono stati inviati con successo.</p>

                <p className="font-bold 2xl:text-2xl 2xl:mt-10">COME POSSO EFFETTUARE UN RESO?</p>
                <p className="2xl:text-xl 2xl:mt-4 whitespace-pre-line">Hai sempre diritto di recedere dal tuo ordine entro 14 giorni, sesnza dover fornire alcuna ragione. Il
                periodo di recesso inizia dal giorno di consegna dell'ultimo articolo/i del tuo ordine. Puoi restituire il tuo ordine entro 14 giorni a partire dal giorno di 
                ricevimento del pacco. Tutti i nostri pacchi contengono un'etichetta di reso che dovrai usare per restituire la merce. Se desideri restituire dei prodotti, 
                inviaci una e-mail all'indirizzo di posta elettronica enricodimauro@gmail.com specificando solo gli articoli che vuoi restituire, noi vi invieremo i dati per
                il rinvio della merce.</p>

                
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
