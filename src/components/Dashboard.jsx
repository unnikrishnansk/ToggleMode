import React from 'react'

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <div className='dashboarddetails'>

            <div className='display'>
            <div className='users'>
                <h2>Active Users</h2>
            </div>
            <div className='menubar'>

            </div>
            </div>

            <div className='profile'>
                <div className='display'>
                <div className='profilepicture'>
                    <img className='profilepicturedp' src="https://media.istockphoto.com/photos/man-looking-picture-id1168966537?k=20&m=1168966537&s=612x612&w=0&h=bo_q0haOU6HuefcXHpMEBFgh_z5yrzOBu7R4djGQWb0=" alt="pic" />
                </div>
                <div className='profiledetails'>
                    <p className='name'>Nrupul Dev</p>
                    <p className='place'>Bangalore,India</p>
                </div>
                </div>
                <div className='levelindicator'></div>
                <div className='levelshow'>
                    <div className='levelshowname'>
                        <p>Proffessional Level 15</p>
                    </div>
                    <div className='levelshowpoint'>
                        <p>4723 Points</p>
                    </div>
                </div>
            </div>


            <div className='profile'>
                <div className='display'>
                <div className='profilepicture'>
                    <img className='profilepicturedp' src="https://media.istockphoto.com/photos/profile-view-of-beautiful-businesswoman-against-white-background-picture-id1165424420?k=20&m=1165424420&s=612x612&w=0&h=EJh8wpeq2W2REm8627SSrDdFuPB2DZE8gwkkWKlNaOY=" alt="pic" />
                </div>
                <div className='profiledetails'>
                    <p className='name'>Sandhya</p>
                    <p className='place'>Bangalore,India</p>
                </div>
                </div>
                <div className='levelindicator'></div>
                <div className='levelshow'>
                    <div className='levelshowname'>
                        <p>Proffessional Level 11</p>
                    </div>
                    <div className='levelshowpoint'>
                        <p>2339 Points</p>
                    </div>
                </div>
            </div>


            <div className='profile'>
                <div className='display'>
                <div className='profilepicture'>
                    <img className='profilepicturedp' src="https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?k=20&m=1300972574&s=612x612&w=0&h=kndUxGzi4W9gD_s-3Jq2vd9wxv2Qn2EEtZ7qjce1nhY=" alt="pic" />
                </div>
                <div className='profiledetails'>
                    <p className='name'>Elon Tusk</p>
                    <p className='place'>California, USA</p>
                </div>
                </div>
                <div className='levelindicator'></div>
                <div className='levelshow'>
                    <div className='levelshowname'>
                        <p>Proffessional Level 6</p>
                    </div>
                    <div className='levelshowpoint'>
                        <p>1884 Points</p>
                    </div>
                </div>
            </div>


           

        </div>

    </div>
  )
}

export default Dashboard;