import React from "react";
import { Step4Style } from "./Step4Style";
import { Link } from "react-router-dom";

const Step4 = () => {
  return (
    <>
      <Step4Style>
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
                          <label class="sc-gsFSXq_dVuJAY" for="passportSeries">
                            <div class="i_target">
                              <div class="input_body_disabled">
                                <input
                                  placeholder="AB"
                                  name="passportSeries"
                                  value="AB"
                                  disabled=""
                                />
                              </div>
                            </div>
                          </label>
                        </div>
                        <div class="number">
                          <label class="sc-gsFSXq_dVuJAY" for="passportNumber">
                            <div class="i_target">
                              <div class="input_body_disabled">
                                <input
                                  placeholder="1234567"
                                  name="passportNumber"
                                  value="5116822"
                                  disabled=""
                                />
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label class="sc-gsFSXq_dVuJAY" for="name">
                        <div class="label">Full Name</div>
                        <div class="i_target">
                          <div class="input_body_disabled">
                            <input
                              type="text"
                              name="name"
                              placeholder=""
                              disabled=""
                              value="QARSHIBOYEV VALIJON NURILLA O‘G‘LI"
                            />
                          </div>
                        </div>
                      </label>
                    </div>
                    <div class="col_2">
                      <div>
                        <label class="sc-gsFSXq_dVuJAY" for="birthDate">
                          <div class="label">Birthdate</div>
                          <div class="i_target">
                            <div class="input_body_disabled">
                              <input
                                type="date"
                                name="birthDate"
                                placeholder=""
                                value="1997-12-28"
                                disabled=""
                              />
                            </div>
                          </div>
                        </label>
                      </div>
                      <div>
                        <label class="sc-gsFSXq_dVuJAY" for="phone">
                          <div class="label">Phone</div>
                          <div class="i_target">
                            <div class="input_body_disabled">
                              <input
                                placeholder=""
                                name="phone"
                                value="+998(55) 555-55-55"
                                disabled=""
                              />
                            </div>
                          </div>
                        </label>
                      </div>
                      <div>
                        <label class="sc-gsFSXq_dVuJAY" for="inn">
                          <div class="label">Inn</div>
                          <div class="i_target">
                            <div class="input_body_disabled">
                              <input
                                placeholder=""
                                name="inn"
                                value="4444444"
                                disabled=""
                              />
                            </div>
                          </div>
                        </label>
                      </div>
                      <div>
                        <label class="sc-gsFSXq_dVuJAY" for="name">
                          <div class="label">PINFL</div>
                          <div class="i_target">
                            <div class="input_body_disabled">
                              <input
                                type="text"
                                name="name"
                                placeholder=""
                                disabled=""
                                value="32812975440034"
                              />
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                    <div>
                      <label class="sc-gsFSXq_dVuJAY" for="address">
                        <div class="label">Address</div>
                        <div class="i_target">
                          <div class="input_body_disabled">
                            <input
                              type="text"
                              name="address"
                              placeholder=""
                              value="22222222"
                              disabled=""
                            />
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div class="btns">
                    <button
                      type="button"
                      class="sc-jXbUNg_kChvNU"
                      //   style="margin: 0px 10px 0px 0px;"
                    >
                      Tozalash
                    </button>
                  </div>
                </form>
                <div class="sub_title">Insurant data</div>
                <form>
                  <div class="row">
                    <div class="doc_number">
                      <label>Passport seria/nubmer</label>
                      <div class="inputs">
                        <div class="seria">
                          <label class="sc-gsFSXq_dVuJAY" for="passportSeries">
                            <div class="i_target">
                              <div class="input_body_disabled">
                                <input
                                  placeholder="AB"
                                  name="passportSeries"
                                  value="AB"
                                  disabled=""
                                />
                              </div>
                            </div>
                          </label>
                        </div>
                        <div class="number">
                          <label class="sc-gsFSXq_dVuJAY" for="passportNumber">
                            <div class="i_target">
                              <div class="input_body_disabled">
                                <input
                                  placeholder="1234567"
                                  name="passportNumber"
                                  value="5116822"
                                  disabled=""
                                />
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label class="sc-gsFSXq_dVuJAY" for="name">
                        <div class="label">Full Name</div>
                        <div class="i_target">
                          <div class="input_body_disabled">
                            <input
                              type="text"
                              name="name"
                              placeholder=""
                              disabled=""
                              value="QARSHIBOYEV VALIJON NURILLA O‘G‘LI"
                            />
                          </div>
                        </div>
                      </label>
                    </div>
                    <div class="col_2">
                      <div>
                        <label class="sc-gsFSXq_dVuJAY" for="birthDate">
                          <div class="label">Birthdate</div>
                          <div class="i_target">
                            <div class="input_body_disabled">
                              <input
                                type="date"
                                name="birthDate"
                                placeholder=""
                                value="1997-12-28"
                                disabled=""
                              />
                            </div>
                          </div>
                        </label>
                      </div>
                      <div>
                        <label class="sc-gsFSXq_dVuJAY" for="phone">
                          <div class="label">Phone</div>
                          <div class="i_target">
                            <div class="input_body_disabled">
                              <input
                                placeholder=""
                                name="phone"
                                value="+998(55) 555-55-55"
                                disabled=""
                              />
                            </div>
                          </div>
                        </label>
                      </div>
                      <div>
                        <label class="sc-gsFSXq_dVuJAY" for="inn">
                          <div class="label">Inn</div>
                          <div class="i_target">
                            <div class="input_body_disabled">
                              <input
                                placeholder=""
                                name="inn"
                                value="4444444"
                                disabled=""
                              />
                            </div>
                          </div>
                        </label>
                      </div>
                      <div>
                        <label class="sc-gsFSXq_dVuJAY" for="name">
                          <div class="label">PINFL</div>
                          <div class="i_target">
                            <div class="input_body_disabled">
                              <input
                                type="text"
                                name="name"
                                placeholder=""
                                disabled=""
                                value="32812975440034"
                              />
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                    <div>
                      <label class="sc-gsFSXq_dVuJAY" for="address">
                        <div class="label">Address</div>
                        <div class="i_target">
                          <div class="input_body_disabled">
                            <input
                              type="text"
                              name="address"
                              placeholder=""
                              value="555555555555"
                              disabled=""
                            />
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div class="btns">
                    <button
                      type="button"
                      class="sc-jXbUNg_kChvNU"
                      //   style="margin: 0px 10px 0px 0px;"
                    >
                      <Link to="Step3">Tozalash</Link>
                    </button>
                  </div>
                </form>
                <div class="row">
                  <div class="number">
                    <label class="sc-gsFSXq_dVuJAY" for="promo_code">
                      <div class="label">Promo Code</div>
                      <div class="i_target">
                        <div class="input_body">
                          <input
                            type="text"
                            name="promo_code"
                            placeholder=""
                            value=""
                          />
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
                <div class="btns">
                  <button
                    type="button"
                    class="sc-imWYAI_iFEioe"
                    // style="margin-right: 20px;"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Step4Style>
    </>
  );
};
export default Step4;
