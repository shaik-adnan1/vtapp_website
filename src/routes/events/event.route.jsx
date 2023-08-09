import "./event.route.css";

import secDecor from "../../assets/common/decor.png";

import img from "../../assets/home/event1.png";
import EventCard2 from "../../components/eventCard2.component";

import { Link } from "react-router-dom";
import { useState } from "react";

const eventData = [
  {
    event_name: "VTAPP Designathon 2K22",
    event_poster: require("../../assets/home/event1.png"),
    event_disc: `Workshop on User Interface and User Experience (UI/UX) & Design
            models'`,
    event_keywords: "CSI Chapter",
    event_fee: 1.4,
  },
  {
    event_name: "VTAPP gameAthon 2K22",
    event_poster: require("../../assets/home/event2.png"),
    event_disc: `Workshop on User Interface and User Experience (UI/UX) & Design
            models'`,
    event_keywords: "CSI Chapter",
    event_fee: 23.4,
  },
  {
    event_name: "VTAPP callOfDuty tournament 2K22",
    event_poster: require("../../assets/home/event1.png"),
    event_disc: `Workshop on User Interface and User Experience (UI/UX) & Design
            models'`,
    event_keywords: "CSI Chapter",
    event_fee: 2.1,
  },
  {
    event_name: "VTAPP cod 2K22",
    event_poster: require("../../assets/home/event2.png"),
    event_disc: `Workshop on User Interface and User Experience (UI/UX) & Design
            models'`,
    event_keywords: "CSI Chapter",
    event_fee: 2,
  },
  {
    event_name: "Vtopia Designathon 2K22",
    event_poster: require("../../assets/home/event1.png"),
    event_disc: `Workshop on User Interface and User Experience (UI/UX) & Design
            models'`,
    event_keywords: "CSI Chapter",
    event_fee: 5.4,
  },
  {
    event_name: "vTech codeathon 2K22",
    event_poster: require("../../assets/home/event2.png"),
    event_disc: `Workshop on User Interface and User Experience (UI/UX) & Design
            models'`,
    event_keywords: "CSI Chapter",
    event_fee: 0.4,
  },
];

const Events = () => {
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");
  console.log(search);

  return (
    <div className='section event_section'>
      <img src={secDecor} alt='' className='section_decor section_decor1' />
      <img src={secDecor} alt='' className='section_decor section_decor2' />

      <h1 className='event_heading section_heading event_page_heading'>
        <span className='heading_span'>Events</span>
      </h1>
      <div className='event_search_sort_cont'>
        <div className='search_icon'>
          <ion-icon name='search-outline'></ion-icon>
        </div>
        <input
          type='search'
          className='search_event_input'
          placeholder='Search...'
          onChange={e => setSearch(e.target.value)}
        />
        <select
          name=''
          id='sort_event'
          onChange={e => {
            setSelect(e.target.value);
            console.log(e.target.value);
            // console.log();
          }}
        >
          <option value='Sort' disabled selected>
            Sort
          </option>
          <option value='high to low'>Price - high to low</option>
          <option value='low to high'>Price - low to high</option>
        </select>
      </div>
      <div className='event_card_cont'>
        {eventData
          .sort((a, b) => {
            return select.toLowerCase() == ""
              ? eventData
              : select == "high to low"
              ? a.event_fee < b.event_fee
                ? 1
                : -1
              : select == "low to high"
              ? a.event_fee > b.event_fee
                ? 1
                : -1
              : null;
          })
          .filter(item => {
            return search.toLowerCase() == ""
              ? item
              : item.event_name.toLowerCase().includes(search);
          })
          .map((cur, i) => {
            return (
              <div className='card event_card'>
                <img src={cur.event_poster} alt='' className='event_img' />
                <div className='event_content'>
                  <h3 className='event_name'>{cur.event_name}</h3>
                  <p className='event_description'>{cur.event_disc}</p>
                  <div className='event_keywords'>
                    <Link to='' className='link keyword_link'>
                      CSI Chapter
                    </Link>
                    <Link to='' className='link keyword_link'>
                      Workshop
                    </Link>
                  </div>
                  <h3 className='event_fee'>Entry Fee - ${cur.event_fee}</h3>
                  <div className='register_btn_cnt'>
                    <Link className='link cta_btn '>Register Now</Link>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Events;
