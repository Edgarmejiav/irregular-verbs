import {IconVolumen} from "../IconVolumen.jsx";

export function BaseVerb({verb}) {
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
