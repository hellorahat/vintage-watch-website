import React, { createContext, useContext, useState } from 'react';

const AlertContext = createContext();

const AlertProvider = ({ children }) => {
    const [alerts, setAlerts] = useState([]);

    const addAlert = (message) => {
        const id = Date.now();
        const newAlert = { id, message, fadeOut:false }; // Generate a unique ID
        setAlerts((previousAlerts) => [...previousAlerts, newAlert]);

        setTimeout(() => {
            setAlerts((previousAlerts) =>
                previousAlerts.map((alert) =>
                    alert.id === id ? { ...alert, fadeOut: true } : alert
                )
            );
            setTimeout(() => {
                setAlerts((previousAlerts) => previousAlerts.filter(alert => alert.id !== newAlert.id));
            }, 500);
        }, 5000)
    };

    return (
        <AlertContext.Provider value={{ alerts, addAlert }}>
            {children}
        </AlertContext.Provider>
    );
};

const useAlerts = () => useContext(AlertContext);

export { AlertProvider, useAlerts };
