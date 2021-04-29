import React from 'react';
import {ApplicationStateProvider} from "./context/appState";
import {AppScreen} from "./screens/AppScreen";

export default function App() {
    return (
        <ApplicationStateProvider>
            <AppScreen></AppScreen>
        </ApplicationStateProvider>
    );
}
