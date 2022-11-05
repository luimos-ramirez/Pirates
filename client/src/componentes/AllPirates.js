import React, {useEffect, useState} from 'react';
import  axios from 'axios';
import {Link} from "react-router-dom";
import './css/pirates.css'

const AllPirates = () => {
    const [pirates, setPirates] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates")
            .then(res => setPirates(res.data))
            .catch(err => console.log(err));
    }, [])

    const deletePirate = id => {    
        axios.delete("http://localhost:8000/api/pirates/"+id)
            .then(res => {
                let nuevaLista = pirates.filter(pirate => pirate._id !== id);
                setPirates(nuevaLista);
            })
    }
    return (
        <>
        <div className='encabezado'>
            <div className='row'>
                <div className='col-5   '>
                    <h1>Pirate Crew</h1>
                </div>
                <div className='col-6 add-pirate-container'>
                    <Link to="/nuevo" className="btn btn-primary">Add pirate</Link>
                </div>
            </div>
        </div>
        <div className='cuerpo'>
        {
                    pirates.map((pirate, index) => (
                    <div className='row  block-body' key={index}>
                        <div className='col-3'>
                            <img style={{width:"150px", heigth:"150px"}} src={pirate.image} alt="pirate" />
                        </div>
                        <div className='col-9'>
                            <div>
                                <h4>{pirate.name}</h4>
                            </div>
                            <div className='row'>
                                <div className='col-6'>
                                    <Link to={`/view/${pirate._id}`} className="btn btn-primary">View Pirate</Link>
                                </div>
                                <div className='col-6'>
                                    <button className="btn btn-danger" onClick={() => deletePirate(pirate._id)} >Walk the Plank</button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    ))
                }
        </div>
        </>
    )

}

export default AllPirates;
