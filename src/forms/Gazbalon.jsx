import React from "react";
import { GazbalonStyle } from "./GazbalonStyle";

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
              </div>
              <hr />
              <div class="btns">
                <button type="submit" class="sc-imWYAI fJvLDQ">
                  Найти
                </button>
              </div>
            </header>
          </div>
        </div>
      </GazbalonStyle>
    </>
  );
};
export default Gazbalon;
