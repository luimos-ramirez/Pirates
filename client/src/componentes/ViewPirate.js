import React, {useEffect, useState} from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const ViewPirate = () => {

    const [pirate, setPirate] = useState({});
    const { id } = useParams();

    const getTemplate =(flag)=>{
        return flag ? <>Yes <button className="btn btn-success">Yes</button></>: <>No <button className="btn btn-danger">No</button></>
    }

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pirates/${id}`)
        .then(res => setPirate(res.data))
        .catch(err => console.log(err));
    },[]);



    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <img src={pirate.image} className="img-fluid" alt=""/>
                        <h1> "{pirate.name}"</h1>
                    </div>
                    <div className="card">
                        <h1>About</h1>
                            <div>
                                <p>Position: {pirate.position}</p>
                                <p>Treasures: {pirate.treasures}</p>
                                <p>Peg Leg: {getTemplate(pirate.leg) }</p>
                                <p>Eye Patch: {getTemplate(pirate.patch) }</p>
                                <p>Hook Hand:  {getTemplate(pirate.hand)}</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )

}

export default ViewPirate;