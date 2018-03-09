import React, { Component } from 'react'
import './App.css'
import Dorade from './doradegrile.jpg'
import Riz from './rizherbe.jpg'
import Ble from './recetteiconnu.jpg'
import FiletP from './filetdepoison.jpg'

const tableau = [
  {
    name: 'Salade de Dorade',
    image: Dorade,
    prix: '14€',
    description: 'Darne de Dorade sur sa salade variée accompagner de son couli acidulé. '
  },
  {
    name: 'Filet de poisson dans sa sauce',
    image: FiletP,
    prix: '17€',
    description: 'Feuilleté de pomme de terre accompagée de son filet sur son coulis naturel.'
  },
  {
    name: 'Blanc fermier',
    image: Ble,
    prix: '15€',
    description: 'Blanc fermier et son marin orangé au repos sur son nid de céreale végétale . '
  }
]

class App extends Component {
  Comp = () => {
    alert('MOl')
  }

  render () {
    return (
      <div className='App'>
        <div className='global'>
          {tableau.map((el, i) => {
            return (
              <div className='myElement' key={i}>
                <div className='divyImg'>
                  <img class='myImg' src={el.image} />
                </div>
                <div className='away'>
                  <p><b> Nom :</b> {el.name}</p>

                  <p><b>Descrpition :</b> {el.description}</p>

                  <p><b>Prix :</b>{el.prix}</p>
                  <a class='btn-floating btn-large waves-effect waves-light red'>
                    <i class='material-icons' onClick={this.Comp}>add</i>
                  </a>

                </div>

              </div>
            )
          })}

        </div>
      </div>
    )
  }
}

export default App
