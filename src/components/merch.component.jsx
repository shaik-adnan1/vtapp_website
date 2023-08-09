import "./eventCard.component.css";

import { Link } from "react-router-dom";

import eventImg1 from "../assets/home/event1.png";

const merchData = [
  {
    merch_name: "Collared T-shirt",
    merch_disc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ",
  },
  {
    merch_name: "Hoodie",
    merch_disc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ",
  },
];

const MerchCard = ({img}) => {
  return (
    <>
      {merchData.map((cur, i) => {
         
         return (<div className='card'>
            <img src={img} alt='' className='event_img' />
            <div className='event_content'>
              <h3 className='event_name merch_name'>{cur.merch_name}</h3>
              <p className='event_description'>
                {cur.merch_disc}
              </p>

              <div className='register_btn_cnt'>
                <Link className='link cta_btn merch_cta'>Order Now</Link>
              </div>
            </div>
          </div>
        )
      })}
    </>
  );
};

export default MerchCard;
