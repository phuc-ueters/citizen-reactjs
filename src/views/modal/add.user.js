import {useState, useEffect} from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector  } from 'react-redux'

import {
	ModalForm, Title, Row, Input, InputDate, LoadingButton, Grid, Selector, Toggle
} from '../../_components'
import { locationActions, modalActions, userActions } from '../../_actions'


import NiceAvatar, { genConfig } from 'react-nice-avatar'


export default function AddUserForm({show, payload, ...rest}){
	const loading = useSelector(state => state.createUser.loading)
	const locations = useSelector(state => state.locations.items)
	const account = useSelector(state => state.authentication.user)

	const roles = {A0: [{name: 'A1', code: 'A1'}], A1: [{name: 'A2', code: 'A2'}], A2: [{name: 'A3', code: 'A3'}], A3: [{name: 'B1', code: 'B1'}], B1: [{name: 'B2', code: 'B2'}]}
	const [manAvatar, setManAvatar] = useState(genConfig({sex: 'man'}))
	const [womanAvatar, setWomanAvatar] = useState(genConfig({sex: 'woman'}))
	const [gender, setGender] = useState(true)
	const [form, setForm] = useState({
		username: '',
		email: '',
		location_code: `${payload ? payload.code : ''}`,
		role: roles[account.role][0].code,
		password: ''
	})	
	const dispatch = useDispatch()
	
	useEffect(()=>{
		if(!locations)
			dispatch(locationActions.getChildsLocation())
			
	}, [])

	const handleChange = (e) =>{
		setForm({...form, [e.target.name]: e.target.value})
	}
	const handleSubmit = async () =>{
		dispatch(userActions.create(
			{...form,
				username: form.location_code,
				avtConfig: gender ? manAvatar : womanAvatar
			}, () => {
					dispatch(modalActions.close())
			})
		)
	}

	return (
		<ModalForm show={show} className='appear' style={{'z-index': '2'}}>
			<Row>
				<Title>Create account</Title>
			</Row>
			<Row style={{'justifyContent': 'center','flexWrap': 'wrap'}}>
				{/* <Grid container sm={12} md={6} lg={5} flexDirection='column'> */}
				<Grid container flexDirection='column'>
					<Row>
						<Selector 
							name='location_code' value={{name: form.location_code,code: form.location_code}} 
							options={locations} onChange={handleChange} 
							placeholder='Location' style={{flexShrink: 1}}
							disabled={payload && payload.isUpdate ? true : false}
						/>
						<Selector 
							name='role' 
							value={{name: form.code, code: form.code}}
							options={roles[account.role]} 
							onChange={handleChange} 
							placeholder='Role'
							style={{flexShrink: 2}}
						/>

						{/* <span style={{display: 'inline-block'}}>
							Role: {account.role === 'A1' ? 'A2' : account.role === 'A2' ? 'A3' : account.role === 'A3' ? 'B1' : account.role === 'B1' ? 'B2' : 'N/A'}
						</span> */}
					</Row>
					<Row>
						<Input label='email' name='email' onChange={handleChange} type='email' required/>
					</Row>
					<Row>
						<Input label='password' name='password' onChange={handleChange} type='password' required/>
					</Row>
				</Grid>
				{/* <Grid container sm={12} md={6} lg={5} flexDirection='column'> */}
				<Grid container flexDirection='column'>
					<Row style={{'justify-content': 'center'}}>
						{gender ? 
							<NiceAvatar style={{ width: '6rem', height: '6rem' }} {...manAvatar}/>
							:
							<NiceAvatar style={{ width: '6rem', height: '6rem' }} {...womanAvatar}/>
						}
					</Row>
					<Row style={{'justify-content': 'center'}}>
						<Toggle onToggle={(state)=>setGender(state)}/>
					</Row>
				</Grid>
			</Row>
			<Row style={{'justify-content': 'center'}}>
				<LoadingButton type='submit' loading={loading} variant='contained' onClick={handleSubmit}>Create</LoadingButton>
			</Row>
		</ModalForm>
	)
}
