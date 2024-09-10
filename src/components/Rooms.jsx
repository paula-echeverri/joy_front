import React from "react";
import "./Rooms.css";

import joy from '../assets/img/joyApp.png'
const Rooms = () => {
  const goToRoom = (event) => {
    const content = event.currentTarget.getAttribute("data-value");
    console.log("content", content);
    //create functions to call api a pass this parameters
  };
  return (
    <div>
      <div>
        <div>
          <h1>CHAT WITH THE CHAT (ROOMS)</h1>
        </div>
        <div className="image-container">
          <img src={joy}     style={{ width: '400px', height: '350px' }}  alt="Joy_pics" />
        </div>
      </div>

      <div class="chats">
        <div class="box box1">
          <div class="feature_image" onClick={goToRoom} data-value="dogs">
            <div>Dogs</div>
          </div>
          <div class="feature-info">
            <div>Aca puedes preguntar por vacunacion , veterinaria de ...</div>
          </div>
        </div>
        <div class="box box2">
          <div class="feature_image" onClick={goToRoom} data-value="cats">
            <div>Cats</div>
          </div>
          <div>
            <div class="feature-info">
              Aca puedes preguntar por vacunacion , veterinaria de ...
            </div>
          </div>
        </div>
        <div class="box box3">
          <div class="feature_image" onClick={goToRoom} data-value="cart">
            <div>Cart</div>
          </div>
          <div>
            <div class="feature-info">
              Si deseas comprar algo para tu peludito aca puedes avanzar tu
              compra...
            </div>
          </div>
        </div>
        <div class="box box4">
          <div class="feature_image" onClick={goToRoom} data-value="appoiment">
            <div>Appoiment</div>
          </div>
          <div>
            <div class="feature-info">
              Si deseas agendar una cita para que atiendan a tu peludtio...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
