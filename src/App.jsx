import React, { useState} from 'react'
import { Analytics } from '@vercel/analytics/react';

// import verbs from './verbs.json'
import verbs from './verbsMorUsed.json'
import {BaseVerb} from "./components/BaseVerb";
import {Description} from "./components/Description";
import {IputVerbs} from "./components/IputVerbs";
import {Analytics} from "@vercel/analytics/react";

export function generateRandomNumber(n) {
    return Math.floor(Math.random() * n) + 1;
}

const keys = Object.keys(verbs).map(x => x)

function App() {
    const [randon, setRandon] = useState(generateRandomNumber(keys.length - 1))
    const verb = verbs[keys[randon] ?? keys[1]][0]
    return (
        <>
            <Analytics mode={'production'} />;

            <div className="mt-5">
                <h1 className={"text-center"}>Irregular verbs </h1>
                <div className="container d-flex align-items-center flex-column">
                    <BaseVerb verb={keys[randon]}/>
                    <Description des={verb["description"]}/>
                    <IputVerbs setRandon={setRandon} label="Past simple"
                               pastSimple={verb[2]}
                               pastParticiple={verb[3]} length={keys.length}> </IputVerbs>
                </div>

            </div>
            <footer className="blockquote-footer text-center mt-5">
                <a target={"_blank"} href="https://github.com/Edgarmejiav/irregular-verbs">
                    source code
                </a>
                - {new Date().getFullYear()}
            </footer>
        </>
    )
}




export default App
