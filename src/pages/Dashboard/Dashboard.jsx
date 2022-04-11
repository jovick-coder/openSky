import React, { useEffect, useState } from "react";
import { DashboardNav } from "../../components/NavBar/Nav";
import { AiFillDashboard } from "react-icons/ai";

import axios from "axios";
import MapFlightsComponents from "../../components/MapFlights/MapFlightsComponents";
import SearchComponent from "../../components/SearchForm/SearchComponent";

import { Private_Data } from "../../private/private";
import "./Dashboard.css";

function Dashboard() {
  const [allFlights, setAllFlights] = useState({ loading: true, data: [] });

  const url = `https://${Private_Data.key}@opensky-network.org/api`;

  useEffect(() => {
    getFlights();
  }, [getFlights]);

  async function getFlights() {
    // data for the current timestamp returns null
    //  i got the  unix time for today
    let dateNow = Math.floor(Date.now() / 1000);
    // get record starting from a week back
    let begin = dateNow - 604800;
    // till one hour back
    let end = dateNow - 601200;
    try {
      let response = await axios({
        method: "get",
        url: `${url}/flights/all?begin=${begin}&end=${end}`,
        json: true,
      });

      setAllFlights({ loading: false, data: response.data });
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="Dashboard ">
      <DashboardNav currentPage="Dashboard" />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="mx-md-5 text-muted mt-4">
              <AiFillDashboard /> Dashboard
            </div>
          </div>
          <div className="col-md-6"></div>
        </div>
        <hr />
        <SearchComponent />

        <div className="row my-4">
          <div className="col-12">
            <div className="d-flex justify-content-between">
              <b className="my-auto"> Flight Record.</b>
            </div>
            <MapFlightsComponents allFlights={allFlights} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
