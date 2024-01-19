import { useRouter } from "next/router";
import { Fragment } from "react";
import { getFilteredEvents } from "@/dummy-data";
import EventsList from "@/components/EventsList";

const FilteredEvents = () => {
  const router = useRouter();
  const filterData = router.query.slug;
  
  if (!filterData) {
    return <h1 className="center">Loading...</h1>
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (isNaN(numYear) || isNaN(numMonth) || numYear > 2026 || numYear < 2024 || numMonth < 1 || numMonth > 12) {
    return <h1 className="center">Invalid filter. Please adjust your values!</h1>;
    
  }
  
  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <h1 className="center">No events found for the chosen filter!</h1>;
  }
  console.log(filteredEvents);

  return <Fragment> 
  <EventsList events={filteredEvents} />
  </Fragment>;
};

export default FilteredEvents;
