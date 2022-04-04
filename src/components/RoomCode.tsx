import React from "react";
import copyImg from "../assets/images/copy.svg";
import "../styles/roomCode.scss";

type RoomCadeProps = {
  code: string;
};
const RoomCode = ({ code }: RoomCadeProps) => {
  const copyRoomCodeToClipboard = () => {
    navigator.clipboard.writeText(code);
  };
  return (
    <button className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>{code}</span>
    </button>
  );
};

export default RoomCode;
