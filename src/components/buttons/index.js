import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledButton = styled.button`
	all: unset;
	cursor: pointer;
	position: relative;
	border-radius: 5px;
	padding: 8px 24px;
	border: 0px;
	overflow: hidden;
	box-shadow: 5px 5px 10px #E5E5E5;
	background-color: ${props => props.bgcolor === 'secondary' ? props.theme.palete.secondary.main :
															   props.theme.palete.primary.main};
	color: 				${props => props.color === 'primary' ? props.theme.palete.primary.main :
								 							   props.theme.palete.secondary.main};
	&:after{
		content: '';
		width: 100%;
		height: 100%;
		background-color: #000;
		opacity: 0;
		position : absolute;
		top: 0;
		left: 0;
		
	}
	${props => props.disabled ? `
		pointer-events: none;
		&:after{
			background-color: #fff;
			opacity: 0.5;
		}
	` : ''};
	${props => ({...props.sx})};
`
const ContainedButton = styled(StyledButton)`
	&:hover:after{
		opacity: 0.3;
		transition: 0.3s all ease-in-out;
	}
`		
const OutlinedButton = styled(StyledButton)`
	background-color: transparent;
	border: 2px solid;
	&:hover:after{
		opacity: 0.3;
		transition: 0.3s all ease-in-out;
	}
`	
const TextButton = styled(StyledButton)`
	background-color: transparent;
	box-shadow: none;
	&:hover:after{
		opacity: 0.3;
		transition: 0.3s all ease-in-out;
	}
`		
export const LoadingButton = ({variant, loading, children, ...rest}) => {
	return (
		<>
			{variant === 'contained' ? 	<ContainedButton {...rest} disabled={loading}>
											{children }
											{loading ? <i className="fa-spin fas fa-circle-notch" style={{'margin-left': '4px'}}/>: ''}
										</ContainedButton> : 
			 variant === 'outlined' ? 	<OutlinedButton {...rest}>
			 								{children}
											{loading ? <i className="fa-spin fas fa-circle-notch" style={{'margin-left': '4px'}}/>: ''}
			 							</OutlinedButton> :
			 							<TextButton {...rest}>
			 								{children}
											{loading ? <i className="fa-spin fas fa-circle-notch" style={{'margin-left': '4px'}}/>: ''}
			 							</TextButton> 
			}
		</>
	)
}
export const Button = ({variant, children, ...rest}) => {
	return (
		<>
			{variant === 'contained' ? 	<ContainedButton {...rest}>{children}</ContainedButton> : 
			 variant === 'outlined' ? 	<OutlinedButton {...rest}>{children}</OutlinedButton> :
			 							<TextButton {...rest}>{children}</TextButton> 
			}
		</>
	)
}