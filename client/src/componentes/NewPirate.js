import React, {useState} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const NewPirate = () => {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [treasures, setTreasures] = useState("");
    const [phrase, setPhrase] = useState("");
    const [position, setPosition] = useState("");
    const [leg, setLeg] = useState(true);
    const [patch, setPatch] = useState(true);
    const [hand, setHand] = useState(true);

    const [errors, setErrors] = useState({});

    const history = useHistory();

    const savePirate = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/pirates", {
                name,
                image,
                treasures,
                phrase,
                position,
                leg,
                patch,
                hand
                
        })
            .then(res => history.push("/"))
            .catch(err => setErrors(err.response.data.errors))

    }

    const showError =(fieldError)=>{
        console.log(fieldError)
        return fieldError ? <span className="text-danger">{fieldError.message}</span>: <></>
    }

    return (
        <div>
            <h1>Add Pirate</h1>
            <form onSubmit={savePirate}>
                <div className="form-group">
                    <label htmlFor="name">Pirate Name:</label>
                    <input type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)} className="form-control" />
                    {showError(errors.name)}
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image URl:</label>
                    <input type="text" id="image" name="image" value={image} onChange={e => setImage(e.target.value)} className="form-control" />
                    {showError(errors.image)}
                </div>
                <div className="form-group">
                    <label htmlFor="treasures"># of Treasure Chests:</label>
                    <input type="number" id="treasures" name="treasures" value={treasures} onChange={e => setTreasures(e.target.value)} className="form-control" />
                    {showError(errors.treasures)}
                </div>
                <div className="form-group">
                    <label htmlFor="phrase">Pirate Catch Phrase:</label>
                    <input type="text" id="phrase" name="phrase" value={phrase} onChange={e => setPhrase(e.target.value)} className="form-control" />
                    {showError(errors.phrase)}
                </div>
                <div className="form-group">
                    <label htmlFor="position">Crew Position:</label>
                    <select onChange={e => setPosition(e.target.value)} className="form-control">
                        <option value="">Select Position</option>
                        <option value="Captain">Captain</option>
                        <option value="First Mate">First Mate</option>
                        <option value="Quarter Master">Quarter Master</option>
                        <option value="Boatswain">Boatswain</option>
                        <option value="Powder Monkey">Powder Monkey</option>
                    </select>
                    {showError(errors.position)}
                </div>
                <div className="form-group">
                    <input type="checkbox" className="form-check-input" id="leg" name="leg" checked={leg} onChange={e => setLeg(e.target.checked)} />
                    <label className="form-check-label" htmlFor="leg">
                        Peg Leg
                    </label>
                </div>
                <div className="form-group">
                    <input type="checkbox" className="form-check-input" id="patch" name="patch" checked={patch} onChange={e => setPatch(e.target.checked)} />
                    <label className="form-check-label" htmlFor="patch">
                        Eye Path
                    </label>
                </div>
                <div className="form-group">
                    <input type="checkbox" className="form-check-input" id="hand" name="hand" checked={hand} onChange={e => setHand(e.target.checked)} />
                    <label className="form-check-label" htmlFor="hand">
                        Hook Hand
                    </label>
                </div>
                <input type="submit" className="btn btn-success" value="Add Pirate" />
            </form>
        </div>
    )

}

export default NewPirate;