function LanguagesListButton(props) {

    const { title } = props.language;

    return (
        <button className="btn">{title}</button>
    )
}

export default LanguagesListButton
