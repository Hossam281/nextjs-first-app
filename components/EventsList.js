import EventItem from "./EventItem"
import styles from "./EventsList.module.css"
const EventsList = ({events}) => {
    
  return (
    <div className={styles.list}>
        {events.map((event) => (
            <EventItem key={event.id} event={event} />
        ))}
    </div>
  )
}

export default EventsList