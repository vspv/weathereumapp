var React = require('react');
var ZipCode = require('./ZipCode');
var Forecast = require('./Forecast');
var Detail = require('./Detail');
var ReactRouter = require('react-router-dom');
var BrowserRouter = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
import {geolocated} from 'react-geolocated';
/*Router отслеживает линки и рендерит компоненты,
в зависимости от линка.
App это ROOT компонент , который рендерит Router
 который зависит от элементов,
 header зависит от зипкода
 ROOt Page от зипкода
 Forecast от DayItems
 Создём BrowserRouter и делаем jsx разметку*/
class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div className='container'>
          <Route render={function (props) {
            return (
              <div className='navbar' >
              <img src = "app/images/logo.png" alt = "Logo" />
                <h1>Weathereum</h1>
                {/* zipCode компонент*/}
                  <ZipCode
                  direction='row'
                  onSubmitZipcode={function(city){
                    props.history.push({
                      pathname: '/forecast',
                      search: '?city=' + city
                    });
                  }}
                  zipcode={123} />
              </div>
            )
          }} />
          {/* сопоставляет Route*/}
          <Route exact path='/' render={function (props) {
            return (
              <div className='home-container' style={{backgroundImage: "url('app/images/pattern.png')"}}>
                <h1 className='header'>Enter a City</h1>
                {/* отправляет функцию в компонент*/}
                <ZipCode
                  direction='column'
                  onSubmitZipcode={function (city) {
                    props.history.push({
                      pathname: '/forecast',
                      search: '?city=' + city
                    })
                  }}
                  zipcode={123} />
              </div>
            )
          }} />
          {/* путь к компонентам*/}
          <Route path='/forecast' component={Forecast} />

          <Route path='/details/:city' component={Detail} />
        </div>
      </BrowserRouter>
    )
  }
}

module.exports = App
