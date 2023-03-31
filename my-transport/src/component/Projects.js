import React from 'react'
import "./Projects.scss"


export default function Projects() {
  return (
    <div className="TranSections">
    <div className="TransHeader">
        <h2>Transporting Across The World</h2>
    </div>
    <div className="TransportText">
        <div className="Liquid">
        <img src="Veiculo.png" alt=""/>
        <h3>Liquid Transportation</h3>
        <p>Premium Tankers</p>
        </div>
    
    <div className="Packaging">
     <img src="Packaging.png" alt="avatar"/>
        <h3>Packaging Solutions</h3>
        <p> Warehouse Management</p>
    </div>

    <div className="Contract">
    <img src="Scania.png" alt="avatar" />
        <h3>Contract Logistics</h3>
        <p>Road Transportation</p>
    </div>
         
    <div className="Warehouse">
    <img src="Container.png" alt="avatar"/>
            <h3>Warehouse & Distribution</h3>
            <p>Large Warehouse</p>
    </div>

    <div className="Specialized">
    <img src="Grimal.png" alt=""/>
            <h3>Specialized Transport</h3>
            <p>Ocean Transports</p>
    </div>
    </div>
    <button className="TransBtn">More Work  <svg width="36" height="25" viewBox="0 0 36 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="26.4141" cy="26.9148" r="26" fill="#1F2A69"/>
</svg>

 </button>
    </div>
  )
}
