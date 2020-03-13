import React, { useState } from "react";
import { connect } from "react-redux";
import { getAllCoins, setKey } from "../../redux/actions";
import { Button, Tabs, Tab } from "react-bootstrap";
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

  return (
    <Layout>
      {!props.coins.loaded ? (
        <div>Loading</div>
      ) : (
        <Tabs
          justify
          variant="tabs"
          //defaultActiveKey={1}
          //activeKey={props.key}
          //eventKey={k => props.setKey(k)}
          onSelect={k => props.setKey(k)}
          //mountOnEnter={true}
        >
          <Tab eventKey={1} title="REALIZAR CAMBIO"
          //onSelect={k => props.setKey(1)}
          >
            <Conversion />
          </Tab>
          <Tab 
            eventKey={2}
            title="LISTADO DE MONEDAS"
            //onSelect={()=> alert('chjaskl')}
            >
            <CoinList />
          </Tab>
        </Tabs>
      )}
    </Layout>
  );
};

const mapStateToProps = ({ coins, key }) => ({
  coins,
  key
});

const mapDispatchToProps = dispatch => ({
  getAllCoins: () => dispatch(getAllCoins()),
  setKey: (key) => dispatch(setKey(key))
});

export default connect(mapStateToProps, mapDispatchToProps)(Coins);
