import { changeCurrencyCode, getSupportedCurrencies } from '../store/rates'
import { useDispatch, useSelector } from 'react-redux'

export const CurrencyCodePicker = ({ currencyCode }) => {
	const dispatch = useDispatch()
	const supportedCurrencies = useSelector(getSupportedCurrencies)

	const onChange = (e) => {
		dispatch(changeCurrencyCode(e.target.value))
	}

	return (
		<select className='currencyCode' value={currencyCode} onChange={onChange}>
			{supportedCurrencies.map((code, i) => (
				<option key={`code + ${i}`} value={code}>
					{code}
				</option>
			))}
		</select>
	)
}
