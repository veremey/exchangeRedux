import { changeAmount } from '../store/rates'
import { useDispatch } from 'react-redux'

export const AmountField = ({ amount }) => {
	const dispatch = useDispatch()
	const onChange = (e) => {
		dispatch(changeAmount(e.target.value))
	}

	return (
		<form className='ExchangeRate-form'>
			<input
				aria-label='Amount in base currency'
				type='text'
				value={amount}
				onChange={onChange}
			/>
		</form>
	)
}
