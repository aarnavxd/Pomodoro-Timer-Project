// Here will be the timer component which runs the Function called timer
// I am referring circular-progress bar from NPM site
// https://www.npmjs.com/package/react-circular-progressbar reference link

import { CircularProgressbar, buildStyles }  from "react-circular-progressbar"; //default import commands
import "react-circular-progressbar/dist/styles.css"; 
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import SettingsButton from "./SettingsButton";

function Timer(){
    return (
        <div className="progressBar">
            <CircularProgressbar value = {60} text = {'60%'} styles={buildStyles({
                pathColor: '#0FA4AF',
                textColor:  '#fff',
                trailColor:  '#AFDDE5',
            })} />
            <div style={{marginTop:'20px'}}> 
                <PlayButton />
                <PauseButton />
            </div>
            <div style={{marginTop: '20px'}}>
                <SettingsButton />
            </div>
        </div>
    )
}

export default Timer;