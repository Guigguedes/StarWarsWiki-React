import React from 'react'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import MenuOptions from '../components/MenuOptions'
import { Grid } from '@mui/material'
import { LinkedIn, GitHub } from '@mui/icons-material'
import Gabi from "../assets/images/Gabi.jpg"
import Gui from "../assets/images/Gui.jpg"

export default function Sobre() {
  return (
    <>
      <Grid container style={{ padding: 10 }}>
        <Grid item md={12} xs={12} sm={12}>
          <Cabecalho />
        </Grid>
        <Grid item md={12} xs={12} sm={12}>
          <MenuOptions />
          <div style={{textAlign:"center"}}> 
            <h1>Equipe</h1>
          </div>
            <div className="card">
              <div className='gabi'>
                <img className='img' src={Gabi} />
                <h1>Gabriela Giolo</h1>
                <p>Acadêmica de Ciência da Computação</p>
                <p>Vila Maria - RS</p>
                <div className='link-group'>
                  <a href='https://www.linkedin.com/in/gabriela-giolo' target='_blank'><LinkedIn/></a>
                  <a href='https://github.com/gabigiolo8' target='_blank'><GitHub/></a>
                </div>
              </div>
              <div className="card">
                <div className='gui'>
                  <img className='img' src={Gui} />
                  <h1>Guilherme Garcia Guedes</h1>
                  <p>Acadêmico de Ciência da Computação</p>
                  <p>Passo Fundo - RS</p>
                  <div className='link-group'>
                    <a href='https://www.linkedin.com/in/guigguedes08' target='_blank'><LinkedIn/></a>
                    <a href='https://github.com/guigguedes' target='_blank'><GitHub/></a>
                  </div>
                </div>
              </div>   
            </div>
      </Grid>
        <Grid item md={12} xs={12} sm={12}>
          <Rodape />
        </Grid>
      </Grid>
    </>
  )
}