import styles from "./Blogbox.module.css";

import React from "react";

const BlogBox = () => {
  return (
    <div>
      {/* visit dubai button */}
      <div className={styles.visit_btn}>
        <button className={styles.btn}>Sponcered By Visit Abu Dhabi</button>
      </div>

      {/* visit dubai button  blog container*/}
      <div className={styles.visit_cont_main}>
      <div className={styles.visit_cont}>
        <div>
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-c/2560x500/1c/b3/bd/e6/caption.jpg?w=600&h=600&s=1"
            alt=""
            width="100%"
          />
        </div>
        <div className={styles.visit_cont_text}>
          <div>
            <p className={styles.color_g}>
              <b>By</b> Visit Abu Dhabi
            </p>
            <p className={styles.heading}>Relax & Explore</p>
            <p>
              Whether you want to take a<br /> walk on the wild side, enjoy
              <br /> action-packed theme parks, <br />
              soak up the emirate's famous..
              <br />
            </p>
            <br />
            <p>
              <img
                src="https://image.flaticon.com/icons/png/512/833/833472.png"
                alt=""
                width="18px"
              />
            </p>
            <p>14 Items</p>
          </div>
        </div>
      </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      {/* weekend bag section */}
      <div className={styles.weekend_bag}>
        <h1 className={styles.weekend_bag_header}>Weekend bags miss weekend trips, too.</h1>
        <button className={styles.weekend_bag_btn}>Plan your next one</button>
      </div>
    </div>
  );
};

export default BlogBox;
