import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";


class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      side: "tura",
      flipping: false,
      turasayısı:0,
      yazısayısı:0,
      flip:0,
    };
  }
  handleClick = () => {
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
    this.setState({ flipping: true });
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({ flipping: false }), 1000);


    const result = Math.random() <0.5 ? "tura" : "yazi";
    this.setState({ flipping: true, side:result}, ()=>{
      this.state.side === "yazi" ? this.setState({yazısayısı: this.state.yazısayısı+1})
                                 : this.setState({turasayısı: this.state.turasayısı+1})
    })
    this.setState({flip: this.state.flip+1})
  };



  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong> {this.state.flip} </strong>
          atıştan
          <strong> {this.state.turasayısı} </strong>ü tura
          <strong> {this.state.yazısayısı} </strong>
          si yazı geldi.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
