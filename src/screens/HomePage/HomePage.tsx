import ClientFeedback from "./ClientsFeedback/ClientFeedbacks";
import FoodMenu from "./FoodMenu/FoodMenu";
import IndexHeaderContent from "./IndexHeaderContent/IndexHeaderContent";
import IndexWelcome from "./IndexWelcome/IndexWelcome";
import ServiceList from "./ServiceList/ServiceList";
import TeamMembersList from "./TeamMembers/TeamMembersList";
import { HomePageProps, useHomePage } from "./useHomePage";
import Paper from "components/Paper/Paper";
const HomePage: React.FC<HomePageProps> = (props) => {
  const {} = useHomePage(props);

  return (
    <Paper title="">
      <IndexHeaderContent />
      <ServiceList />
      <IndexWelcome />
      <FoodMenu />
      <TeamMembersList />
      <ClientFeedback />
    </Paper>
  );
};

export default HomePage;
