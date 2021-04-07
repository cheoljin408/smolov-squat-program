import React from "react";
import Head from "./Head";
import Workout1 from "./Workout1";
import Workout2 from "./Workout2";
import Workout3 from "./Workout3";
import Workout4 from "./Workout4";
import Workout5 from "./Workout5";
import Workout6 from "./Workout6";
import Workout9 from "./Workout9";

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
        case "workout4":
            return (
                <>
                    <Head />
                    <Workout4 />
                </>
            );
        case "workout5":
            return (
                <>
                    <Head />
                    <Workout5 />
                </>
            );
        case "workout6":
            return (
                <>
                    <Head />
                    <Workout6 />
                </>
            );
        case "workout9":
                return (
                    <>
                        <Head />
                        <Workout9 />
                    </>
                );
        default:
            return;
    }
}

export default Workout;