import { useState } from "react";
import languages from "../data/Languages";
import LanguagesListButton from "./LanguagesListButton";
import LanguagesListText from "./LanguageListText";

function MainContent() {
    const [activeLanguage, setActiveLanguage] = useState(null);

    return (
        <section className="main">
            <div className="btn-container">
                {languages.map((language) => (
                    <LanguagesListButton
                        key={language.id}
                        language={language}
                        onClick={() =>
                            setActiveLanguage(
                                activeLanguage === language ? null : language
                            )
                        }
                        isActive={activeLanguage === language}
                    />
                ))}
            </div>

            {activeLanguage && (<LanguagesListText language={activeLanguage} />)}
        </section>
    );
}

export default MainContent;
