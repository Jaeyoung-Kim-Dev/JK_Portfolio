import React, {useEffect, useState} from 'react';
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
            <div data-aos="fade-up" data-aos-delay="200">
                <h3 className="SectionTitle">Skills</h3>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="400"><small>Click or mouse over the skill
                icons to view the details.</small></div>
            <div data-aos="fade-up" data-aos-delay="600">
                <SubTitle>What I am confident in:</SubTitle></div>
            <ListSkills skills={confident}/>
            <div data-aos="fade-up" data-aos-delay="600">
                <SubTitle>What I learned:</SubTitle></div>
            <ListSkills skills={learned}/>
            <div data-aos="fade-up" data-aos-delay="600">
                <SubTitle>What I want to learn soon:</SubTitle></div>
            <ListSkills skills={wantToLearn}/>
        </div>
    )
}

export default Skills;