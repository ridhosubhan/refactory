import './App.css';
import React, { useState } from "react";

function App() {
  const [nama,setNama]=useState('')
  const [peran,setPeran]=useState('')
  const [error,setError]=useState(false)

  const handleSubmit=(e)=>{
      e.preventDefault();
      if(nama.length==0||peran.length==0){
          setError(true)
          document.getElementById('pesan-Modal').checked = true;
      }
      if(nama&&peran)
      {
        console.log("First Name: ",nama,"\nLast Name: ",peran)
        document.getElementById('main-Modal').checked = true;
      }
  }

  const closeModal = async (e) => {
    e.preventDefault()
    document.getElementById('pesan-Modal').checked = false;
  }
  
  const closeModalMain = async (e) => {
    e.preventDefault()
    document.getElementById('main-Modal').checked = false;
    window.location.reload();
  }

  return (

    <div className="grid place-items-center h-screen">

    {/* MODAL  ERROR */}
    <input type="checkbox" id="pesan-Modal" className="modal-toggle" />
    <div className="modal">
      <div className="modal-box">
          <h1 className="font-bold text-lg">Warning</h1>
        {error&&nama.length<=0?
          <label className="text-red-900 font-bold">Nama Harus Diisi</label>:""
        }
        <br/>
        {error&&peran.length<=0?
                    <label className="text-red-900 font-bold mt-3">Pilih Peranmu Untuk Memulai Game</label>:""}
        <div className="modal-action">
          <button onClick={(e) => closeModal(e)} className="btn">Oke</button>
        </div>
      </div>
    </div>
    {/* MODAL  ERROR */}
    
    {/* MODAL  TYDACK ERROR */}
    <input type="checkbox" id="main-Modal" className="modal-toggle" />
    <div className="modal">
      <div className="modal-box">
          <h1 className="font-bold text-lg">Selamat Datang!!</h1>
          <h3 className="font-bold text-lg">Selamat Bermain di Dunia Werewolf!!</h3>
          <hr></hr>

          <p> Nama Kamu : {nama}</p>
          <p> Peran Kamu : {peran}</p>
          
        <div className="modal-action">
          <button onClick={(e) => closeModalMain(e)} className="btn">MAIN</button>
        </div>
      </div>
    </div>
    {/* MODAL  TYDACK ERROR */}


      <div className="card lg:card-side bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Dunia Werewolf</h2>
            <form onSubmit={handleSubmit} type="POST">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Nama Pemain</span>
                </label>
                <input type="text" placeholder="Nama...." className="input input-bordered w-full max-w-xs"
                         onChange={e=>setNama(e.target.value)} />
                <label className="label">
                {error&&nama.length<=0?
                  <label className="text-red-900" >Nama Harus Diisi</label>:""}
                </label>
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Role</span>
                </label>
                <select className="select select-bordered"onChange={e=>setPeran(e.target.value)}>
                  <option disabled selected>Pilih Role...</option>
                  <option value="Penyihir" >Penyihir</option>
                  <option value="Guard">Guard</option>
                  <option value="Werewolf">Werewolf</option>
                </select>
                <label className="label">
                  {error&&peran.length<=0?
                    <label className="text-red-900">Pilih Peranmu Untuk Memulai Game</label>:""}
                </label>
              </div>

              <div className="card-actions justify-end mt-3">
                <button type="submit" className="btn btn-success">KIRIM</button>
              </div>
            </form>
          </div>
      </div>
    </div>
  );
}

export default App;
