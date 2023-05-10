import { getAmount, getCurrencyCode, getCurrencyData } from '../store/rates'

import { AmountField } from './AmountField'
import { CurrencyCodePicker } from './CurrencyCodePicker'
import { RateTable } from './RateTable'
import { useSelector } from 'react-redux'

export const ExchangeRate = () => {
	const amount = useSelector(getAmount)
	const currencyCode = useSelector(getCurrencyCode)
	const currencyData = useSelector(getCurrencyData)

	return (
		<>
			<section>
				<h1 className='ExchangeRate-header'>
					Exchange Rates <CurrencyCodePicker currencyCode={currencyCode} />
				</h1>
			</section>
			<section>
				<AmountField amount={amount} />
			</section>
			<section>
				<RateTable currencyData={currencyData} amount={amount} />
			</section>
		</>
	)
}
