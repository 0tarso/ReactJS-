import React, { useState } from 'react'
import "./style.css"

const Form = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cargo, setCargo] = useState("Dev Frontend")

    const [showData, setShowData] = useState(false)

    return (
        <div className='containerForm'>

            Email:
            <input type='email' name="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            Senha:
            <input type='password' name="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            Cargo:
            <select name="Cargo" value={cargo}
                onChange={(e) => setCargo(e.target.value)}
            >
                <option value="Dev Frontend">Dev Front</option>
                <option value="Dev Backend">Dev Back</option>
                <option value="Dev Ops">DevOps</option>
            </select>


            <button onClick={() => setShowData(!showData)}> Log Inputs</button>

            {showData
                ?
                <div>
                    <h2> {email}</h2>
                    <h3> {password}</h3>
                    <p> {cargo}</p>
                </div>

                : <p>Sem dados</p>
            }


        </div>
    )
}

export default Form