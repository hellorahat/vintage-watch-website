import React from "react";
import { useAlerts } from "../utility/AlertContext";
import '../styles/AlertComponent.css'

const AlertComponent = () => {
    const { alerts, setAlerts } = useAlerts();

    return (
        <div className="fixed-bottom container mt-3">
            <div className="mt-3">
                {alerts.map((alert, index) => (
                    <div key={index} className={`main-alert alert alert-success fade show ${alert.fadeOut ? 'fade-out' : ''}`} role="alert">
                        {alert.message}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AlertComponent;
