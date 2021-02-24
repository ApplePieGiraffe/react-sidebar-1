import { useState } from 'react'
import styled from 'styled-components'
import * as FaIcons from 'react-icons/fa'

const Link = styled.a`
	position: relative;
	display: flex;
	align-items: center;
	padding: 1.5rem 2rem;
	color: white;
	font-size: 1.5rem;
	text-decoration: none;

	&:hover {
		background: #2b2e35;

		&::before {
			width: 0.5rem;
			transition: width 0.3s;
		}

		& * {
			transform: translateX(1rem);
		}
	}

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 0;
		height: 100%;
		background-color: white;
	}

	* {
		transition: transform 0.5s;
	}

	svg {
		margin-right: 1.5rem;
	}

    span {
        margin-right: auto;
    }
`

const SubLink = styled(Link)`
	padding-left: 4rem;
	background: #353535;
	cursor: pointer;

	&:hover {
		background: #353535;
	}
`

function MenuOption({ option }) {
	const [activeOptions, setActiveOptions] = useState(false)

	function toggleOptions(e) {
        e.preventDefault()
		setActiveOptions(!activeOptions)
	}

	return (
		<>
			<Link href={option.path} onClick={toggleOptions}>
				{option.icon}
				<span>{option.name}</span>
				{option.options && activeOptions ? (
					<FaIcons.FaAngleDown />
				) : option.options ? (
					<FaIcons.FaAngleRight />
				) : null}
			</Link>
			{activeOptions && option.options.map((item, index) => {
				return (
					<SubLink key={index}>
						{item.icon}
						<span>{item.name}</span>
					</SubLink>
				)
			})}
		</>
	)
}

export default MenuOption