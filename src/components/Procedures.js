import { Link } from 'react-router-dom'

function Procedures (props) {
    const proceduresItems = props.proceduresList.map((p, index) => {
        return (
            <li key={index}><Link to={`/procedures/${index}`}>{p.name}</Link></li>
        )
    })

    return(
        <>
            <h1>Procedures</h1>
            <ul>
                {proceduresItems}
            </ul>
        </>
    )
}

export default Procedures