import React, {useState, useEffect} from "react"
import Auth from '../apis';
const DataContext = React.createContext()


function DataContextProvider(props) {

    const [data, setData] = useState([])
    const [favorite, setFavorite] = useState([])
    const [showMore, setShowMore] = useState(false)
    const [show, setShow] = useState(4)
    const [selected, setSelected] = useState("initial")

    const [reflesh, setReflesh] = useState()

  
  
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
        setFavorite([...favorite, item])
    }
  
    const RemoveItemFavorite = (e, item) => {
        const findIndex = favorite.findIndex(a => a.id === item.id)

        findIndex !== -1 && favorite.splice(findIndex , 1)

        setReflesh({});
        
    }

    return (
        <DataContext.Provider value={{data,favorite, setFavorite, showMore, setShowMore,show, setShow, selected, setSelected, handleClick, RemoveItemFavorite}}>
            {props.children}
        </DataContext.Provider>
    )

}




export {DataContextProvider, DataContext}
