/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { Component } from "react";
import style from "./show.module.css";

class ShowPaises extends Component {
  constructor(props) {
    super(props);
  }

  render() {
		const { data,handleClickRemove } = this.props;
    return (

      <div className={style.divPri}>
        <label className={style.lavels}>Paises donde se agregan</label>
        <div className={style.divSec}>
          {data.paises.map((e) => {
            return (
              <button
                onClick={(event) => handleClickRemove(event)}
                className={style.p}
                key={e + 1}
              >
                {e.split(".")[2]}
                <span className={style.link} id={e}>
                  X
                </span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ShowPaises;
