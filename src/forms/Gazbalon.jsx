import React from "react";
import { GazbalonStyle } from "./GazbalonStyle";
import { Link } from "react-router-dom";

const Gazbalon = () => {
  return (
    <>
      <GazbalonStyle>
        <div className="header">
          <div class="sc-cmaqmh_suTSs">
            <header>
              <div class="sc-kAyceB_iZppJd">
                <b>Заполнение</b> персональных данных
              </div>
            </header>
            <hr />
            <header>
              <div class="f_body">
                Данные свидетельства о регистрации <br />
                (техпаспорта) транспортного средства
              </div>

              <div class="row">
                <div class="select_target">
                  <label>Гос. номер</label>
                  <br />
                  <div class="input_body">
                    <input
                      type="text"
                      placeholder="01A123AB"
                      name="gov_number"
                      value=""
                    />
                  </div>
                </div>
                <div class="doc_number">
                  <label>Серия и номер тех.паспорта</label>
                  <div class="inputs">
                    <div class="seria">
                      <div class="i_target">
                        <div class="input_body">
                          <input
                            type="text"
                            placeholder="ABD"
                            name="tech_passport_seria"
                            value=""
                          />
                        </div>
                      </div>
                    </div>
                    <div class="number">
                      <div class="i_target">
                        <div class="input_body">
                          <input
                            type="text"
                            placeholder="1234567"
                            name="tech_passport_number"
                            value=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col_2">
                  <div>
                    <label class="sc-gsFSXq_dVuJAY" for="name">
                      <div class="label">Модель ТС</div>
                      <div class="i_target">
                        <div class="input_body_disabled">
                          <input
                            type="text"
                            name="name"
                            placeholder=""
                            disabled=""
                            value="NEXIA SOHC"
                          />
                        </div>
                      </div>
                    </label>
                  </div>
                  <div>
                    <label class="sc-gsFSXq_dVuJAY" for="name">
                      <div class="label">Год выпуска</div>
                      <div class="i_target">
                        <div class="input_body_disabled">
                          <input
                            type="text"
                            name="name"
                            placeholder=""
                            disabled=""
                            value="2014"
                          />
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
                <div>
                  <label class="sc-gsFSXq_dVuJAY" for="name">
                    <div class="label">Владелец (ФИО)</div>
                    <div class="i_target">
                      <div class="input_body_disabled">
                        <input
                          type="text"
                          name="name"
                          placeholder=""
                          disabled=""
                          value="MUSURMANOV YARBEK XUDAYBERDI OGLI"
                        />
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <hr />
              <div class="btns">
                <button type="button" class="sc-imWYAI_fJvLDQ">
                  Найти
                </button>
                <Link to="/" type="button" class="sc-jXbUNg_kChvNU">
                  Tozalash
                </Link>
              </div>
            </header>
          </div>
        </div>
      </GazbalonStyle>
    </>
  );
};
export default Gazbalon;
