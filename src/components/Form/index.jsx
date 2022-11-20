import { useState } from 'react'
import './form.css'
export const Form = ({addForm}) => {
    const [dataInput, setDataInput] = useState({
            description: "",
            type: "entrada",
            value: 0
        }
    )
    function getDataForm(event){
        event.preventDefault()
        addForm(dataInput)
        
      
        
    }
    return (
        <form className="formContainer" onSubmit={getDataForm}>
            <div className='formHead'>
                <label htmlFor="" className='texts'>Descrição</label>
                <input 
                className='inputs' 
                type="text" 
                placeholder='Digite sua descrição'
                onChange={(event)=> {setDataInput({...dataInput,description: event.target.value})}}
                />
                <span className='textGrey'>Ex: Compra de roupas</span>
            </div>
            <div className="boxInput">
               <div className='boxValue'>
                <label htmlFor="" className='texts'>Valor</label>
                <input 
                className='inputs' 
                type="number" 
                placeholder='1               R$'
                onChange={(event)=> {setDataInput({...dataInput, value:( parseInt(event.target.value)) })}}
                />
               </div>
                <div className='boxSelect'>
                <label htmlFor="" className='texts'>Tipo de valor</label>
                <select className='inputs' onChange={(event)=> {setDataInput({...dataInput,type: event.target.value})}}>
                    <option value="entrada">Entrada</option>
                    <option value="saida">Saída</option>
                </select>
                </div>
            </div>
            <button type='submit' className='btnIsert'>Inserir valor</button>
            
        </form>
    )
}