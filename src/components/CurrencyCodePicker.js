import { changeCurrencyCode } from '../store/rates';
import { useDispatch } from 'react-redux';

export const CurrencyCodePicker = ({
  supportedCurrencies,
  currencyCode,
}) => {
  const dispatch = useDispatch();
  
  const onChange = (e) => {
    dispatch(changeCurrencyCode(e.target.value))
  }

  return (
    <select className="currencyCode" 
      value={currencyCode}
      onChange={onChange}
      >
      {supportedCurrencies.map((code) => (
        <option key={code} value={code}>
          {code}
        </option>
      ))}
    </select>
  );
}
