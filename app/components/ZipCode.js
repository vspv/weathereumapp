var React = require('react');
var PropTypes = require('prop-types');
var ReactRouter = require('react-router-dom');
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

class ZipCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: ''
    };
    //функция передаёт zipcode сначала в метод для далнейшего использования,
    // а потом записывает его в state
    this.onChange = (zipcode) => this.setState({ zipcode })
    this.handleSubmitZipcode = this.handleSubmitZipcode.bind(this);
    this.handleUpdateZipcode = this.handleUpdateZipcode.bind(this);
  }
  handleSubmitZipcode () {
    this.props.onSubmitZipcode(this.state.zipcode)

    this.setState(function () {
      return {
        zipcode: ''
      }
    })
  }
  handleUpdateZipcode (e) {
    var zip = e.target.value;
    this.setState(function () {
      return {
        zipcode: zip
      }
    });
  }

  render() {
    const inputProps = {
      value: this.state.zipcode,
      onChange: this.onChange
    }
//разметка инпута и кнопки
    return (
      <div
        className='zipcode-container'
        style={{flexDirection: this.props.direction}}>
        <PlacesAutocomplete
          inputProps={inputProps}
          placeholder='Kiev'
          className='form-control'
          />
        <button
          type='button'
          style={{margin: 10}}
          className='btn btn-success'
          onClick={this.handleSubmitZipcode}>
            Get Weather
        </button>
      </div>
    )
  }
}
//вернёт значение
ZipCode.defaultProps = {
  direction: 'column'
}

ZipCode.propTypes = {
  direction: PropTypes.string,
}

module.exports = ZipCode;
