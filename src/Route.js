import React from 'react';
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import App from "./App";
import ReactIcon from "./Component/ReactIcon";
import ToasterMessage from "./Component/ToasterMessage";
import BootstrapModel from "./Component/BootstrapModel";
import ToolTipExample from "./Component/ToolTipExample";
import ReactColorPicker from "./Component/ReactColorPicker";
import ReactPlayerExample from "./Component/ReactPlayerExample";

const RouteAll = () => (
        <Switch>
            <Route exact path="/home" component={App} />
            <Route exact path="/react-icon" component={ReactIcon} />
            <Route exact path="/react-toastify" component={ToasterMessage} />
            <Route exact path="/react-bootstrap-model" component={BootstrapModel} />
            <Route exact path="/react-tootip" component={ToolTipExample} />
            <Route exact path="/react-color-picker" component={ReactColorPicker} />
            <Route exact path="/react-player" component={ReactPlayerExample}/>
        </Switch>
);

export default RouteAll;