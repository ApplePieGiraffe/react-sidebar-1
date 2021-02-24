import styled from 'styled-components'
import UseAnimations from 'react-useanimations'
import menu2 from 'react-useanimations/lib/menu2'

const StyledHeader = styled.header`
	position: relative;
	z-index: 10;
	padding: 1rem 1.5rem;
	background: #15171c;
`

function Header({ toggleSidebarFunc }) {
	return (
		<StyledHeader>
			<UseAnimations
				animation={menu2}
				size={56}
				speed={1.5}
				strokeColor={'white'}
				wrapperStyle={{ cursor: 'pointer' }}
				onClick={toggleSidebarFunc}
			/>
		</StyledHeader>
	)
}

export default Header
