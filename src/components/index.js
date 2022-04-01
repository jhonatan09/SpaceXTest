import React, {useContext} from "react";
import {DataContext} from "../store"

import Header from "./Header";
import styled from "styled-components";

import SectionLaunches from "./SectionLaunches";

const Main = () => {
    
    const {selected} = useContext(DataContext)
      const Container = styled.div`
        width: 100%;
        display:flex;
        flex-wrap: wrap;
        min-height: 100vh;
        height: auto;
        background-color: #ffffff;

        @media(max-width: 1080px) {
            flex-direction: column-reverse;
        }
      `

    
    
    return(
        <div>
            <Header />
            <Container>
                {selected === "initial"?
                 <>
                    <SectionLaunches title={"Past"} widthProps={50}/>
                    <SectionLaunches title={"Uncoming"} widthProps={50}/>
                </>
                :
                selected === "past"?
                    <SectionLaunches title={"Past"} widthProps={100}/>
                :
                selected === "uncoming"?
                    <SectionLaunches title={"Uncoming"} widthProps={100}/>
                :
                selected === "favorite"?
                    <SectionLaunches title={"Favorite"} widthProps={100}/>
                : ''
               }
               
            </Container>
        </div>
    )
}

export default Main