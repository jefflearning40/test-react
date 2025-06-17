import React, { useState, useEffect } from 'react';
import './style.scss';

function App() {
  const [amount, setAmount] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('Norwegian Krone');
  const [exchangeRate, setExchangeRate] = useState(11.76);
  const [convertedAmount, setConvertedAmount] = useState(11.76);

  const currencies = [
    { name: 'Australian Dollar', code: 'AUD', rate: 1.62 },
    { name: 'Bulgarian Lev', code: 'BGN', rate: 1.96 },
    { name: 'Brazilian Real', code: 'BRL', rate: 5.34 },
    { name: 'Canadian Dollar', code: 'CAD', rate: 1.47 },
    { name: 'Swiss Franc', code: 'CHF', rate: 0.98 },
    { name: 'Chinese Yuan', code: 'CNY', rate: 7.24 },
    { name: 'Czech Koruna', code: 'CZK', rate: 24.57 },
    { name: 'Danish Krone', code: 'DKK', rate: 7.45 },
    { name: 'Euro', code: 'EUR', rate: 0.93 },
    { name: 'British Pound', code: 'GBP', rate: 0.80 },
    { name: 'Hong Kong Dollar', code: 'HKD', rate: 7.83 },
    { name: 'Norwegian Krone', code: 'NOK', rate: 11.76 },
    { name: 'New Zealand Dollar', code: 'NZD', rate: 1.69 },
    { name: 'Polish Zloty', code: 'PLN', rate: 4.32 },
    { name: 'Swedish Krona', code: 'SEK', rate: 11.58 },
    { name: 'Singapore Dollar', code: 'SGD', rate: 1.35 },
    { name: 'Thai Baht', code: 'THB', rate: 36.34 },
    { name: 'US Dollar', code: 'USD', rate: 1.00 },
  ];

  // Filter currencies based on search term
  const filteredCurrencies = currencies.filter(currency =>
    currency.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Update converted amount when amount or currency changes
  useEffect(() => {
    const selected = currencies.find(currency => currency.name === selectedCurrency);
    if (selected) {
      setExchangeRate(selected.rate);
      setConvertedAmount((amount * selected.rate).toFixed(2));
    }
  }, [amount, selectedCurrency]);

  return (
    <div className="converter-container">
      <h1>Currency Converter</h1>
      <p>Convert from Euro (€)</p>

      <div className="input-group">
        <label>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
        />
      </div>

      <div className="input-group">
        <label>Search Currency</label>
        <input
          type="text"
          placeholder="Type to filter..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Select Currency</label>
        <select
          value={selectedCurrency}
          onChange={(e) => setSelectedCurrency(e.target.value)}
        >
          {filteredCurrencies.map((currency) => (
            <option key={currency.code} value={currency.name}>
              {currency.name} ({currency.code})
            </option>
          ))}
        </select>
      </div>

      <div className="result">
        <p>{convertedAmount}</p>
        <p>{selectedCurrency}</p>
      </div>
    </div>
  );
}

export default App;
