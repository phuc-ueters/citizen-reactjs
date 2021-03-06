import { useState, useEffect } from 'react'
import styled from 'styled-components'
import NiceAvatar, { genConfig } from 'react-nice-avatar'

const ToggleBody = styled.div`
	width: 6rem;
	height: 3rem;
	// position: absolute;
	// top: calc(50% - 4rem / 2);
	// left: calc(50% - 7rem / 2);
	position: relative;
	border: 2px solid ${props => props.theme.palete.pink};
	background: white;
	border-radius: 2rem;
	transform: rotate(0deg);
	transition: 1.5s cubic-bezier(0.68, -0.15, 0.265, 1.35);
	&.on{
		transform: rotate(180deg);
		border: 2px solid ${props => props.theme.palete.blue};
  		transition: 1.5s cubic-bezier(0.68, -0.15, 0.265, 1.35);
	}
`
const ToggleBtn = styled.div`
	width: 2rem;
	height: 2rem;
	position: absolute;
	top: calc(50% - 2rem / 2);
	left: calc(27% - 2rem / 2);
	border-radius: 2rem;
	background: ${props => props.theme.palete.pink};
	cursor: pointer;
	transform: rotate(0deg);
	transform-origin: 130% 115%;
	transition: 1.5s cubic-bezier(0.68, -0.15, 0.265, 1.35);

	&.on{
		transition: 1.5s cubic-bezier(0.68, -0.15, 0.265, 1.35);
		transform: rotate(-361deg);
		background:  ${props => props.theme.palete.blue};
		transform-origin: 130% 150%;
	}
`

export const Toggle = ({onToggle=()=>{}, config, style, rest}) => {
	const [state, setState] = useState(false)

	useEffect(()=>{
		onToggle(state)
	}, [])

	const toggle = () =>{
		onToggle(!state)
		setState(!state)
	}
	return(
		<ToggleBody className={state ? 'on' : ''} style={style} {...rest}>
			<ToggleBtn onClick={toggle} className={state ? 'on' : ''} >
			</ToggleBtn>
		</ToggleBody>
	)
}