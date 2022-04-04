import React, {useContext, useEffect} from "react";
import {DataContext} from "../../store"
import style from "./SectionStyle.module.scss"
import Launches from "../Launches";
import styled from "styled-components";

const SectionLaunches = ({title, widthProps}) => {

    const Section = styled.div`
    width: ${widthProps}%;
    height: 100%;
    @media(max-width: 1080px) {
        width: ${widthProps === 50? 100: 100}%;
    }
  `


  

  
    const store = useContext(DataContext)
    useEffect(() => {
        if(store?.selected === "past" || store?.selected === "uncoming" || store?.selected === "initial"){
            const intersectionObserver = new IntersectionObserver((entries)=> {
                if(entries.some((entry) => entry.isIntersecting)){
     
                    store?.setShow((currentState) => currentState + 2)
            
                }
            })
            intersectionObserver.observe(document.querySelector('#observer'));
    
            return () => intersectionObserver.disconnect();
        }else{
            store?.setShow(4)
        }
       
    },[]);

    


const favorites  = store?.favorite?.map( (item, index) => {
    return (
        <Launches flight_number={item.flight_number} mission_name={item.mission_name} rocket_name={item.rocket.rocket_name} upcoming={item.upcoming} launch_year={item.launch_year} launch_success={item.launch_success} mission_patch={item.links.mission_patch} item={item} showBtnAdd={false} id={index}/>
    )
})







    const uncoming = store?.data.filter( itens => {
        return itens.upcoming
    })

  const past = store?.data.map(function(item, i) {
        return (i < store.show) ?  item : null 
      }).filter(x=>x).filter(item => item.upcoming === false)

  


    const lauchesPast = past?.map( (item, index) => {
        let id = index +2;
      
        return (
            <Launches flight_number={item.flight_number} mission_name={item.mission_name} rocket_name={item.rocket.rocket_name} upcoming={item.upcoming} launch_year={item.launch_year} launch_success={item.launch_success} mission_patch={item.links.mission_patch} item={item} showBtnAdd={true} id={id}/>
        )
        
    })

    const lauchesUncoming = uncoming?.map( (item, index) => {
        return (
            <Launches flight_number={item.flight_number} mission_name={item.mission_name} rocket_name={item.rocket.rocket_name} upcoming={item.upcoming} launch_year={item.launch_year} launch_success={item.launch_success} mission_patch={item.links.mission_patch} item={item} showBtnAdd={true} id={index}/>
        )
        
    })
    return(
        <Section>
            <h2 className={style.Launches_Title}>
                {title}
            </h2>
           <div className={style.Launches}>
                {
                    store?.selected === "initial"? 
                        title === "Uncoming"? lauchesUncoming: lauchesPast: 
                        store?.selected === "past"? lauchesPast:
                        store?.selected === "uncoming"? lauchesUncoming :
                        store?.selected === "favorite" && favorites?.length !== 0? favorites : <h2 className={style.Launches_Warning}>Empty Add a item first</h2>
                }
           </div>
           <div id="observer"></div>
        </Section>
    )
}

export default SectionLaunches