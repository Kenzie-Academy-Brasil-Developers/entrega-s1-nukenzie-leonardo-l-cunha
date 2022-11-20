import './total.css'
export const Total = ({listTransactions}) => {
    const data = listTransactions.reduce((previusValue,currentValue) => {
        if(currentValue.type ==="saida"){
            return -Math.abs(currentValue.value) + previusValue
        }
        return currentValue.value + previusValue
    },0)
    console.log(data)
    return (
        <div className="containerCard">
            <div className="card">
                <h3>Valor total:</h3>
                <p>$ {data}</p>
            </div>
            <span>O valor se refere ao saldo</span>
        </div>
    )
}