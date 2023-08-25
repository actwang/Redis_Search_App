'use client'
import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const CarForm = () => {
    const handleSubmit = async (e) =>{
        // call create car in api route, which will call the redis method to create car in database
        e.preventDefault();
        // We do it this way to avoid tedious e.target.make.value etc in body
        const form = new FormData(e.target);
        const formData = Object.fromEntries(form.entries());
        console.log(JSON.parse(JSON.stringify(formData)));

        const res = await fetch('/api/cars', {
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        });
        console.log(res);
    }

  return (
    <form onSubmit={handleSubmit}>
        {/* The names in inputs are redis keys. Make sure they match the schema */}

        <div>
        <label htmlFor="make">Make:</label>
        <TextField name="make" type='text'></TextField>
        </div>
        <div>
        <label htmlFor="model">Model:</label>
        <TextField name='model' type='text'></TextField>
        </div>
        <div>
        <label htmlFor="image">Image:</label>
        <TextField name='image' type='text'></TextField>
        </div>
        <div>
        <label htmlFor="description">Description:</label>
        <TextField name="description" type='text'></TextField>
        </div>


        <Button type='submit' variant='contained' > Create Car </Button>
    </form>
  )
}

export default CarForm;