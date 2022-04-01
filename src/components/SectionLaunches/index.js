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

  console.log(widthProps)

  

    const {data,show, setShow,selected,favorite} = useContext(DataContext)

    useEffect(() => {
        if(selected === "past" || selected === "uncoming" || selected === "initial"){
            const intersectionObserver = new IntersectionObserver((entries)=> {
                if(entries.some((entry) => entry.isIntersecting)){
     
                  setShow((currentState) => currentState + 1)
            
                }
            })
            intersectionObserver.observe(document.querySelector('#observer'));
    
            return () => intersectionObserver.disconnect();
        }else{
            setShow(4)
        }
       
    },[]);

    


const favorites  = favorite?.map( (item, index) => {
    return (
        <Launches flight_number={item.flight_number} mission_name={item.mission_name} rocket_name={item.rocket.rocket_name} upcoming={item.upcoming} launch_year={item.launch_year} launch_success={item.launch_success} mission_patch={item.links.mission_patch} item={item} showBtnAdd={false} id={index}/>
    )
})







    const uncoming = data.filter( itens => {
        return itens.upcoming
    })

  const past = data.map(function(item, i) {
        return (i < show) ?  item : null 
      }).filter(x=>x).filter(item => item.upcoming === false)

  


    const lauchesPast = past.map( (item, index) => {
        return (
            <Launches flight_number={item.flight_number} mission_name={item.mission_name} rocket_name={item.rocket.rocket_name} upcoming={item.upcoming} launch_year={item.launch_year} launch_success={item.launch_success} mission_patch={item.links.mission_patch} item={item} showBtnAdd={true} id={index}/>
        )
        
    })

    const lauchesUncoming = uncoming.map( (item, index) => {
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
                    selected === "initial"? 
                        title === "Uncoming"? lauchesUncoming: lauchesPast: 
                        selected === "past"? lauchesPast:
                        selected === "uncoming"? lauchesUncoming :
                        selected === "favorite" && favorites.length !== 0? favorites : <h2 className={style.Launches_Warning}>Empty Add a item first</h2>
                }
           </div>
           <div id="observer"></div>
        </Section>
    )
}

export default SectionLaunches