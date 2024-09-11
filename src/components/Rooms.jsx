import React from "react";
import "./Rooms.css";

import joy from "../assets/img/joyApp.png";
const Rooms = () => {
  const goToRoom = (event) => {
    const content = event.currentTarget.getAttribute("data-value");
    console.log("content", content);
    //create functions to call api a pass this parameters
  };

  const chatRooms = [
    {
      value: "dogs",
      title: "Dogs",
      description: "Aca puedes preguntar por vacunacion, veterinaria de ...",
    },
    {
      value: "cats",
      title: "Cats",
      description: "Aca puedes preguntar por vacunacion, veterinaria de ...",
    },
    {
      value: "cart",
      title: "Cart",
      description:
        "Si deseas comprar algo para tu peludito aca puedes avanzar tu compra...",
    },
    {
      value: "appoiment",
      title: "Appoiment",
      description:
        "Si deseas agendar una cita para que atiendan a tu peludito...",
    },
  ];

  return (
    <div>
      <div>
        <div>
          <h1>CHAT WITH THE CHAT (ROOMS)</h1>
        </div>
        <div className="image-container">
          <img
            src={joy}
            style={{ width: "200px", height: "150px" }}
            alt="Joy_pics"
          />
        </div>
      </div>

      {/* <div className="chats">
        <div className="box box1">
          <div className="feature_image" onClick={goToRoom} data-value="dogs">
            <div>Dogs</div>
          </div>
          <div className="feature-info">
            <div>Aca puedes preguntar por vacunacion , veterinaria de ...</div>
          </div>
        </div>
        <div className="box box2">
          <div className="feature_image" onClick={goToRoom} data-value="cats">
            <div>Cats</div>
          </div>
          <div>
            <div className="feature-info">
              Aca puedes preguntar por vacunacion , veterinaria de ...
            </div>
          </div>
        </div>
        <div className="box box3">
          <div className="feature_image" onClick={goToRoom} data-value="cart">
            <div>Cart</div>
          </div>
          <div>
            <div className="feature-info">
              Si deseas comprar algo para tu peludito aca puedes avanzar tu
              compra...
            </div>
          </div>
        </div>
        <div className="box box4">
          <div className="feature_image" onClick={goToRoom} data-value="appoiment">
            <div>Appoiment</div>
          </div>
          <div>
            <div className="feature-info">
              Si deseas agendar una cita para que atiendan a tu peludtio...
            </div>
          </div>
        </div>
      </div> */}
      {/*alternative of code*/}

      <div className="chats">
        {chatRooms.map((room, index) => (
          <div className={`box box${index + 1}`} key={room.value}>
            <div
              className="feature_image"
              onClick={goToRoom}
              data-value={room.value}
            >
              <div>{room.title}</div>
            </div>
            <div className="feature-info">
              <div>{room.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
