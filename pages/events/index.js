import { getAllEvents } from "@/dummy-data";
import EventsList from "@/components/EventsList";
import { Fragment } from "react";
import SearchEvents from "@/components/SearchEvents";
import { useRouter } from "next/router";
const EventsPage = () => {
  const events = getAllEvents();
  const router = useRouter();
  const onSubmit = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <Fragment>
      <SearchEvents onSubmit={onSubmit} />
      <EventsList events={events} />
    </Fragment>
  );
};

export default EventsPage;
