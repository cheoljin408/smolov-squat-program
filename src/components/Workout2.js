import React from "react";
import styled from "styled-components";

const DayBlock = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding-top: 30px;
    padding-bottom: 30px;
`;

const WorkoutBlock = styled.div`
    width: 450px;
    /* height: 80px; */
    border: 1px solid #e9ecef;
    margin: 0 auto;
    margin-bottom: 30px;
    padding-left: 30px;
    border-radius: 10px;
    display: flex;
    align-items: center;

    .p1 {
        width: 100px;
        font-size: 18px;
        font-weight: 500;
    }

    .p2 {
        margin-left: 30px;
        width: 280px;
        height: 20px;
        margin-top: 8px;
        margin-bottom: 8px;
    }

    .div1 {
        display: flex;
        align-items: center;
    }
`;

function Workout2() {
    return (
        <DayBlock>
            {/* Monday */}
            <WorkoutBlock>
                <div>
                    <p className="p1">Monday</p>
                </div>
                <div>
                    <div className="div1">
                        <p className="p2">1 sets x 5 reps @ 80%</p>
                        <div>
                            <input type="checkbox"/>
                        </div>
                    </div>
                </div>
            </WorkoutBlock>
            {/* Wednesday */}
            <WorkoutBlock>
                <div>
                    <p className="p1">Wednesday</p>
                </div>
                <div>
                    <div className="div1">
                        <p className="p2">1 sets x 5 reps @ 82.5%</p>
                        <div>
                            <input type="checkbox"/>
                        </div>
                    </div>
                </div>
            </WorkoutBlock>
            {/* Friday */}
            <WorkoutBlock>
                <div>
                    <p className="p1">Friday</p>
                </div>
                <div>
                    <div className="div1">
                        <p className="p2">1 sets x 5 reps @ 85%</p>
                        <div>
                            <input type="checkbox"/>
                        </div>
                    </div>
                </div>
            </WorkoutBlock>
        </DayBlock>
    );
}

export default Workout2;