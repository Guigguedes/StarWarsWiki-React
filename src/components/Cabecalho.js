import React from "react";
import { ContadorContext } from '../contexts/ContadorContext';

export default function Cabecalho() {
    const { contador } =    React.useContext(ContadorContext);

    return (
        <div className="cabecalho">
                    <h1 style={{color: "white", fontSize:100}}>STAR WARS WIKI</h1>
                    <div className="contador">Contador: {contador}</div>
                </div>
    );
    }