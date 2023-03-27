import React from "react";
import Lottie from "lottie-react";
import SuccessAnim from "../Success.json";
import './Success.css'
import { useDispatch } from "react-redux";
import { changeAthe } from "../features/counter/Slice";
import { useNavigate } from "react-router-dom";

const Success = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const goBack =() =>{
        navigate("/")
        dispatch(changeAthe(false));
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
