import React from "react";
import Lottie from "lottie-react";
import SuccessAnim from "../Success.json";
import './Success.css'
import { useNavigate } from "react-router-dom";

const Success = () => {

    const navigate = useNavigate()
    const goBack =() =>{
        navigate("/moveCards")
    }

  return (
    <div className="anim_success">
        <div>
            <Lottie
                animationData={SuccessAnim}
                loop={false}
            />
            <p>Payment Successfull</p>
            <div className="btn">
                <button onClick={goBack}>Go Back</button>
            </div>
        </div>
    </div>
  );
};

export default Success;
