import './App.css';
import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [angkaFizz,setAngkaFizz]=useState('')
  const [angkaBuzz,setAngkaBuzz]=useState('')
  const [angkaMaks,setAngkaMaks]=useState('')
  const [angkaHasil,setAngkaHasil]=useState([])

  const [isDisabled, setDisabled] = useState(false);
  const [error,setError]=useState(false)

  function fizzBuzz(angka){
      if (angka % angkaFizz == 0 && angka % angkaBuzz == 0) {
          setAngkaHasil( current => [...current, "FizzBuzz \n"])
        }  
        else if (angka % angkaFizz == 0) {
          // console.log ("Fizz \n");
          setAngkaHasil( current => [...current, "Fizz \n"])
        } 
        else if (angka % angkaBuzz == 0) {
          // console.log("Buzz \n");
          setAngkaHasil( current => [...current, "Buzz \n"])
        } 
        else {
          // console.log( angka + "\n");
          setAngkaHasil( current => [...current, angka + " \n"])
      }
  }

  const handleSubmit=(e)=>{
      e.preventDefault();

      if(angkaFizz.length === 0 || angkaBuzz.length === 0 || angkaMaks.length === 0) {
        setError(true)
      }
      else{
        for (let i = 1; i <= angkaMaks; i++) { 
          fizzBuzz(i)
        }
        setDisabled(true);
      }

  }

  const handleChange = event => {
    setAngkaHasil(event.target.value);
  };

  const refresh = () => {
    window.location.reload()
  }

  return (

    <div className="bg-neutral grid place-items-center h-screen">
      <div className="bg-primary-content card lg:card-side bg-base-100 shadow-xl w-auto">
          <div className="card-body grid place-items-center">
            <h2 className="card-title mb-2">Fizz Buzz Program</h2>
            <form onSubmit={handleSubmit} type="POST">
              
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Masukan angka Fizz</span>
                </label>
                <input type="number" placeholder="Masukan angka fizz" className="input input-bordered w-full max-w-xs"
                         onChange={e=>setAngkaFizz(e.target.value)} />
                <label className="label">
                {error&&angkaFizz.length === 0 ?
                  <label className="text-red-900" >Wajib diisi</label>:""}
                </label>
              </div>
              
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Masukan angka Buzz</span>
                </label>
                <input type="number" placeholder="Masukan angka buzz" className="input input-bordered w-full max-w-xs"
                         onChange={e=>setAngkaBuzz(e.target.value)} />
                <label className="label">
                {error&&angkaBuzz.length === 0 ?
                  <label className="text-red-900" >Wajib diisi</label>:""}
                </label>
              </div>
              
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Masukan angka Maksimal</span>
                </label>
                <input type="number" placeholder="Masukan angka maksimal" className="input input-bordered w-full max-w-xs"
                         onChange={e=>setAngkaMaks(e.target.value)} />
                <label className="label">
                {error&&angkaMaks.length === 0 ?
                  <label className="text-red-900" >Wajib diisi</label>:""}
                </label>
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Hasil Fizz Buzz</span>
                </label> 
                <textarea disabled className="textarea textarea-bordered h-32" placeholder="hasil"
                          onChange={handleChange}
                          value={angkaHasil}>
                </textarea>
              </div>

              <div className="card-actions justify-end mt-3">
                <button onClick={refresh} type="button" className="btn btn-warning">Refresh</button>
                <button disabled={isDisabled} type="submit" className="btn btn-success">Hitung</button>
              </div>

            </form>
          </div>
      </div>
    </div>
  );
}

export default App;
