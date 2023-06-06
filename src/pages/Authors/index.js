import { useEffect, useState } from "react"
import List from "../../components/list"


const Authors = () => {
    const [authors, setAuthors] = useState([])

     function listAuthors() {
         const url = 'https://jsonplaceholder.typicode.com/users';

         fetch(url, {method: 'GET'}).then((response) => {
              return response.json();
        }).then((data) => {
           setAuthors(data); 
        })
      
    }
    useEffect(() => {
        listAuthors();
    })

    return(
        <List authors={authors} /> 

    )
}

export default Authors;