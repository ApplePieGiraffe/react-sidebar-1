import styled from 'styled-components'

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;

    h1 {
        margin-bottom: .5rem;
        font-family: 'Roboto', sans-serif;
        font-size: 2rem;
        font-weight: 300;
    }

    p {
        margin: 0;
        font-family: 'Roboto', sans-serif;
        font-size: 1.5rem;
        font-weight: 300;
    }
`

function Hero() {
    return (
        <Main>
            <h1>This is a sidebar created with React.</h1>
            <p>IDK why the animated icon doesn't work.</p>
        </Main>
    )
}

export default Hero;