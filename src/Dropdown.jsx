import {useState} from "react";
import verbs from "./verbs.json";
import verbsMorUsed from "./verbsMorUsed.json";
// verbs[keys[randon] ?? keys[1]][0]
export const Dropdown = ({setKey, setVerb,randon }) => {
    const [show, setShow] = useState("Action")
    return <div className="btn-group">
        <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown"
                aria-expanded="false">
            {show}
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a className="dropdown-item" onClick={() => {
                setShow("verbs more used")
                setKey(Object.keys(verbsMorUsed).map(x => x))
                setVerb(verbsMorUsed[Object.keys(verbsMorUsed)[0]][0])
            }}>Verbs more used</a></li>
            <li><a className="dropdown-item" onClick={() => {
                setShow("all list verbs")
                setKey(Object.keys(verbs).map(x => x))
                setVerb(verbs[Object.keys(verbs)[0]][0])
            }}>All list verbs</a></li>
        </ul>
    </div>
}