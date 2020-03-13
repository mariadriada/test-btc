import React, { useState } from "react";
import CustomInput from "../../customElements/customInput";
import CustomSelector from "../../customElements/customSelector";
import { FaSyncAlt } from "react-icons/fa";
import { connect } from "react-redux";
import { converter, setData } from "../../../redux/actions";
import "./style.scss";

const Converter = props => {
  // Extract list of coins to show in selector
  const [coinsList, setCoinsList] = useState([]);
  const { conversionData, converted } = props;

  useState(() => {
    const coins = () => {
      const listCoins = props.coins.allCoins.prices.map(
        item => item.id_currency
      );
      setCoinsList(listCoins);
      props.converter(conversionData.data);
    };
    coins();
  }, [coinsList]);

  //Value on fields
  const getValue = async (id, value) => {
    await props.setData({
      id: id, 
      value: value
    })

    switch (id) {
      case "qty":
        props.converter(Object.assign(conversionData.data, { qty: value }));
        break;
      case "from":
        props.converter(Object.assign(conversionData.data, { from: value }));
        break;
      case "to":
        props.converter(Object.assign(conversionData.data, { to: value }));
    }
  };

  const chageCoinToConverter = async () => {
    props.setData({id: 'from', value: conversionData.data.to})
    props.setData({id: 'to', value: conversionData.data.from})
    props.converter(Object.assign(conversionData.data, { 
      to: conversionData.data.from, 
      from: conversionData.data.to
    }));
  };

  return (
    <div className="form-container">
      <div className="title-container">
        <h1>Realizar cambio</h1>
        <h2>Seleccionar monedas</h2>
      </div>

      <div className="form">
        <div className="fields">
          <CustomInput
            placeholder={conversionData.data.qty}
            type="coin"
            getValue={getValue}
            id="qty"
          />

          <CustomSelector
            type="coin"
            getValue={getValue}
            id="from"
            options={coinsList}
            value={conversionData.data.from}
            default={conversionData.data.from}
          />

          <CustomSelector
            type="coin"
            getValue={getValue}
            id="to"
            options={coinsList}
            default={conversionData.data.to}
            value={conversionData.data.to}
          />

          <CustomInput
            placeholder={
              converted && converted.success ? converted.to_quantity : "1000,00"
            }
            type="coin"
            getValue={getValue}
            id="conversion"
            bgcolor="gray"
          />
        </div>

        <div
          className="button-container"
          onClick={() => chageCoinToConverter()}
        >
          <FaSyncAlt className="button" />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ coins, conversionData }) => ({
  coins,
  conversionData,
  converted: conversionData.converted
});

const mapDispatchToProps = dispatch => ({
  converter: data => dispatch(converter(data)),
  setData: data => dispatch(setData(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Converter);
