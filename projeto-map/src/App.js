import React, {Component} from 'react'

class App extends Component {

  state = {
    objetos :[
      {
         nome : 'Samuel',
         idade : 25 ,
         cidade : 'Ribeirão Pires',
         estado : 'São Paulo' 
      } , 
      {
        nome : 'Niedja',
        idade : 29 ,
        cidade : 'Recife',
        estado : 'Pernambuco'
      } , 
      {
        nome : 'Piter',
        idade : 30 ,
        cidade : 'São Paulo',
        estado : 'São Paulo'
      } , 
      {
        nome : 'Renan',
        idade : 26 ,
        cidade : 'Rio de Janeiro',
        estado : 'Rio de Janeiro'
      } , 
      {
        nome : 'Claudia',
        idade : 50 ,
        cidade : 'Campo Grande',
        estado : 'Mato Grosso do Sul'
      } , 
      {
        nome : 'Solange',
        idade : 62, 
        cidade : 'Recife',
        estado : 'Pernambuco'
      }
    ]
  }
  render(){
  
    return(
      <div>
        {this.state.objetos.map((item) => {
        return <h2>{`Olá , meu nome é ${item.nome} , estou com ${item .idade} anos  , moro em ${item.cidade} que pertence ao estado de  ${item.estado} !`}</h2>
      }
        )
        }
      </div>
    )
  
  
  
  }
}
export default App;