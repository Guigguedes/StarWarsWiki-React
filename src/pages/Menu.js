import { Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";

export default function Menu(props) {

    const navigate = useNavigate();

    const logoff = () => {
        sessionStorage.removeItem("login");
        navigate("/")
    }

  return (
    <>
        <Grid container style={{padding:10}}>
            <Grid item md={12} xs={12} sm={12}>
                <Cabecalho />
            </Grid>

            <Grid item md={12} xs={12} sm={12}>
                <div className="menu">
                    <div className="itemMenu">Home</div>
                    <div className="itemMenu">Filmes</div>
                    <div className="itemMenu">Naves</div>
                    <div className="itemMenu">Personagens</div>
                    <div className="itemMenu">Planetas</div>
                    <div className="itemMenu">Espécies</div>
                    <div className="itemMenu">Dúvidas</div>
                    <div className="itemMenu">Sobre</div>
                    <div className="itemMenu" onClick={logoff}>Sair</div>
                </div>
                <div className="corpo">
                    Corpo
                

                </div>
            </Grid>

            <Grid item md={12} xs={12} sm={12}>
                <Rodape/>
            </Grid>

        </Grid>
   </>
  );
 
}