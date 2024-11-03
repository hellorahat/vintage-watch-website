import { useState } from 'react';
import "../styles/SideBar.css";

function SideBar({ onFilterChange }) {
    const [openSection, setOpenSection] = useState(null);
    const [selectedFilters, setSelectedFilters] = useState({
        type: [],
        brand: [],
        model: [],
        color: [],
        releaseDate: [],
        diameter: [],
        shape: [],
    });

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    const handleFilterClick = (event, filterType, value) => {
        // Prevent the click event from bubbling up to the button
        event.stopPropagation();

        const currentFilters = selectedFilters[filterType];
        const updatedFilters = currentFilters.includes(value)
            ? currentFilters.filter((item) => item !== value)
            : [...currentFilters, value];

        const updatedSelectedFilters = {
            ...selectedFilters,
            [filterType]: updatedFilters,
        };

        setSelectedFilters(updatedSelectedFilters);
        onFilterChange(updatedSelectedFilters);
    };

    return (
        <div className="sidebar">
            <ul>
                <li>
                    <button onClick={() => toggleSection(1)}>
                        Type of Watch <span className={`arrow ${openSection === 1 ? 'up' : 'down'}`}></span>
                    </button>
                    <div className={`dropdown ${openSection === 1 ? 'active' : ''}`}>
                        {["Men's Vintage", "Men's Modern", "Woman's Vintage", "Women's Modern"].map(type => (
                            <p key={type} onClick={(event) => handleFilterClick(event, 'type', type)} className={selectedFilters.type.includes(type) ? 'selected' : ''}>
                                <span className={`bubble ${selectedFilters.type.includes(type) ? 'selected' : ''}`}></span>
                                {type}
                            </p>
                        ))}
                    </div>
                </li>
                <li>
                    <button onClick={() => toggleSection(2)}>
                        Brand <span className={`arrow ${openSection === 2 ? 'up' : 'down'}`}></span>
                    </button>
                    <div className={`dropdown ${openSection === 2 ? 'active' : ''}`}>
                        {["Cartier", "Omega", "Bulova", "Mercier", "Rolex"].map(brand => (
                            <p key={brand} onClick={(event) => handleFilterClick(event, 'brand', brand)} className={selectedFilters.brand.includes(brand) ? 'selected' : ''}>
                                <span className={`bubble ${selectedFilters.brand.includes(brand) ? 'selected' : ''}`}></span>
                                {brand}
                            </p>
                        ))}
                    </div>
                </li>
                <li>
                    <button onClick={() => toggleSection(3)}>
                        Model <span className={`arrow ${openSection === 3 ? 'up' : 'down'}`}></span>
                    </button>
                    <div className={`dropdown ${openSection === 3 ? 'active' : ''}`}>
                        {["Santos", "Tank", "Ballon Bleu", "Pasha", "Panthère", "Speedmaster", "Constellation", "Railmaster", "Accutron", "Precisionist", "Marine Star", "CURV", "Lunar Pilot", "Clifton", "Classima", "Hampton", "Capeland", "Riviera", "Submariner", "Daytona", "Datejust", "Oyster Perpetual", "GMT-Master II"].map(model => (
                            <p key={model} onClick={(event) => handleFilterClick(event, 'model', model)} className={selectedFilters.model.includes(model) ? 'selected' : ''}>
                                <span className={`bubble ${selectedFilters.model.includes(model) ? 'selected' : ''}`}></span>
                                {model}
                            </p>
                        ))}
                    </div>
                </li>
                <li>
                    <button onClick={() => toggleSection(4)}>
                        Color <span className={`arrow ${openSection === 4 ? 'up' : 'down'}`}></span>
                    </button>
                    <div className={`dropdown ${openSection === 4 ? 'active' : ''}`}>
                        {["Silver", "Gold", "Blue", "Rose Gold", "Black"].map(color => (
                            <p key={color} onClick={(event) => handleFilterClick(event, 'color', color)} className={selectedFilters.color.includes(color) ? 'selected' : ''}>
                                <span className={`bubble ${selectedFilters.color.includes(color) ? 'selected' : ''}`}></span>
                                {color}
                            </p>
                        ))}
                    </div>
                </li>
                <li>
                    <button onClick={() => toggleSection(5)}>
                        Release Date <span className={`arrow ${openSection === 5 ? 'up' : 'down'}`}></span>
                    </button>
                    <div className={`dropdown ${openSection === 5 ? 'active' : ''}`}>
                        {["1950s", "1960s", "1970s", "1980s", "1990s", "2000s", "2010s", "2020s"].map(date => (
                            <p key={date} onClick={(event) => handleFilterClick(event, 'releaseDate', date)} className={selectedFilters.releaseDate.includes(date) ? 'selected' : ''}>
                                <span className={`bubble ${selectedFilters.releaseDate.includes(date) ? 'selected' : ''}`}></span>
                                {date}
                            </p>
                        ))}
                    </div>
                </li>
                <li>
                    <button onClick={() => toggleSection(6)}>
                        Diameter <span className={`arrow ${openSection === 6 ? 'up' : 'down'}`}></span>
                    </button>
                    <div className={`dropdown ${openSection === 6 ? 'active' : ''}`}>
                        {["36 mm", "40 mm", "42 mm", "44 mm", "45 mm"].map(diameter => (
                            <p key={diameter} onClick={(event) => handleFilterClick(event, 'diameter', diameter)} className={selectedFilters.diameter.includes(diameter) ? 'selected' : ''}>
                                <span className={`bubble ${selectedFilters.diameter.includes(diameter) ? 'selected' : ''}`}></span>
                                {diameter}
                            </p>
                        ))}
                    </div>
                </li>
                <li>
                    <button onClick={() => toggleSection(7)}>
                        Shape <span className={`arrow ${openSection === 7 ? 'up' : 'down'}`}></span>
                    </button>
                    <div className={`dropdown ${openSection === 7 ? 'active' : ''}`}>
                        {["Round", "Curved", "Square"].map(shape => (
                            <p key={shape} onClick={(event) => handleFilterClick(event, 'shape', shape)} className={selectedFilters.shape.includes(shape) ? 'selected' : ''}>
                                <span className={`bubble ${selectedFilters.shape.includes(shape) ? 'selected' : ''}`}></span>
                                {shape}
                            </p>
                        ))}
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default SideBar;
