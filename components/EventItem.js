import Link from "next/link";   
import styles from "./EventItem.module.css"
import Button from "./Button";
const EventItem = ({event}) => {

    const modifiedDate = new Date(event.date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })

  return (
    <li className={styles.item}>
        <img src={event.image}  alt=''/>
        <div className={styles.content}>
            <div className={styles.summary}>
                <h2>{event.title}</h2>
                <div className={styles.date}>
                    <time>{modifiedDate}</time>
                </div>
                <div className={styles.address}>
                    <address>{event.location}</address>
                </div>
            </div>
            <div className={styles.actions}>
                <Button path={`/events/${event.id}`}>Explore </Button>
            </div>
        </div>
    </li>
  )
}

export default EventItem