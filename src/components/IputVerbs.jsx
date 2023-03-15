import {useEffect, useState} from "react";
import {generateRandomNumber} from "../App.jsx";

export function IputVerbs({pastSimple, pastParticiple, setRandon, length}) {
    const [simple, setSimple] = useState("")
    const [participle, setParticiple] = useState("")
    const [validatePastSimple, setValidatePastSimple] = useState(false)
    const [validatePastParticiple, setValidatePastParticiple] = useState(false)


    function handleOnChange(e) {
        setSimple(e.target.value)

    }

    useEffect(() => {
        setValidatePastSimple(pastSimple.some(x => x.toLowerCase() === simple.toLowerCase()))
        setValidatePastParticiple(pastParticiple.some(x => x.toLowerCase() === participle.toLowerCase()))
    }, [simple, participle])

    function handleParticipleOnChange(e) {
        setParticiple(e.target.value)

    }

    function handleNext() {
        // if (e.code === "Enter") {
        if (validatePastSimple && validatePastParticiple) {
            setRandon(generateRandomNumber(length))
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
