const Contactos = (props) => {
    const {id, name, pictureUrl, popularity, wonEmmy, wonOscar, deleteCelebrity} = props
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>PICTURE</th>
                        <br/>
                        <th>NAME</th>
                        <br/>
                        <th>POPULARITY</th>
                        <br/>
                        <th>WON <br/>OSCAR</th>
                        <br/>
                        <th>WON <br/>EMMY</th>
                        <br/>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img className="picture" src={pictureUrl} alt="celebrity"></img>
                        </td>
                        <br/>
                        <td>{name}</td>
                        <br/>
                        <td>{popularity}</td>
                        <br/>
                        <td>{wonOscar
                                ? <span>🏆</span>
                                : <span>🚫</span>}</td>
                                <br/>
                        <td>{wonEmmy
                                ? <span>🏆</span>
                                : <span>🚫</span>}</td>
                                <br/>
                        <td><button onClick={()=>deleteCelebrity(id)}>Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Contactos