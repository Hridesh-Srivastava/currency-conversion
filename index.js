import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_PzAClKWRtHEmVW6hO1xipGpan6v86yxQ0Un5eA2v');

export async function convertCurrency(fromCurrency , toCurrency , units){
    const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });
   const multi = res.data[toCurrency];
    return multi * units;
}
