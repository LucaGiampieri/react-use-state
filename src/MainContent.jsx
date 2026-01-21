import languages from "./data/Languages"
import LanguagesListButton from "./components/LanguagesListButton"
import LanguagesListText from "./components/LanguageListText"

function MainContent() {

    function LanguageButtonRender() {
        return languages.map((language) => (
            <LanguagesListButton
                key={language.id}
                language={language}
            />
        ))
    }

    function LanguageTextRender() {
        return languages.map((language) => (
            <LanguagesListText
                key={language.id}
                language={language}
            />
        ))
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
