import React, { useState } from "react";
import { Table, thead, Container, Row, Col, Button } from "react-bootstrap";
import { 
  getAllCoins, 
  setCurrentCoinsShowing, 
  setKey, 
  converter,
  setData
} from "../../../redux/actions";
import { connect } from "react-redux";
import Crypto from "../../Crypto";
import ButtonChange from "./ButtonChange"
import "./style.scss";

const CoinList = props => {
  let [items, setItems] = useState([]);
  let [itemsShowed, setItemShowed] = useState(40);
  let [scrollTop, setScrollTop] = useState(0);
  const { coins, conversionData } = props;

  useState(() => {
    const getData = () => {
      setItems(coins.allCoins.prices);
    };
    getData();
  }, [items]);

  const scrolling = e => {
    if (e.currentTarget.scrollTop >= scrollTop + 500) {
      setItemShowed(itemsShowed + 20);
      setScrollTop(e.currentTarget.scrollTop);
      props.setCurrentCoinsShowing(itemsShowed);
    }
  }

  const onChange = async (e, data) => {
    await props.setData({id: 'from', value: "BTC"})
    await props.setData({id: 'to', value: data})
    props.setKey(1)
  }

  return (
    <Container className="table-coins" onScroll={e => scrolling(e)}>
      <React.Fragment>
        <Row className="thead">
          <Col>Nombre</Col>
          <Col className="left" >Precio</Col>
          <Col className="center">Criptomoneda</Col>
          <Col className="right">Convertir</Col>
        </Row>
        {coins.currentList.map(item => (
          <Row className="trow" key={item.id_currency}>
            <Col>{item.name}</Col>
            <Col className="price" md={4}>{item.price}</Col>
            <Col >
              <Crypto isCrypto={item.crypto} />
            </Col>
            <Col>
              <ButtonChange
              onClick={(e, coin=item.id_currency) => onChange(e, coin)}/>
            </Col>
          </Row>
        ))}
      </React.Fragment>
    </Container>
  );
};

const mapStateToProps = ({ coins, conversionData }) => ({
  coins,
  conversionData,
});

const mapDispatchToProps = dispatch => ({
  getAllCoins: () => dispatch(getAllCoins()),
  setCurrentCoinsShowing: nItemsLoaded =>
    dispatch(setCurrentCoinsShowing(nItemsLoaded)),
  setKey: (key) => dispatch(setKey(key)),
  converter: data => dispatch(converter(data)),
  setData: data => dispatch(setData(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(CoinList);


