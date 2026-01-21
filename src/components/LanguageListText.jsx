function LanguagesListText(props) {

    const { description } = props.language;

    return (
        <p className="text">{description}</p>
    )
}

export default LanguagesListText