import Button from "./Button";
import { useRef } from "react";
import styles from "./SearchEvents.module.css";
const SearchEvents = ({onSubmit}) => {
  const yearRef = useRef();
  const monthRef = useRef();

  
  const submitHandler = (e) => {
    e.preventDefault();
    const year = yearRef.current.value;
    const month = monthRef.current.value;
    onSubmit(year, month);
  };
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles.controls}>
        <div>
          <label htmlFor="year">Year</label>
          <select ref={yearRef} id="year">
            <option value="2024">2024</option>
            <option value="2026">2026</option>
          </select>
        </div>
        <div>
          <label htmlFor="month">Month</label>
          <select ref={monthRef}  id="month">
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button onClick={submitHandler} > Find Events</Button>
    </form>
  );
};

export default SearchEvents;
