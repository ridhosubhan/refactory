import './App.css';
import React, { useState } from "react";

function App() {
  const [angkaFaktoral,setAngkaFaktoral]=useState('')
  const [hasilFaktoral,setHasilFaktoral]=useState('')
  const [error,setError]=useState(false)

  const handleSubmit=(e)=>{
      e.preventDefault();

      if (angkaFaktoral < "0") {
        setError(true)
        console.log('Error! Tidak bisa menghitung faktorial.');
        setHasilFaktoral('Error');
      }
      
      else if (angkaFaktoral === "0") {
        console.log(`Faktorial dari ${angkaFaktoral} adalah 1.`);
        setHasilFaktoral('1');
      }
      
      else {
        let fact = 1;
        for (let i = 1; i <= angkaFaktoral; i++) {
          fact *= i;
        }
        setHasilFaktoral(fact);
        console.log(`Factorial dari ${angkaFaktoral} adalah ${fact}.`);
      }
  }

  const handleChange = event => {
    setHasilFaktoral(event.target.value);
  };

  return (

    <div className="bg-neutral grid place-items-center h-screen">

      <div className="bg-primary-content card lg:card-side bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title mb-2">Hitung Faktorial</h2>
            <form onSubmit={handleSubmit} type="POST">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Masukan angka</span>
                </label>
                <input type="number" placeholder="Masukan angka...." className="input input-bordered w-full max-w-xs"
                         onChange={e=>setAngkaFaktoral(e.target.value)} />
                <label className="label">
                {error&&angkaFaktoral < "0" ?
                  <label className="text-red-900" >Tidak bisa menghitung faktorial</label>:""}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Hasil faktorial</span>
                </label>
                <input disabled type="text" placeholder="Hasil" 
                        className="input input-bordered w-full max-w-xs"
                        onChange={handleChange}
                        value={hasilFaktoral} />
              </div>
              <div className="card-actions justify-end mt-3">
                <button type="submit" className="btn btn-success">Hitung</button>
              </div>
            </form>
          </div>
      </div>
    </div>
  );
}

export default App;
