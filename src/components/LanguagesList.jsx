function LanguagesList(props) {

    const { title, description } = props.language;

    return (
        <>
            <button className="btn">{title}</button>
            <p className="lenguages-content" >{description}</p>
        </>
    )
}

export default LanguagesList
