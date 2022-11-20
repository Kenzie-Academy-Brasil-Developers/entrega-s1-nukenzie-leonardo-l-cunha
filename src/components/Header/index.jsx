import './head.css'
export const Header = ({button}) => {
    return (
        <header className='head'>
           <div className='containerMain'>
            <h1> <span>Nu</span> Kenzie</h1>
            <button className='btnHome' onClick={button}>Inicio</button>
           </div>
        </header>
    )
}