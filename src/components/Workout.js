import React from "react";
import Head from "./Head";
import Workout1 from "./Workout1";
import Workout2 from "./Workout2";
import Workout3 from "./Workout3";

function Workout({ match }) {
    switch (match.params.workout) {
        case "workout1":
            return (
                <>
                    <Head />
                    <Workout1 />
                </>
            );
        case "workout2":
            return (
                <>
                    <Head />
                    <Workout2 />
                </>
            );
        case "workout3":
            return (
                <>
                    <Head />
                    <Workout3 />
                </>
            );
    }
}

export default Workout;