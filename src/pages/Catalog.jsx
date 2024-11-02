import { useState, useEffect } from 'react';
import Sidebar from '../pages/Sidebar.jsx';
import Watch from './Watch';
import watchesData from '../components/watches.json';
import '../styles/Catalog.css';

function Catalog() {
    const [watches, setWatches] = useState([]);
    const [filteredWatches, setFilteredWatches] = useState([]); 

    useEffect(() => {
        const watchInstances = watchesData.map((item) => new Watch(item));
        setWatches(watchInstances);
        setFilteredWatches(watchInstances); 
    }, []);

    const handleFilterChange = (selectedFilters) => {
        let filtered = watches;

        if (selectedFilters.type.length) {
            filtered = filtered.filter(watch => selectedFilters.type.includes(watch.type)); 
        }
        if (selectedFilters.brand.length) {
            filtered = filtered.filter(watch => selectedFilters.brand.includes(watch.brand)); 
        }
        if (selectedFilters.model.length) {
            filtered = filtered.filter(watch => selectedFilters.model.includes(watch.model));     
        }
        if (selectedFilters.color.length) {
            filtered = filtered.filter(watch => selectedFilters.color.includes(watch.color));
        }
        if (selectedFilters.releaseDate.length) {
            filtered = filtered.filter(watch => selectedFilters.releaseDate.includes(watch.releaseDate));
        }
        if (selectedFilters.diameter.length) {
            filtered = filtered.filter(watch => selectedFilters.diameter.includes(watch.diameter)); 
        }
        if (selectedFilters.shape.length) {
            filtered = filtered.filter(watch => selectedFilters.shape.includes(watch.shape));
        }

        setFilteredWatches(filtered);
    };

    return (
        <div className="catalog-container">
            <Sidebar onFilterChange={handleFilterChange} />
            <div className="watch-list">
                {filteredWatches.length > 0 ? (
                    filteredWatches.map((watch) => (
                        <div key={watch.id} className="watch-card">
                            <img className="watch-image" src={watch.image} alt={watch.model} />
                            <h3 className="watch-brand">{watch.brand}</h3>
                            <h4>{watch.model}</h4>
                            <p>Price: {watch.price}</p>
                        </div>
                    ))
                ) : (
                    <p>No watches found with the selected filters.</p>
                )}
            </div>
        </div>
    );
}

export default Catalog;
