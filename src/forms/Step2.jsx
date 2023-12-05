import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Step2Style } from "./Step2Style";
import InputMask from "react-input-mask";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Step2 = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    passportSeries: false,
    passportNumber: false,
    birthDate: false,
    phone: false,
    inn: false,
    address: false,
  });
  const [obj, setObj] = useState({
    passportSeries: "",
    passportNumber: "",
    birthDate: "",
    phone: "",
    inn: "",
    address: "",
  });
  const [resData, setrResData] = useState({});
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    let t = true,
      err = {};
    if (!obj.passportSeries) {
      t = false;
      err = { ...err, passportSeries: true };
    }
    if (!obj.passportNumber) {
      t = false;
      err = { ...err, passportNumber: true };
    }
    if (!obj.birthDate) {
      t = false;
      err = { ...err, birthDate: true };
    }
    if (!obj.phone) {
      t = false;
      err = { ...err, phone: true };
    }
    if (!obj.inn) {
      t = false;
      err = { ...err, inn: true };
    }
    if (!obj.address) {
      t = false;
      err = { ...err, address: true };
    }
    if (t) {
      axios
        .post(
          "https://apiinson.yarbek.uz/api/v1/gazbalon/provider/passport-birth-date",
          {
            passportSeries: obj.passportSeries,
            passportNumber: obj.passportNumber,
            birthDate: formatDate(obj.birthDate),
            phone: obj.phone,
            inn: obj.inn,
            
            address: obj.address,
          }
        )
        .then((r) => {
          setrResData(r?.data?.data ?? {});
        })
        .catch((e) => {})
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
      setErrors(err);
    }
  };
  const formatDate = (s = "") => {
    const l = s.split("-");
    return `${l[2]}.${l[1]}.${l[0]}`;
  };
  return (
    <>
      <Step2Style>
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
                  <form onSubmit={onSubmit}>
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
                                  <InputMask
                                    mask="aa"
                                    placeholder="AB"
                                    name="passportSeries"
                                    formatChars={{
                                      a: "[A-Z]",
                                      "*": "[A-Za-z0-9]",
                                    }}
                                    value={obj?.passportSeries}
                                    onChange={(e) => {
                                      setObj({
                                        ...obj,
                                        passportSeries: e.target.value,
                                      });
                                      setErrors({
                                        ...errors,
                                        passportSeries: false,
                                      });
                                    }}
                                  />
                                  {errors?.passportSeries ? (
                                    <div style={{ color: "red" }}>xatolik!</div>
                                  ) : null}
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
                                  <InputMask
                                    placeholder="1234567"
                                    name="passportNumber"
                                    mask="nnnnnnn"
                                    formatChars={{
                                      n: "[0-9]",
                                      "*": "[A-Za-z0-9]",
                                    }}
                                    value={obj?.passportNumber}
                                    onChange={(e) => {
                                      setObj({
                                        ...obj,
                                        passportNumber: e.target.value,
                                      });
                                      setErrors({
                                        ...errors,
                                        passportNumber: false,
                                      });
                                    }}
                                  />
                                  {errors?.passportNumber ? (
                                    <div style={{ color: "red" }}>xatolik!</div>
                                  ) : null}
                                </div>
                              </div>
                            </label>
                          </div>
                        </div>
                      </div>
                      {resData?.PINFL ? (
                        <>
                          <div>
                            <label class="sc-gsFSXq_dVuJAY" for="name">
                              <div class="label">Full Name</div>
                              <div class="i_target">
                                <div class="input_body_disabled">
                                  <input
                                    type="text"
                                    name="name"
                                    placeholder=""
                                    disabled={true} 
                                    value={resData?.LAST_NAME +" "+ resData?.FIRST_NAME +" "+ resData?.MIDDLE_NAME }
                                  />
                                </div>
                              </div>
                            </label>
                          </div>
                        </>
                      ) : null}
                      <div class="col_2">
                        <div className="on">
                          <label class="sc-gsFSXq_dVuJAY" for="birthDate">
                            <div class="label">Birthdate</div>
                            <div class="i_target">
                              <div class="input_body">
                                <InputMask
                                  type="date"
                                  name="birthDate"
                                  placeholder=""
                                  value={obj?.birthDate}
                                  onChange={(e) => {
                                    setObj({
                                      ...obj,
                                      birthDate: e.target.value,
                                    });
                                    setErrors({ ...errors, birthDate: false });
                                  }}
                                />
                                {errors?.birthDate ? (
                                  <div style={{ color: "red" }}>xatolik!</div>
                                ) : null}
                              </div>
                            </div>
                          </label>
                        </div>
                        <div className="to">
                          <label class="sc-gsFSXq_dVuJAY" for="phone">
                            <div class="label">Phone</div>
                            <div class="i_target">
                              <div class="input_body">
                                <InputMask
                                  placeholder=""
                                  name="phone"
                                  mask="+998(nn) nnn-nn-nn"
                                  formatChars={{
                                    n: "[0-9]",
                                    a: "[A-Za-z]",
                                    "*": "[A-Za-z0-9]",
                                  }}
                                  value={obj?.phone}
                                  onChange={(e) => {
                                    setObj({ ...obj, phone: e.target.value });
                                    setErrors({ ...errors, phone: false });
                                  }}
                                />
                                {errors?.phone ? (
                                  <div style={{ color: "red" }}>xatolik!</div>
                                ) : null}
                              </div>
                            </div>
                          </label>
                        </div>
                        <div className="sri">
                          <label class="sc-gsFSXq_dVuJAY" for="inn">
                            <div class="label">Inn</div>
                            <div class="i_target">
                              <div class="input_body">
                                <InputMask
                                  placeholder=""
                                  name="inn"
                                  value={obj?.inn}
                                  onChange={(e) => {
                                    setObj({ ...obj, inn: e.target.value });
                                    setErrors({ ...errors, inn: false });
                                  }}
                                />
                                {errors?.inn ? (
                                  <div style={{ color: "red" }}>xatolik!</div>
                                ) : null}
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>
                      {resData?.PINFL ? (
                        <>
                          <div>
                            <label class="sc-gsFSXq_dVuJAY" for="name">
                              <div class="label">PINFL</div>
                              <div class="i_target">
                                <div class="input_body_disabled">
                                  <input
                                    type="text"
                                    name="name"
                                    placeholder=""
                                    disabled={true}
                                    value={resData?.PINFL}
                                  />
                                </div>
                              </div>
                            </label>
                          </div>
                        </>
                      ) : null}
                      <div>
                        <label class="sc-gsFSXq_dVuJAY" for="address">
                          <div class="label">Address</div>
                          <div class="i_target">
                            <div class="input_body">
                              <InputMask
                                type="text"
                                name="address"
                                placeholder=""
                                value={obj?.address}
                                onChange={(e) => {
                                  setObj({ ...obj, address: e.target.value });
                                  setErrors({ ...errors, address: false });
                                }}
                              />
                              {errors?.address ? (
                                <div style={{ color: "red" }}>xatolik!</div>
                              ) : null}
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                    <div class="btns">
                      {loading ? (
                        "Yuborilmoqda"
                      ) : (
                        <button type="submit" class="sc-imWYAI_fJvLDQ">
                          Найти
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Step2Style>
    </>
  );
};
export default Step2;
