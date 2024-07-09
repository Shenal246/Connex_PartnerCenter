import React from 'react';
import './tpnt.css';
import img from './img/image.png'
import img2 from './img/ConnexIT.png'

function Tpnt() {
  var clck = 1;
  const click = () => {

    if (clck === 1) {
      document.getElementById('nt').style.width = '50vh';
      clck = 0;
      document.getElementById('nt').style.height = '20vh';
      document.getElementById('pfimg').style.width='10vh';
      document.getElementById('nm').style.marginLeft='10vh';
     
    }
    else {
      document.getElementById('nt').style.width = '30vh';
      document.getElementById('nt').style.height = '3vh';
      document.getElementById('pfimg').style.width='3vh';
      document.getElementById('nm').style.marginLeft='2vh';
      clck = 1;
    }



  }
  const click2 = () => {




  }
  return (
    <div className='ntc' id='nt'>
      <img src={img} id='pfimg'></img>
      <h4 onClick={click} id='nm'>Eranga Wickramasinghe</h4>
      <div className='src'>
        <div className='btns'>Profile Info change</div>
        <div className='btns'>Password Change</div>
    
      </div>
      <div className='info'>
        <img src={img2}></img>
        <h4> Head Of Logistic Management</h4>
        
        <h4 className='empid'> Employe Id : 123456</h4>
      </div>

    </div>
  )
}

export default Tpnt