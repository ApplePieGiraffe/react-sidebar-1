import styled from 'styled-components'
import MenuOption from './MenuOption'
import { Data } from './Data'

const Container = styled.div`
    position: fixed;
    top: 0;
    left: ${({ active }) => (active ? '0' : '-100%')};
    z-index: 1;
    display: flex;
    flex-direction: column;
    width: 20rem;
    height: 100vh;
    padding-top: 5.25rem;
    background: #15171c;
    color: white;
    transition: left 1s ease;
`

function Sidebar({ isSidebarActive }) {
    return (
        <Container active={isSidebarActive}>
            {Data.map((item) => {
                return (
                    <MenuOption option={item}/>
                )
            })}
        </Container>
    )
}

export default Sidebar