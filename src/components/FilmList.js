import Film from "./Film"

const FilmList = ({films})=>{

    const filmNodes = films.map((films)=>{

        return(
            <Film name = {films.name}
                  url  = {films.url}
                  key  = {films.id} />
        );

    });

    return (

        <ul id="film-list">
            {filmNodes}
        </ul>

    );
}

export default FilmList;