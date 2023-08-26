import { mainAdviser } from "../../Constant";
import { AdviserCard } from "../Utils/AdviserCard";

export const OurAdviser = () => {
  return (
    <section>
      <div className="title">
        <h2>Mentor &amp; Adviser</h2>
        <div className="line"></div>
      </div>
      <div className="adviser-list">
        <div className="main-adviser">
          <div className="adviser-image">
            <img src={mainAdviser} alt={mainAdviser} />
          </div>
          <div className="adviser-details">
            <h3>Dr. Omkar Kulkarni</h3>
            <p>
              Principal Project Scientist <br />
              <span title="Indian Institute of Technology">IIT</span>
              &nbsp;Madras
            </p>
          </div>
        </div>
        <AdviserCard
          image="https://www.sciastra.com/teams/akhil_tripathi_niser.jpg"
          name="Akhil Tripathi Niser"
        />
        <AdviserCard
          image="https://www.sciastra.com/teams/vivek_dwivedi_niser.jpg"
          name="Vivek Dwivedi"
        />
      </div>
    </section>
  );
};
