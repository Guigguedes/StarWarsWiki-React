import { Button, Grid, TextField } from "@material-ui/core";
import React, { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import login from "../services/autenticadorService"

export default function Login(props) {

    const navigate = useNavigate();

    const [lembrarme, setLembrarme] = useState(false);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    useLayoutEffect(() => {
        setEmail(localStorage.getItem("email"));
        setSenha(localStorage.getItem("senha"));
        setLembrarme(true);
    }, []);

    const armazenarEmailSenha = () => {
        setLembrarme(!lembrarme);
        if (!lembrarme) {
            localStorage.setItem("email",email);
            localStorage.setItem("senha",senha);
        } else {
            localStorage.removeItem("email");
            localStorage.removeItem("senha");
        }
    }

    const validar = async() => {
        try{
         await login(email, senha);
         sessionStorage.setItem("login", true);
         props.verificarLogin();
         navigate("/menu");

        } catch (error) {
            alert("Usuário ou senha inválidos");
        }         
    }

  return (
    <Grid container style={{padding:10}}>
        <Grid item xs={12}>
            <div style={{textAlign: "center"}}>
                <h1>Seja Bem-Vindo</h1>
                <h2>Star Wars Wiki</h2>
            </div>
        </Grid>
        <Grid item md={4} xs={12} sm={12}></Grid>
        <Grid item md={4} xs={12} sm={12} style={{backgroundColor:"white", padding:10, borderRadius:10}}>
            <div style={{marginBottom:10}}>
                <TextField
                label="Email"
                fullWidth 
                variant="standard" 
                type={"email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <TextField
                label="Senha"
                fullWidth 
                variant="standard" 
                type={"password"}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                />
            </div>
            <div>
                <FormGroup>
                <FormControlLabel 
                    control={<Checkbox/>}
                    checked={lembrarme} 
                    onChange={armazenarEmailSenha} 
                    label="Lembrar-me" />
                </FormGroup>
            </div>
            <div>
                <Button
                style={{width:"100%", marginTop:10, padding:10, backgroundColor:"#1E90FF", color:"white", border:"none", borderRadius:5}}
                onClick={validar}> 
                Entrar
                </Button>    
            </div>
        </Grid>
        <Grid item md={4} xs={12} sm={12}></Grid>
    </Grid>
  );
}