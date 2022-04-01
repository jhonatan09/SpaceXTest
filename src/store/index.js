import React, {useState, useEffect} from "react"
import Auth from '../apis';
const DataContext = React.createContext()


function DataContextProvider(props) {

    const [data, setData] = useState([])
    const [favotive, setFavorite] = useState([])
    const [showMore, setShowMore] = useState(false)
    const [show, setShow] = useState(4)
    const [selected, setSelected] = useState("initial")
  
    useEffect( () => {
        if(data.length === 0){
            const ShowData = async () => {
                const res = await Auth.SearchLauchesApi()
        
               setData(res)
            }
            ShowData()
        }
    

    },[])



    const handleClick = (e, item) => {
        e.preventDefault();
        setFavorite([...favotive, item])
    }
  

    return (
        <DataContext.Provider value={{data,favotive, setFavorite, showMore, setShowMore,show, setShow, selected, setSelected, handleClick}}>
            {props.children}
        </DataContext.Provider>
    )

}




export {DataContextProvider, DataContext}
