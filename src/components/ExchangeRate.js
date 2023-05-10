import { changeCurrencyCode, getAmount, getCurrencyCode, getCurrencyData, supportedCurrencies } from '../store/rates';
import { useDispatch, useSelector } from 'react-redux';

import { AmountField } from "./AmountField";
import { CurrencyCodePicker } from "./CurrencyCodePicker";
import { RateTable } from "./RateTable";
import { useEffect } from "react";

export const ExchangeRate = () => {
  const dispatch = useDispatch();
  const amount = useSelector(getAmount)
  const currencyCode = useSelector(getCurrencyCode)
  const currencyData = useSelector(getCurrencyData)

  // fetch the exchange rates the first time ..
  // useEffect(() => {
  //   dispatch(changeCurrencyCode(currencyCode))
  // }, []);

  return (
    <>
      <section>
        <h1 className="ExchangeRate-header">
          Exchange Rates{" "}
          <CurrencyCodePicker
            supportedCurrencies={supportedCurrencies}
            currencyCode={currencyCode}
          />
        </h1>
      </section>
      <section>
        <AmountField amount={amount}  />
      </section>
      <section>
        <RateTable currencyData={currencyData} amount={amount} />
      </section>
    </>
  );
}
