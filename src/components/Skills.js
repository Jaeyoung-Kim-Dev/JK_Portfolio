import React, {useState, useEffect} from 'react';
import styled from "@emotion/styled";
import ListSkills from "./ListSkills";

const Skills = () => {
    const [confident, setConfident] = useState([]);
    const [learned, setLearned] = useState([]);
    const [wantToLearn, setWantToLearn] = useState([]);

    const SubTitle = styled.h4`        
        margin: 20px;
        color: gold;   
    `;


    useEffect(() => {
        fetch('./JSON/skillsConfident.json')
            .then(response => response.json())
            .then(result => setConfident(result));
        fetch('./JSON/skillsLearned.json')
            .then(response => response.json())
            .then(result => setLearned(result));
        fetch('./JSON/skillsWantToLearn.json')
            .then(response => response.json())
            .then(result => setWantToLearn(result));
    }, []);

    return (
        <div>
            <h3 className="SectionTitle">Skills</h3>

            <SubTitle>What I am confident in:</SubTitle>
            <ListSkills skills={confident}/>

            <SubTitle>What I learned:</SubTitle>
            <ListSkills skills={learned}/>

            <SubTitle>What I want to learn soon:</SubTitle>
            <ListSkills skills={wantToLearn}/>
        </div>
    )
}

export default Skills;