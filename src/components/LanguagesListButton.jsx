function LanguagesListButton(props) {
    const { title } = props.language;
    const { onClick, isActive } = props;

    return (
        <button
            //al click esegui la funzione onClick del padre
            onClick={onClick}
            //al click isActive (se non lo possiede già) ottiene l'active, ovvere è l'unico in cui isActive è True 
            className={`btn ${isActive ? "active" : ""}`}
        >
            {title}
        </button>
    );
}

export default LanguagesListButton;