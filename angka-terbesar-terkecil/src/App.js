import { useState } from "react";
import "./App.css";

function App() {
  const [formFields, setFormFields] = useState([{ angka: "" }]);
  const [angkaTerkecil, setAngkaTerkecil] = useState("");
  const [angkaTerbesar, setAngkaTerbesar] = useState("");

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(formFields);

    var min = Math.min(...formFields.map((item) => item.angka));
    var max = Math.max(...formFields.map((item) => item.angka));
    console.log("MIN : " + min);
    console.log("MAX : " + max);

    setAngkaTerkecil(min);
    setAngkaTerbesar(max);
  };

  const addFields = () => {
    let object = {
      angka: "",
    };

    setFormFields([...formFields, object]);
  };

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  };

  return (
    <div className="App">
      {/* ADAPT */}
      <div className="bg-neutral grid place-items-center h-screen">
        <div className=" card lg:card-side bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title mb-2">
              Hitung Angka Terbesar dan Terkecil
            </h2>
            <form onSubmit={submit} type="POST">
              {formFields.map((form, index) => {
                return (
                  <div key={index} className="grid grid-cols-3 gap-0">
                    <div className="col-span-2 form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text">Masukan angka</span>
                      </label>
                      <input
                        name="angka"
                        type="number"
                        placeholder="Masukan angka...."
                        className="input input-bordered w-full max-w-xs"
                        value={form.angka}
                        onChange={(event) => handleFormChange(event, index)}
                      />
                    </div>
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text">Hapus field</span>
                      </label>
                      <button
                        type="button"
                        className="btn btn-error"
                        onClick={() => removeFields(index)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
            </form>
            <div className="card-actions justify-end mt-3">
              <button
                onClick={addFields}
                type="button"
                className="btn btn-primary"
              >
                Tambah Field
              </button>
              <button
                onClick={submit}
                type="button"
                className="btn btn-success"
              >
                Hitung
              </button>
            </div>
            {/* HASILNYA */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Hasil</span>
              </label>
              <textarea
                disabled
                className="textarea textarea-bordered h-32"
                placeholder="hasil"
                value={
                  "Kumpulan angka : " +
                  formFields.map((form) => {
                    return form.angka;
                  })
                }
              ></textarea>
              <textarea
                disabled
                className="textarea textarea-bordered h-32"
                placeholder="hasil"
                value={
                  "Terbesar : " +
                  angkaTerkecil +
                  "\n" +
                  "Terkecil : " +
                  angkaTerbesar
                }
              ></textarea>
            </div>
            {/* HASILNYA */}
          </div>
        </div>
      </div>
      {/* ADAPT */}
    </div>
  );
}

export default App;
