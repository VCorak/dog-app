import React from 'react'
import Spinner from './Spinner';

function Card ({ dog, loading, updateDog }) {

    if(loading) return <Spinner />

    return (
        <div className="card bounce" onClick={() => updateDog(dog.breed.id)}>
            <img 
                src={dog.image}
                alt={dog.breed.name}
            />
            
            <h1>
                {dog.breed.name} 
                
            </h1>
            <div className="dog__about">
            <p> <strong> Temperament:</strong> {dog.breed.temperament}</p>
            <p> <strong>Description:</strong> {dog.breed.description}</p>
            <p> <strong>Origin:</strong> {dog.breed.origin}</p>
            <p> <strong>Bred for:</strong> {dog.breed.bred_for}</p>
            <p> <strong>Bred group:</strong> {dog.breed.breed_group}</p>
            <p> <strong>Life span:</strong> {dog.breed.life_span}</p>
            <p> <strong>History:</strong> {dog.breed.history}</p>
             </div>      

        </div>
        
    )
}

export default Card