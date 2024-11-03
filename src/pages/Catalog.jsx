import { useState, useEffect } from 'react';
import Sidebar from '../pages/Sidebar.jsx';
import Watch from '../components/Watch.jsx';
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
                            <button className="watch-button">
                                <svg width="30" height="23" viewBox="0 0 64 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.66663 2.66667H13.3333L20.48 38.3733C20.7238 39.6011 21.3917 40.7039 22.3667 41.4888C23.3418 42.2737 24.5618 42.6907 25.8133 42.6667H51.7333C52.9848 42.6907 54.2048 42.2737 55.1798 41.4888C56.1549 40.7039 56.8228 39.6011 57.0666 38.3733L61.3333 16H16M26.6666 56C26.6666 57.4728 25.4727 58.6667 24 58.6667C22.5272 58.6667 21.3333 57.4728 21.3333 56C21.3333 54.5272 22.5272 53.3333 24 53.3333C25.4727 53.3333 26.6666 54.5272 26.6666 56ZM56 56C56 57.4728 54.806 58.6667 53.3333 58.6667C51.8605 58.6667 50.6666 57.4728 50.6666 56C50.6666 54.5272 51.8605 53.3333 53.3333 53.3333C54.806 53.3333 56 54.5272 56 56Z" stroke="#1E1E1E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                            <button className="heart-button">
                            <svg width="30" height="23" viewBox="0 0 60 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M53.5733 6.29333C52.2113 4.93068 50.5942 3.84972 48.8143 3.11222C47.0344 2.37473 45.1266 1.99513 43.2 1.99513C41.2734 1.99513 39.3656 2.37473 37.5857 3.11222C35.8058 3.84972 34.1887 4.93068 32.8267 6.29333L30 9.12L27.1733 6.29333C24.4221 3.54216 20.6907 1.99656 16.8 1.99656C12.9092 1.99656 9.17784 3.54216 6.42666 6.29333C3.67548 9.04451 2.12988 12.7759 2.12988 16.6667C2.12988 20.5574 3.67548 24.2888 6.42666 27.04L30 50.6133L53.5733 27.04C54.936 25.678 56.0169 24.0608 56.7544 22.2809C57.4919 20.5011 57.8715 18.5933 57.8715 16.6667C57.8715 14.74 57.4919 12.8323 56.7544 11.0524C56.0169 9.2725 54.936 7.65535 53.5733 6.29333Z" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                            </button>
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
