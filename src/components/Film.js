const Film = ({name, url})=>{

    return (
        <li><a id="film-links" href={url}>{name}</a></li>
    );

}
export default Film;