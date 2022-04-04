import React,{useContext} from "react";
import {DataContext} from "../../store"
import style from './HeaderStyle.module.scss'

const Header = () => {
    const store = useContext(DataContext)
    const logo = require('../../assets/logo.jpg')
    return(
        <div className={style.Header}>
            <img src={logo} alt="logo" height={70}/>
           <select
           className={style.Header_select}
            onChange={(e) => {
                e.preventDefault();
                const selectedOption = e.target.value;
                store.setSelected(selectedOption)
            }}
           >
               <option value="initial">Initial</option>
               <option value="past">Past</option>
               <option  value="uncoming">Uncoming</option>
               <option  value="favorite">Favorite</option>
           </select>
        </div>
    )
}

export default Header