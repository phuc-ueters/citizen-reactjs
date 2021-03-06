import { useSelector, useDispatch } from 'react-redux'

import LoginForm from './login.user'
import AddUserForm from './add.user'
import AddLocationForm from './add.location'
import AddSchedule from './add.schedule'
import ShowInfoForm from './show.info'

export default function ModalProvider(){
	const formName = useSelector( state => state.modal.name )
	const show = useSelector( state => state.modal.show )
	const payload = useSelector( state => state.modal.payload )

	switch(formName){
		case 'login':
			return <LoginForm show={show}/>
		case 'add_user':
			return <AddUserForm show={show} payload={payload}/>
		case 'add_location':
			console.log(payload)
			return <AddLocationForm show={show} payload={payload}/>
		case 'show_info':
			return <ShowInfoForm show={show} payload={payload}/>
		default:
			return <></>
	}
}