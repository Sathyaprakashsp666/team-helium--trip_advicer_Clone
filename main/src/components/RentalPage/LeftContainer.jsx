import React from "react";
import styles from "./LeftContainer.module.css";

const LeftContainer = () => {
  return (
    <div className={styles.LeftContainer}>
      <div>
        <button className={styles.clear_filter_btn}>Clear Filter</button>
      </div>
      <div>Map</div>
      <div>Distance</div>
      <div>
        <form>
          <label for="price">Price Per Night :</label>
          <br />
          <br />
          <br />
          <input type="range" id="price" name="price" min="0" max="1000" />
        </form>
        <h5>PLN 0 TO PLN 1000+</h5>
      </div>
      {/* //SUITABILITY */}
      <div>
        <form>
          <h5>Suitability</h5>
          <input
            type="checkbox"
            id="kid-frindly"
            name="kid-frindly"
            value="kid"
          />
          <label for="kid-frindly"> Kid friendly</label>
          <br />
          <input type="checkbox" id="elder" name="elder" value="elder" />
          <label for="elder"> Elder access</label>
          <br />
          <input type="checkbox" id="smoking" name="smoking" value="smoking" />
          <label for="smoking"> Smoking allowed</label>
          <br />
          <input type="checkbox" id="pet" name="pet" value="pet" />
          <label for="pet"> Pet freindly</label>
          <br />
          <input
            type="checkbox"
            id="wheelchair"
            name="wheelchair"
            value="wheelchair"
          />
          <label for="wheelchair"> Wheeelchair access</label>
          <br />
          <input type="checkbox" id="travel" name="travel" value="travel" />
          <label for="travel"> Bussiness Travel</label>
        </form>
      </div>
      {/* Bathrooms */}
      <div>
        <form>
          <label for="bathrooms">Bathrooms:</label>
          <br />
          <select name="bathrooms" id="bathrooms">
            <option value="1">Any</option>
            <option value="2">1+</option>
            <option value="3">2+</option>
            <option value="4">3+</option>
            <option value="5">4+</option>
          </select>
        </form>
      </div>
      <div>
        {/* Property type */}
        <form>
          <h5>Suitability</h5>
          <input type="checkbox" id="holiday" name="holiday" value="kid" />
          <label for="holiday"> Holiday Renatl Houses</label>
          <br />
          <input
            type="checkbox"
            id="apartment"
            name="apartment"
            value="apartment"
          />
          <label for="apartment"> Condominium/Apartment</label>
          <br />
          <input
            type="checkbox"
            id="private-room"
            name="private-room"
            value="private-room"
          />
          <label for="private-room"> Private Room</label>
          <br />
        </form>
      </div>
      <div>
        {/* Distinctive features */}
        <form>
          <h5>Distinctive Features</h5>
          <input
            type="checkbox"
            id="mountain"
            name="mountain"
            value="mountain"
          />
          <label for="mountain"> Mountain Views</label>
          <br />
          <input
            type="checkbox"
            id="housekeeping"
            name="housekeeping"
            value="housekeeping"
          />
          <label for="housekeeping"> Housekeeping Included</label>
          <br />
          <input type="checkbox" id="staff" name="staff" value="staff" />
          <label for="staff"> Staffed Property</label>
          <br />
        </form>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default LeftContainer;
