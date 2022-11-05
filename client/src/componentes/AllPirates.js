import React, {useEffect, useState} from 'react';
import  axios from 'axios';
import {Link} from "react-router-dom";

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
        <div className='container'>
            <h1>Pirates</h1>
            <Link style={{marginBottom:"10px"}} to="/nuevo" className="btn btn-success">Add pirate</Link>
            <div className='container'>
            {
                pirates.map((pirate, index) => (
                <div className='row' key={index}>
                    <div className='col-3'>
                        <img style={{heigth:"150px", width:"150px"}} src={pirate.image} alt="pirate" />
                    </div>
                    <div className='col-9'>
                        <div>
                            <h4>{pirate.name}</h4>
                        </div>
                        <div className='row'>
                            <div className='col-3'>
                                <Link to={`/view/${pirate._id}`} className="btn btn-primary">View Pirate</Link>
                            </div>
                            <div className='col-3'>
                                <button className="btn btn-danger" onClick={() => deletePirate(pirate._id)} >Walk the Plank</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
                ))
            }
            </div>
        </div>
    )

}

export default AllPirates;
