import React from 'react';





function RaceModal({ race }) {
const subraceFound = () => {
    if (race.subraces.length === 0) {

    } else
    return(
      race.subraces.map((subrace, i) => <div key={i + '-subrace'}>
        <div className="modal-body">
          <h3>{subrace.name}</h3>
          <p>{subrace.description}</p>
          <button type="button" className="btn btn-outline-primary chooseRaceBtn">Choose {subrace.name}</button>
        </div>
        <br />
      </div >))
}
  return (
    <div className="panel-body text-dark">
      <button type="button"
        className="btn goToModalBtn"
        data-toggle="modal"
        data-target={`#${race.name}`}>
        {race.name}
      </button>


      <div className="modal fade" id={`${race.name}`} aria-labelledby={`${race.name}Label`} aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <span className="modal-title" id={`${race.name}Label`}>{race.plural} Subraces</span>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <p>{race.description}</p>
            </div>

            
              {subraceFound}
            

          </div>
        </div>
      </div>
    </div>
  )
}


export default RaceModal