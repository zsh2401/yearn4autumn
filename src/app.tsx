import AppRouter from "./AppRouter";
import React from 'react'
import ReactDOM from 'react-dom';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
OfflinePluginRuntime.install();
OfflinePluginRuntime.applyUpdate();
ReactDOM.render(<AppRouter/>,document.querySelector("#app"));