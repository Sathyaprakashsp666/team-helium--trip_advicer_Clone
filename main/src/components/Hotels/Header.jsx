import React from "react";
import TextField from '@material-ui/core/TextField';
import DateRangePicker from '@material-ui/lab/DateRangePicker';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import Box from '@material-ui/core/Box';

const Header = () => {
  const [value, setValue] = React.useState([null, null]);
  return (
    <div className="header-main-div">
      <div className="header-map-div">
        <img src="https://imagehost7.online-image-editor.com/oie_upload/images/OIE_2019NOV_48127795_40456177/190830BI15WS0h.png" alt="map_image" />
      </div>
      <div className="header-city-text">
        <div className="city-name-div">
          <h1>Pune Hotels and Places to Stay</h1>
        </div>
        <div className="checkin-checkout">
          <LocalizationProvider className="checkin" dateAdapter={AdapterDateFns}>
            <DateRangePicker
              startText="Check-in"
              endText="Check-out"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                  <TextField {...startProps} />
                  <Box sx={{ mx: 2 }}> to </Box>
                  <TextField {...endProps} />
                </React.Fragment>
              )}
            />
          </LocalizationProvider>
        </div>
      </div>
    </div>
  );
};

export default Header;


// npm i @emotion/styled
// npm i @emotion/react
// npm i date-fns
// npm i @material-ui/lab@next
// npm i @material-ui/core@next