import { useState } from "react"

 export default function Form(){
    const[form,setForm]=useState({name:"",email:"",isVis:true,mode:"",favCar:""});
function changeHandle(event){
console.log(form);
const{name,value,checked,type}=event.target
    setForm(prevData=>{
        return {
            ...prevData,
            [name]:type==="checkbox"?checked:value
        }
    })
}
// function changeHandle(event){
//     setForm(prevData=>{
//         return {
//             ...prevData,
//             [event.target.name]:event.target.value
//         }
//     })
// }
function handleSubmit(event){
event.preventDefault();
console.log("after submitting");
console.log(form);
}
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                placeholder="name"
                name="name"
                onChange={changeHandle}
                value={form.name}
                />
                <br />
                <h1>{form.name}</h1>
                <br />
                <input type="text"
                placeholder="email"
                name="email"
                onChange={changeHandle}
                value={form.email}
                />
                <br />
                <br />
                <input type="checkbox" checked={form.isVis} name="isVis" onChange={changeHandle} id="isVis" />
                <label htmlFor="isVis">Am i checked?</label>
                <br />
                <br />
                <input type="radio" name="mode" id="online" value="online" checked={form.mode==="online"} onChange={changeHandle}/>
                <label htmlFor="online">ONline</label> 
                  <br />
                <br />
                <input type="radio" name="mode" id="offline" value="offline" checked={form.mode==="offline"} onChange={changeHandle}/>
                <label htmlFor="offline">offline</label>
                <br />
                <br />
                <select name="favCar" id="favCar" value={form.favCar} onChange={changeHandle}>
                    <option value="swift">Swift</option>
                    <option value="nano">nano</option>
                    <option value="thar">Thar</option>
                    <option value="verna">varn</option>
                </select>
                <br />
<button>Submit</button>
            </form>
        </div>
    )
 }