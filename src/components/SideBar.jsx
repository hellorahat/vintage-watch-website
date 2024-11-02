import { useMediaQuery } from "react-responsive";
import { useState } from "react";
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

  const handleFilterClick = (filterType, value) => {
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
            Type of Watch{" "}
            <span
              className={`arrow ${openSection === 1 ? "up" : "down"}`}
            ></span>
          </button>
          <div className={`dropdown ${openSection === 1 ? "active" : ""}`}>
            {[
              "Men's Vintage",
              "Men's Modern",
              "Woman's Vintage",
              "Women's Modern",
            ].map((type) => (
              <p
                key={type}
                onClick={() => handleFilterClick("type", type)}
                className={
                  selectedFilters.type.includes(type) ? "selected" : ""
                }
              >
                {type}
              </p>
            ))}
          </div>
        </li>
        <li>
          <button onClick={() => toggleSection(2)}>
            Brand{" "}
            <span
              className={`arrow ${openSection === 2 ? "up" : "down"}`}
            ></span>
          </button>
          <div className={`dropdown ${openSection === 2 ? "active" : ""}`}>
            {["Cartier", "Omega", "Bulova", "Mercier", "Rolex"].map((brand) => (
              <p
                key={brand}
                onClick={() => handleFilterClick("brand", brand)}
                className={
                  selectedFilters.brand.includes(brand) ? "selected" : ""
                }
              >
                {brand}
              </p>
            ))}
          </div>
        </li>
        <li>
          <button onClick={() => toggleSection(3)}>
            Model{" "}
            <span
              className={`arrow ${openSection === 3 ? "up" : "down"}`}
            ></span>
          </button>
          <div className={`dropdown ${openSection === 3 ? "active" : ""}`}>
            {[
              "Santos",
              "Tank",
              "Ballon Bleu",
              "Pasha",
              "Panthère",
              "Speedmaster",
              "Constellation",
              "Railmaster",
              "Accutron",
              "Precisionist",
              "Marine Star",
              "CURV",
              "Lunar Pilot",
              "Clifton",
              "Classima",
              "Hampton",
              "Capeland",
              "Riviera",
              "Submariner",
              "Daytona",
              "Datejust",
              "Oyster Perpetual",
              "GMT-Master II",
            ].map((model) => (
              <p
                key={model}
                onClick={() => handleFilterClick("model", model)}
                className={
                  selectedFilters.model.includes(model) ? "selected" : ""
                }
              >
                {model}
              </p>
            ))}
          </div>
        </li>
        <li>
          <button onClick={() => toggleSection(4)}>
            Color{" "}
            <span
              className={`arrow ${openSection === 4 ? "up" : "down"}`}
            ></span>
          </button>
          <div className={`dropdown ${openSection === 4 ? "active" : ""}`}>
            {["Silver", "Gold", "Blue", "Rose Gold", "Black"].map((color) => (
              <p
                key={color}
                onClick={() => handleFilterClick("color", color)}
                className={
                  selectedFilters.color.includes(color) ? "selected" : ""
                }
              >
                {color}
              </p>
            ))}
          </div>
        </li>
        <li>
          <button onClick={() => toggleSection(5)}>
            Release Date{" "}
            <span
              className={`arrow ${openSection === 5 ? "up" : "down"}`}
            ></span>
          </button>
          <div className={`dropdown ${openSection === 5 ? "active" : ""}`}>
            {[
              "1950s",
              "1960s",
              "1970s",
              "1980s",
              "1990s",
              "2000s",
              "2010s",
              "2020s",
            ].map((date) => (
              <p
                key={date}
                onClick={() => handleFilterClick("releaseDate", date)}
                className={
                  selectedFilters.releaseDate.includes(date) ? "selected" : ""
                }
              >
                {date}
              </p>
            ))}
          </div>
        </li>
        <li>
          <button onClick={() => toggleSection(6)}>
            Diameter{" "}
            <span
              className={`arrow ${openSection === 6 ? "up" : "down"}`}
            ></span>
          </button>
          <div className={`dropdown ${openSection === 6 ? "active" : ""}`}>
            {["36 mm", "40 mm", "42 mm", "44 mm", "45 mm"].map((diameter) => (
              <p
                key={diameter}
                onClick={() => handleFilterClick("diameter", diameter)}
                className={
                  selectedFilters.diameter.includes(diameter) ? "selected" : ""
                }
              >
                {diameter}
              </p>
            ))}
          </div>
        </li>
        <li>
          <button onClick={() => toggleSection(7)}>
            Shape{" "}
            <span
              className={`arrow ${openSection === 7 ? "up" : "down"}`}
            ></span>
          </button>
          <div className={`dropdown ${openSection === 7 ? "active" : ""}`}>
            {["Round", "Rectangular", "Square"].map((shape) => (
              <p
                key={shape}
                onClick={() => handleFilterClick("shape", shape)}
                className={
                  selectedFilters.shape.includes(shape) ? "selected" : ""
                }
              >
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
