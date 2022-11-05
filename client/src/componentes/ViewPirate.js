import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams, Link } from "react-router-dom";
import './css/pirates.css'

const ViewPirate = () => {

    const [pirate, setPirate] = useState({});
    const { id } = useParams();

    const getTemplate =(flag)=>{
        return flag ? <>Yes <button className="btn btn-success">Yes</button></>: <>No <button className="btn btn-danger">No</button></>
    }

    useEffect(()=>{
        axios.get("http://localhost:8000/api/pirates/"+id)
        .then(res => setPirate(res.data))
        .catch(err => console.log(err));
    },[id]);

    return (
        <>
        <div className="encabezado">
            <div className="row">
                <div className="col-6">
                    <h1>{pirate.name}</h1>
                </div>
                <div className='col-6 add-pirate-container'>
                    <Link style={{marginBottom:"10px"}} to="/" className="btn btn-primary">Return Pirates</Link>
                </div>
            </div>
        </div>
        <div className="cuerpo new">
            <div className="row">
                <div className="col-6 container">
                    <div className="img-view">
                        <img  src={pirate.image} alt=""/>
                    </div>
                    <div>
                        <h1 className="text-phrase"> "{pirate.phrase}"</h1>
                    </div>
                </div>
                <div className="col-5 card">
                    <div className="row">
                        <div>
                        <h1>About</h1>
                            <div>
                                <p><b>Treasures:</b> {pirate.treasures}</p>
                                <p><b>Position: </b>{pirate.position}</p>
                                <p><b>Peg Leg:</b> {getTemplate(pirate.leg) }</p>
                                <p><b>Eye Patch:</b> {getTemplate(pirate.patch) }</p>
                                <p><b>Hook Hand:</b>  {getTemplate(pirate.hand)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )

}

export default ViewPirate;