import React from "react";
import { Container, Head, Titulo, BemVindo } from './styles'

export default function StyledComponents() {
    return(
    <Container>
        <Head>
            <a>testando</a>
            <Titulo>titulo como componente</Titulo>
        </Head>
        <BemVindo cor='00ff00' tamanho={35}>
            Seja bem-vindo!
        </BemVindo>
    </Container>
    )
}

