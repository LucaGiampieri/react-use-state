function LanguagesListText(props) {

    const { title, description } = props.language;

    return (
        <div className="text-container">
            <h2 className="text-title">{title}</h2>
            <p className="text">{description}</p>
        </div>
    )
}

export default LanguagesListText