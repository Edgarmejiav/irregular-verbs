import {useEffect, useState} from 'react'
import verbs from './verbs.json'
import {IconVolumen} from "./IconVolumen";

function generateRandomNumber(n) {
    return Math.floor(Math.random() * n) + 1;
}

const keys = Object.keys(verbs).map(x => x)

function App() {
    const [randon, setRandon] = useState(generateRandomNumber(keys.length))
    const verb = verbs[keys[randon]][0]
    return (
        <div className="mt-5">
            <h1 className={"text-center"}>Irregular verbs </h1>
            <div className="container d-flex align-items-center flex-column">
                <BaseVerb verb={keys[randon]}/>
                <Description des={verb["description"]}/>
                <IputVerbs setRandon={setRandon} label="Past simple"
                           pastSimple={verb[2]}
                           pastParticiple={verb[3]}> </IputVerbs>
            </div>
        </div>
    )
}

function BaseVerb({verb}) {
    function handleVoice() {
        const text = new SpeechSynthesisUtterance(verb)
        speechSynthesis.speak(text)
    }

    return <div className="row text-center ">
        <h2 className="col-md-auto my-2 display-5">{verb} </h2>
        <div className={"col-md-auto align-self-center"}>
            <IconVolumen onClick={handleVoice}/>
        </div>
    </div>
}

function IputVerbs({pastSimple, pastParticiple, setRandon}) {
    const [simple, setSimple] = useState("")
    const [participle, setParticiple] = useState("")
    const [validatePastSimple, setValidatePastSimple] = useState(false)
    const [validatePastParticiple, setValidatePastParticiple] = useState(false)


    function handleOnChange(e) {
        setSimple(e.target.value)

    }

    useEffect(() => {
        setValidatePastSimple(pastSimple.some(x => x.toString() === simple.toString()))
        setValidatePastParticiple(pastParticiple.some(x => x.toString() === participle.toString()))
    }, [simple, participle])

    function handleParticipleOnChange(e) {
        setParticiple(e.target.value)

    }

    function handleNext() {
        // if (e.code === "Enter") {
        if (validatePastSimple && validatePastParticiple) {
            setRandon(generateRandomNumber(keys.length))
            setSimple("")
            setParticiple("")
            setValidatePastSimple(false)
            setValidatePastParticiple(false)
        }
        // }
    }


    function hanldeShow() {
        setSimple(Array.isArray(pastSimple) ? pastSimple[0] : pastSimple)
        setParticiple(Array.isArray(pastParticiple) ? pastParticiple[0] : pastParticiple)
    }


    return <form>
        <div className={` mb-3 ${validatePastSimple ? "was-validated" : ""}`}>

            <input type="text" className="form-control my-2"
                   placeholder={"Past simple"}
                   value={simple}
                   onChange={handleOnChange}
            />
            <div className={"text-center"}>
                {pastSimple.length > 1 && validatePastSimple ? pastSimple.join("/") : ""}
            < /div>
        </div>
        <div className={` mb-3 ${validatePastParticiple ? "was-validated" : ""}`}>

            <input type="text" className="form-control my-2"
                   placeholder="Past Participle"
                   value={participle}
                   onChange={handleParticipleOnChange}
            />
            <div className={"text-center"}>
                {pastParticiple.length > 1 && validatePastParticiple ? pastParticiple.join("/") : ""}
            < /div>
        </div>
        <div className="text-center">
            <button className="btn my-2 btn-primary " type="button" onClick={hanldeShow}>show</button>
            <button className="btn my-2  btn-success" type="button" onClick={handleNext}>next</button>
        </div>
    </form>

}

function Description({des}) {

    return Array.isArray(des) ?
        <figcaption className="col my-2 blockquote-footer">"{des.join("/")}" </figcaption>
        : <figcaption className="col my-2 blockquote-footer">"{des}"</figcaption>
}

export default App
