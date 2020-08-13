import React, {useState, useEffect} from 'react';
import {BsFillPlusCircleFill} from "react-icons/bs";
import {FaReact} from "react-icons/fa";
import ListSkills from "./ListSkills";

const Skills = () => {
    const [confident, setConfident] = useState([]);
    const [learned, setLearned] = useState([]);
    const [wantToLearn, setWantToLearn] = useState([]);

    const reactIcon = FaReact;

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

            <h4 className="SubSectionTitle">What I am confident</h4>
            <ListSkills skills={confident}/>

            <h4 className="SubSectionTitle">What I learned</h4>
            <ListSkills skills={learned}/>

            <h4 className="SubSectionTitle">What I want to learn soon</h4>
            <ListSkills skills={wantToLearn}/>
        </div>
    )
}

export default Skills;