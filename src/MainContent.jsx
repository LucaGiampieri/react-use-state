import languages from "./data/Languages"
import LanguagesList from "./components/LanguagesList"

function MainContent() {

    function LanguageButtonAndCardRender() {
        return languages.map((language) => (
            <LanguagesList
                key={language.id}
                language={language}
            />
        ))
    }

    return (
        <section className="main-container">
            {LanguageButtonAndCardRender()}
        </section >
    )
}


export default MainContent
