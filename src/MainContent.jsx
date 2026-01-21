import { useState } from "react"
import languages from "./data/Languages"
import LanguagesListButton from "./components/LanguagesListButton"
import LanguagesListText from "./components/LanguageListText"

function MainContent() {

    const [activeButton, setActiveButton] = useState(null);

    function LanguageButtonRender() {
        return languages.map((language) => (
            <LanguagesListButton
                key={language.id}
                language={language}
                //al click salviamo tramite setActiveButton il language.id del bottone che è stato cliccato
                onClick={() => setActiveButton(language.id)}
                //ora activeButton è uguale a language.id
                isActive={activeButton === language.id}
            //in questo modo isActive è vero solo per il bottone cliccato, in quanto come detto prima activeButton è uguale language.id grazie click
            />
        ))
    }

    function LanguageTextRender() {
        //find scorre l'array languages in cerca dell'id giusto
        const selectedLanguage = languages.find(
            //restituisce solo l'id corrispondente a quello del click (activeButton)
            (language) => language.id === activeButton
        );
        //se non c'è nulla da mostrare non renderizza nulla (all'inizio activeButton parte in null)
        if (!selectedLanguage)
            return null;

        return (
            <LanguagesListText
                //renderizziamo solo il linguaggio corrispondente all'id cliccato
                language={selectedLanguage}
            />
        );
    }


    return (

        <section className="main">
            <div className="btn-container">
                {LanguageButtonRender()}
            </div>
            {LanguageTextRender()}
        </section >
    )
}

export default MainContent
