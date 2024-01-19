import { useState } from "react";
import "./bank.css"

const Bank = ({ bankSoldo, setBankSoldo }) => { // props


    const [inputFieldValue, setInputFieldValue] = useState("")


    const einzahlen = () => {
        setBankSoldo({
            soldNumber: bankSoldo.soldNumber + Number(inputFieldValue),
            inputFieldValue: ""
        })
    }
    const auszahlen = () => {
        setBankSoldo({
            soldNumber: bankSoldo.soldNumber - Number(inputFieldValue) < 0 ? alert("du hast nicht genung Gled auf Konto") : bankSoldo.soldNumber - Number(inputFieldValue),
            inputFieldValue: ""
        })
    }


    console.log(inputFieldValue);


    return (<>


        <div className="bankContainer">
            <h2>Banana Bank Konto</h2>
            <p>In dein KONTO sind: <hr /><span>{bankSoldo.soldNumber}</span> €</p>
            <input
                type="number"
                id="inputField"
                placeholder="gib summe ein"
                onChange={(e) => Number(setInputFieldValue(e.target.value))}



            />


            <div className="buttons">
                <button onClick={einzahlen}>Einzahlen</button>
                <button onClick={auszahlen}>Auszahlen</button>
            </div>



        </div>

    </>);
}

export default Bank;