import { useState, useEffect } from 'react';
import Sidebar from '../pages/Sidebar.jsx';
import Watch from './Watch';
import watchesData from './watches.json'; 
import watch1 from '../assets/watches/santos.jpg';

function Catalog() {
    const [watches, setWatches] = useState([]);

    useEffect(() => {
        const watchInstances = watchesData.map((item) => new Watch(item));
        setWatches(watchInstances);
    }, []);

    return (
        <div className="catalog">
            <Sidebar />
            <div className="watch-list">
                {watches.length > 0 ? (
                    watches.map((watch) => (
                        <div key={watch.id} className="watch-item">
                            <h3>{watch.brand} - {watch.model}</h3>
                            <img src={watch1} alt={watch.model} />
                            <p>{watch.price}</p>
                            <p>Diameter: {watch.diameter}</p>
                            <p>Release: {watch.release}</p>
                        </div>
                    ))
                ) : (
                    <p>Loading watches...</p>
                )}
            </div>
        </div>
    );
}

export default Catalog;
