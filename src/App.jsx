import { Header } from "./Components/Header";
import { OurAdviser } from "./Components/OurAdviser";
import { OurMentor } from "./Components/OurMentor";
import { University } from "./Components/University";

export const App = () => {
  return (
    <main>
      <Header
        title={"Team Page"}
        subtitle={
          "Learn from Scientist, Research Scholars from the top institute of the world "
        }
      />
      <University />
      <OurMentor />
      <OurAdviser />
    </main>
  );
};
