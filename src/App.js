import React from 'react';
import { Cards, Chart, CountryPicker } from './Components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {
  state = {
    data: {},
    country: ''
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  handleCountryChange = async country => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div
        style={{
          backgroundImage: `url("https://image.freepik.com/free-vector/white-abstract-background_23-2148806276.jpg")`
        }}
      >
        <div className={styles.container}>
          <text>
            <b>
              <h1>Global and Country Wise Cases of Covid-19</h1>
            </b>
          </text>
          <img
            className={styles.image}
            src="data:image/jpeg;base64,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"
          />
          <br />

          <br />

          <br />
          <br />
          <Cards data={data} country={country} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart data={data} country={country} />
        </div>
      </div>
    );
  }
}

export default App;
