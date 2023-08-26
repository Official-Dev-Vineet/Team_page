import { universityList } from "../../Constant";
import { UniversityCard } from "../Utils/UniversityCard";
import { useRef } from "react";
export const University = () => {
  const filter = useRef();
  const list = Array.from(
    new Set(universityList.map((country) => country.country))
  );
  function filterHandler() {
    console.log(filter.current.value);
    document.querySelectorAll(".university-card").forEach((card) => {
      //   card.style.display = "none";
      const display = card.getAttribute("data-display");
      display === filter.current.value
        ? (card.style.display = "block")
        : (card.style.display = "none");
        filter.current.value === "All" ? (card.style.display = "block") : null 
    });
  }
  return (
    <section>
      <div className="group">
        <div className="title">
          <h2>Our University</h2>
        </div>
        <div className="line"></div>
        <div className="filter">
          <select name="filter" onChange={() => filterHandler()} ref={filter}>
            <option>All</option>
            {list.map((country, index) => {
              return <option key={index}>{country}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="university-list">
        {universityList.map((university, index) => {
          return (
            <UniversityCard
              key={index}
              name={university.name}
              location={university.location}
              image={university.image}
              country={university.country}
            />
          );
        })}
      </div>
    </section>
  );
};
