import { getFeaturedEvents } from "@/dummy-data";
import EventsList from "@/components/EventsList";
const Home = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <ul>
        <EventsList events={featuredEvents} />
      </ul>
    </div>
  );
};

export default Home;
