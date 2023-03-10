import {useState} from 'react'
import verbs from './verbs.json'

function generateRandomNumber(n) {
    return Math.floor(Math.random() * n) + 1;
}

const keys = Object.keys(verbs).map(x => x)

function App() {
    const [randon, setRandon] = useState(generateRandomNumber(keys.length))

    const verb = verbs[keys[randon]][0]
    return (
        <div className="container-fluid ">
            <h1>Irregular verbs </h1>
            <div className="container ">
                <div className="text-center">
                    <Description des={verb["description"]}/>
                    <h5 className="col">{keys[randon]}  </h5>
                    <PastSimple verb={verb[2]}></PastSimple>
                    <PastPerfect setRandon={setRandon} verb={verb[3]}> </PastPerfect>
                </div>
            </div>
        </div>
    )
}

function PastSimple({verb}) {
    return Array.isArray(verb) ? <h5 className="col">{verb.join("/")} </h5> : <h5 className="col">{verb} </h5>
}

function PastPerfect({verb, setRandon}) {
    const [value, setValue] = useState("")

    function handleOnChange(e) {
        setValue(e.target.value)
    }
    function handleOnKey(e) {
        if (e.code === "Enter") {
            let isCheck = false
            Array.isArray(verb) ? isCheck = verb.some(x => x === value) : isCheck = value === verb
           if( isCheck) {
               setRandon(generateRandomNumber(keys.length))
               setValue("")
           }
        }
    }
    return <input type="text" className="form-control" value={value} onKeyDownCapture={handleOnKey} onChange={handleOnChange}
                  placeholder="Past Perfect"
    />

// return Array.isArray(verb) ? <div className="col">{verb.join("/")} </div> : <h6 className="col">{verb} {} </h6>
}

function Description({des}) {
    return Array.isArray(des) ?
        <h6 className="col text-muted">{des.join("/")} </h6>
        : <h6 className="col text-muted">{des} {} </h6>
}

export default App
