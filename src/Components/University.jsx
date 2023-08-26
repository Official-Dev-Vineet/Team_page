import { universityList } from "../../Constant";
import { UniversityCard } from "../Utils/UniversityCard";
export const University = () => {
  const list = Array.from(
    new Set(universityList.map((country) => country.country))
  );

  return (
    <section>
      <div className="group">
        <div className="title">
          <h2>Our University</h2>
        </div>
        <div className="filter">
          <select>
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
            />
          );
        })}
      </div>
    </section>
  );
};
