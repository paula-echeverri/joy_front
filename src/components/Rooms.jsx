import React from "react";
import "./Rooms.css";
const Rooms = () => {
  return (
    <div>
      {/* <>Rooms</>
      <li>Perro</li>
      <li>Gatos</li>

      <li>Compras</li>

      <li>Citas</li> */}

      <div class="chats">
        <div class="box box1">
          <div class="feature_image">
            <div></div>
          </div>
          <div class="feature-info">
            <div>Dogs</div>
          </div>
        </div>
        <div class="box box2">
          <div>
            <div class="feature-info">Cats</div>
          </div>
        </div>
        <div class="box box3">
          <div>
            <div class="feature-info">Cart</div>
          </div>
        </div>
        <div class="box box4">
          <div>
            <div class="feature-info">Appoiment</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
