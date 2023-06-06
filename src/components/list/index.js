function List(prop) {
    return(
        <ul>
           {prop.authors.map((autor) => (
               <li key={autor.name}>{autor.name}</li>
           ))}
        </ul>  
    )
}

export default List;