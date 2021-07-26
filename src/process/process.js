import {useSelector }from "react-redux";
function Process(){
    const state = useSelector((state) => state.processReducer)
    return(<div>
        <h5>SerectKey:<span>"HBHHGggcCGUjb"</span></h5>
        <div>
            <h4>Incoming Data</h4>
            <p>{state.text}</p>

        </div>
    </div>)
};
export default Process;

