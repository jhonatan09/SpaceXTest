import React, {useContext} from "react";
import style from './LaunchesStyle.module.scss'
import {DataContext} from "../../store"

const Launches = ({flight_number, mission_name, rocket_name, launch_year, launch_success, mission_patch, item,showBtnAdd, id}) => {

    const store = useContext(DataContext)
    
    if( item?.id === undefined && store?.selected === "favorite"){
        item.id = id
    }


   

    return(
        <div className={style.Launches}>
           <h3 className={style.Launches_Title}>
                <label>
                     Mission name:
                </label>
               {mission_name}
           </h3>
        
           {mission_patch !== null ? <img src={mission_patch} alt={mission_name} height={120} width={120}/>: <h4>Don't have image</h4>}
           <div className={style.Launches_Division}>
               <div className={style.Launches_itemsStyle}>
                    <label>
                        Flight number:
                    </label>
                    {flight_number}
               </div>
               <div className={style.Launches_itemsStyle}>
                   
                   <label>
                        Rocket name:
                    </label>
                   {rocket_name}
               </div>
               <div className={style.Launches_itemsStyle}>
                    <label>
                        Staus mission:
                    </label>
                   {launch_success === true? "Success": "Failure"}
               </div>
               <div className={style.Launches_itemsStyle}>
                    <label>
                        Mission year:
                    </label>
                   {launch_year}
               </div>
               {showBtnAdd === true?
                    <>
                        <button 
                        className={style.Launches_Button_Add}
                        onClick={(e)=> store.handleClick(e, item)}
                    >
                         Add to Favorite
                    </button>
                    </>
                    :
                    <button 
                    className={style.Launches_Button_Remove}
                        onClick={(e)=> store.RemoveItemFavorite(e, item)}
                    >
                        Remove to Favorite
                    </button>
                }
           </div>
        </div>
    )
}

export default Launches