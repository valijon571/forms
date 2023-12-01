import React from "react";
import { BalonStyle } from "./BalonStyle";

const Balon = () => {
  return (
    <>
      <BalonStyle>
        <div class="content">
          <div class="form_target">
            <div class="sc-jaXxmE_gwJYWD">
              <div class="sc-cmaqmh_suTSs">
                <div class="head">
                  <div class="sc-kAyceB_iZppJd">
                    <b>Заполнение</b> персональных данных
                  </div>
                </div>
                <div class="f_body">
                  <div class="sub_title">Beneficiary data</div>
                  <form>
                    <div class="row">
                      <div class="doc_number">
                        <label>Passport seria/nubmer</label>
                        <div class="inputs">
                          <div class="seria">
                            <label
                              class="sc-gsFSXq_dVuJAY"
                              for="passportSeries"
                            >
                              <div class="i_target">
                                <div class="input_body">
                                  <input
                                    placeholder="AB"
                                    name="passportSeries"
                                    value=""
                                  />
                                </div>
                              </div>
                            </label>
                          </div>
                          <div class="number">
                            <label
                              class="sc-gsFSXq_dVuJAY"
                              for="passportNumber"
                            >
                              <div class="i_target">
                                <div class="input_body">
                                  <input
                                    placeholder="1234567"
                                    name="passportNumber"
                                    value=""
                                  />
                                </div>
                              </div>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="col_2">
                        <div className="on">
                          <label class="sc-gsFSXq_dVuJAY" for="birthDate">
                            <div class="label">Birthdate</div>
                            <div class="i_target">
                              <div class="input_body">
                                <input
                                  type="date"
                                  name="birthDate"
                                  placeholder=""
                                  value=""
                                />
                              </div>
                            </div>
                          </label>
                        </div>
                        <div className="to">
                          <label class="sc-gsFSXq_dVuJAY" for="phone">
                            <div class="label">Phone</div>
                            <div class="i_target">
                              <div class="input_body">
                                <input placeholder="" name="phone" value="" />
                              </div>
                            </div>
                          </label>
                        </div>
                        <div className="sri">
                          <label class="sc-gsFSXq_dVuJAY" for="inn">
                            <div class="label">Inn</div>
                            <div class="i_target">
                              <div class="input_body">
                                <input placeholder="" name="inn" value="" />
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>
                      <div>
                        <label class="sc-gsFSXq_dVuJAY" for="address">
                          <div class="label">Address</div>
                          <div class="i_target">
                            <div class="input_body">
                              <input
                                type="text"
                                name="address"
                                placeholder=""
                                value=""
                              />
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                    <div class="btns">
                      <button type="submit" class="sc-imWYAI_fJvLDQ">
                        Найти
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BalonStyle>
    </>
  );
};
export default Balon;
