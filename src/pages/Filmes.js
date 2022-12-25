import React, { useState, useLayoutEffect } from 'react'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import MenuOptions from '../components/MenuOptions'
import { Grid, } from '@mui/material'
import axios from 'axios'

export default function Films() {

    const [Films, setFilms] = useState([])


    useLayoutEffect(() => {
        axios.get("https://swapi.dev/api/films/")
            .then((retorno) => setFilms(retorno.data.results))
            .catch((e) => alert(e))

    }, [])

    return (
        <>
            <Grid container style={{ padding: 10 }}>
                <Grid item md={12} xs={12} sm={12}>
                    <Cabecalho />
                </Grid>
                <Grid item md={12} xs={12} sm={12}>
                    <MenuOptions />
                </Grid>
                <div>
                    <h1 className='title'>FILMES</h1>
                    <table className="api">
                        {
                            Films.map((item, key) =>
                            <tr>
                                <td style={{widht: "50%"}}><b>Título:</b> {item.title}</td>
                                <td style={{widht: "50%"}}><b>Diretor:</b> {item.director}</td>
                            </tr>
            
                            )
                        }

                    </table>
                </div>
                <Grid item md={12} xs={12} sm={12}>
                    <Rodape />
                </Grid>
            </Grid>
        </>
    )
}