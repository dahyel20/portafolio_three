import './App.css'

function Carga()
{
    return (
        <div className="container">
            <div className="cubo">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className="loading">
                <h1>Loading</h1>
                <p>...</p>
            </div>
        </div>
    ) 
}

export default Carga