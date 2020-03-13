import React, { useState } from "react";
import { connect } from "react-redux";
import { getAllCoins, setKey } from "../../redux/actions";
import { Tabs, Tab } from "react-bootstrap";
import CoinList from "./CoinList";
import Conversion from "./Converter";
import Layout from "../Layout";
import "./style.scss";

const Coins = props => {
  useState(() => {
    const getData = () => {
      props.getAllCoins();
    };
    getData();
  }, []);

  const handleClickOnTab = k => {
    props.setKey(k);
  };

  return (
    <Layout>
      {!props.coins.loaded ? (
        <div className="loading">
          <h1 className="text">React Developer Test - SOPHOS</h1>
          <h2 className="text">
            <em>
              Present by: <br></br>
            </em>{" "}
            Maria Eugenia Giraldo Forero
          </h2>
          <em>
            <h2>Thank you so much!</h2>
          </em>
        </div>
      ) : (
        <Tabs
          justify
          variant="tabs"
          defaultActiveKey={1}
          activeKey={props.keyTab ? props.keyTab : 1}
          onSelect={handleClickOnTab}
        >
          <Tab eventKey={1} title="REALIZAR CAMBIO">
            <Conversion />
          </Tab>
          <Tab
            eventKey={2}
            title="LISTADO DE MONEDAS"
            onSelect={k => props.setKey(2)}
          >
            <CoinList />
          </Tab>
        </Tabs>
      )
      }
    </Layout>
  );
};

const mapStateToProps = ({ coins, keyTab }) => ({
  coins,
  keyTab
});

const mapDispatchToProps = dispatch => ({
  getAllCoins: () => dispatch(getAllCoins()),
  setKey: key => dispatch(setKey(key))
});

export default connect(mapStateToProps, mapDispatchToProps)(Coins);
