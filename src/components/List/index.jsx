import './list.css'
export const List = ({listTransactions,removeData,setFilter}) => {
   console.log(listTransactions)
    return (
        <div className="listContainer">
            <div className='listHead'>
                <h3>Resumo financeiro</h3>
                <div className="boxBtns">
                    <button  onClick={()=> setFilter("todos")} className='btnFilter'>Todos</button>
                    <button  onClick={()=> setFilter("entrada")} className='btnFilter' >Entrada</button>
                    <button  onClick={()=> setFilter("saida")} className='btnFilter' >Saída</button>
                </div>
            </div>
            <ul className="containerUl">
                
                {
                    listTransactions.length === 0 ? (
                        <li>
                            <h2 className='img'>Você ainda não possui nenhum lançamento</h2>
                            <div>
                                <svg width="562" height="331" viewBox="0 0 562 331" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="121" width="562" height="87.3519" rx="4" fill="#F8F9FA"/>
                                    <path d="M0 125C0 122.791 1.80515 121 4.01429 121V208.352C1.80515 208.352 0 206.561 0 204.352V125Z" fill="#E9ECEF"/>
                                    <path d="M519.85 121H558C560.209 121 562 122.791 562 125V206C562 208.209 560.209 210 558 210H519.85V121Z" fill="#F8F9FA"/>
                                    <rect x="15.0535" y="145.722" width="330.175" height="13.1852" fill="#E9ECEF"/>
                                    <rect x="15.0535" y="172.093" width="76.2714" height="13.1852" fill="#E9ECEF"/>
                                    <rect y="242" width="562" height="87.3519" rx="4" fill="#F8F9FA"/>
                                    <path d="M0 246C0 243.791 1.80515 242 4.01429 242V329.352C1.80515 329.352 0 327.561 0 325.352V246Z" fill="#E9ECEF"/>
                                    <path d="M519.85 242H558C560.209 242 562 243.791 562 246V327C562 329.209 560.209 331 558 331H519.85V242Z" fill="#F8F9FA"/>
                                    <rect x="15.0535" y="266.722" width="330.175" height="13.1852" fill="#E9ECEF"/>
                                    <rect x="15.0535" y="293.093" width="76.2714" height="13.1852" fill="#E9ECEF"/>
                                    <rect width="562" height="87.3519" rx="4" fill="#F8F9FA"/>
                                    <path d="M0 4C0 1.79087 1.80515 0 4.01429 0V87.3519C1.80515 87.3519 0 85.561 0 83.3519V4Z" fill="#E9ECEF"/>
                                    <path d="M519.85 0H558C560.209 0 562 1.79086 562 4V85C562 87.2091 560.209 89 558 89H519.85V0Z" fill="#F8F9FA"/>
                                    <rect x="15.0535" y="24.7222" width="330.175" height="13.1852" fill="#E9ECEF"/>
                                    <rect x="15.0535" y="51.0925" width="76.2714" height="13.1852" fill="#E9ECEF"/>
                                </svg>
                            </div>
                        </li>
                    ):(
                        listTransactions.map((element,index)=> {
                            
                            return(
                                
                                <li key={index} className={element.type === "entrada" ? ("cardList greenn") : ("cardList greyy")}>
                                <div className='boxDescript'>
                                    <h2>{element.description}</h2>
                                    <div className='boxTrash'>
                                        <span>{element.type === "saida" ? (<span> R$ - {element.value}</span>) : (<span> R$ {element.value}</span>)}</span>
                                        <button onClick={()=> removeData(index)} className='trash'></button>
                                    </div>
                                </div>
                                <p>{element.type}</p>
                            </li>
                            )
                        })
                    )
                    
                }
                
            </ul>
        </div>
    )
}