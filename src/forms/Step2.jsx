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
  const [ben, setBen] = useState({
    passportSeries: "",
    passportNumber: "",
    birthDate: "",
    phone: "",
    inn: "",
    address: "",
  });
  const [ins, setIns] = useState({
    passportSeries: "",
    passportNumber: "",
    birthDate: "",
    phone: "",
    inn: "",
    address: "",
  });
  const [resData, setrResData] = useState({});
  const [rosData, setrRosData] = useState({});
  const navigate = useNavigate();
  //=======================================================BEN
  const BenSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    let t = true,
      err = {};
    if (!ben.passportSeries) {
      t = false;
      err = { ...err, passportSeries: true };
    }
    if (!ben.passportNumber) {
      t = false;
      err = { ...err, passportNumber: true };
    }
    if (!ben.birthDate) {
      t = false;
      err = { ...err, birthDate: true };
    }
    if (!ben.phone) {
      t = false;
      err = { ...err, phone: true };
    }
    if (!ben.inn) {
      t = false;
      err = { ...err, inn: true };
    }
    if (!ben.address) {
      t = false;
      err = { ...err, address: true };
    }
    if (t) {
      axios
        .post(
          "https://apiinson.yarbek.uz/api/v1/gazbalon/provider/passport-birth-date",
          {
            passportSeries: ben.passportSeries,
            passportNumber: ben.passportNumber,
            birthDate: formatDate(ben.birthDate),
            phone: ben.phone,
            inn: ben.inn,

            address: ben.address,
          }
        )
        .then((r) => {
          setrResData(r?.data.data ?? {});
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

  //========================================================INS
  const InsSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    let t = true,
      err = {};
    if (!ins.passportSeries) {
      t = false;
      err = { ...err, passportSeries: true };
    }
    if (!ins.passportNumber) {
      t = false;
      err = { ...err, passportNumber: true };
    }
    if (!ins.birthDate) {
      t = false;
      err = { ...err, birthDate: true };
    }
    if (!ins.phone) {
      t = false;
      err = { ...err, phone: true };
    }
    if (!ins.inn) {
      t = false;
      err = { ...err, inn: true };
    }
    if (!ins.address) {
      t = false;
      err = { ...err, address: true };
    }
    if (t) {
      axios
        .post(
          "https://apiinson.yarbek.uz/api/v1/gazbalon/provider/passport-birth-date",
          {
            passportSeries: ins.passportSeries,
            passportNumber: ins.passportNumber,
            birthDate: formatDate(ins.birthDate),
            phone: ins.phone,
            inn: ins.inn,

            address: ins.address,
          }
        )
        .then((r) => {
          setrRosData(r?.data.data ?? {});
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
                  <form onSubmit={BenSubmit}>
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
                                      a: "[A-Za-z]",
                                      "*": "[A-Za-z0-9]",
                                    }}
                                    value={ben?.passportSeries}
                                    onChange={(e) => {
                                      setBen({
                                        ...ben,
                                        passportSeries:
                                          e?.target?.value?.toUpperCase(),
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
                                    value={ben?.passportNumber}
                                    onChange={(e) => {
                                      setBen({
                                        ...ben,
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
                          <div className="step0">
                            <label class="sc-gsFSXq_dVuJAY" for="name">
                              <div class="label">Full Name</div>
                              <div class="i_target">
                                <div class="input_body_disabled">
                                  <input
                                    type="text"
                                    name="name"
                                    placeholder=""
                                    disabled={true}
                                    value={
                                      resData?.LAST_NAME +
                                      " " +
                                      resData?.FIRST_NAME +
                                      " " +
                                      resData?.MIDDLE_NAME
                                    }
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
                                  value={ben?.birthDate}
                                  onChange={(e) => {
                                    setBen({
                                      ...ben,
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
                                  value={ben?.phone}
                                  onChange={(e) => {
                                    setBen({ ...ben, phone: e.target.value });
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
                                  value={ben?.inn}
                                  onChange={(e) => {
                                    setBen({ ...ben, inn: e.target.value });
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
                                value={ben?.address}
                                onChange={(e) => {
                                  setBen({ ...ben, address: e.target.value });
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

                      {resData?.PINFL ? (
                        <>
                          <Link to="/" type="button" class="sc-jXbUNg_kChvNU">
                            Tozalash
                          </Link>
                        </>
                      ) : null}
                    </div>
                  </form>

                  <form onSubmit={InsSubmit}>
                    {resData?.PINFL ? (
                      <>
                        <div class="sub_title">Insurant data</div>

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
                                          a: "[A-Za-z]",
                                          "*": "[A-Za-z0-9]",
                                        }}
                                        value={ins?.passportSeries}
                                        onChange={(e) => {
                                          setIns({
                                            ...ins,
                                            passportSeries: e?.target?.value?.toUpperCase(),
                                          });
                                          setErrors({
                                            ...errors,
                                            passportSeries: false,
                                          });
                                        }}
                                      />
                                      {errors?.passportSeries ? (
                                        <div style={{ color: "red" }}>
                                          xatolik!
                                        </div>
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
                                        value={ins?.passportNumber}
                                        onChange={(e) => {
                                          setIns({
                                            ...ins,
                                            passportNumber: e.target.value,
                                          });
                                          setErrors({
                                            ...errors,
                                            passportNumber: false,
                                          });
                                        }}
                                      />
                                      {errors?.passportNumber ? (
                                        <div style={{ color: "red" }}>
                                          xatolik!
                                        </div>
                                      ) : null}
                                    </div>
                                  </div>
                                </label>
                              </div>
                            </div>
                          </div>
                          {rosData?.PINFL ? (
                            <>
                              <div className="step0">
                                <label class="sc-gsFSXq_dVuJAY" for="name">
                                  <div class="label">Full Name</div>
                                  <div class="i_target">
                                    <div class="input_body_disabled">
                                      <input
                                        type="text"
                                        name="name"
                                        placeholder=""
                                        disabled={true}
                                        value={
                                          rosData?.LAST_NAME +
                                          " " +
                                          rosData?.FIRST_NAME +
                                          " " +
                                          rosData?.MIDDLE_NAME
                                        }
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
                                      value={ins?.birthDate}
                                      onChange={(e) => {
                                        setIns({
                                          ...ins,
                                          birthDate: e.target.value,
                                        });
                                        setErrors({
                                          ...errors,
                                          birthDate: false,
                                        });
                                      }}
                                    />
                                    {errors?.birthDate ? (
                                      <div style={{ color: "red" }}>
                                        xatolik!
                                      </div>
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
                                      value={ins?.phone}
                                      onChange={(e) => {
                                        setIns({
                                          ...ins,
                                          phone: e.target.value,
                                        });
                                        setErrors({
                                          ...errors,
                                          phone: false,
                                        });
                                      }}
                                    />
                                    {errors?.phone ? (
                                      <div style={{ color: "red" }}>
                                        xatolik!
                                      </div>
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
                                      value={ins?.inn}
                                      onChange={(e) => {
                                        setIns({
                                          ...ins,
                                          inn: e.target.value,
                                        });
                                        setErrors({
                                          ...errors,
                                          inn: false,
                                        });
                                      }}
                                    />
                                    {errors?.inn ? (
                                      <div style={{ color: "red" }}>
                                        xatolik!
                                      </div>
                                    ) : null}
                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                          {rosData?.PINFL ? (
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
                                        value={rosData?.PINFL}
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
                                    value={ins?.address}
                                    onChange={(e) => {
                                      setIns({
                                        ...ins,
                                        address: e.target.value,
                                      });
                                      setErrors({
                                        ...errors,
                                        address: false,
                                      });
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
                          {rosData?.PINFL ? (
                            <>
                              <Link
                                to="/"
                                type="button"
                                class="sc-jXbUNg_kChvNU"
                              >
                                Tozalash
                              </Link>
                            </>
                          ) : null}
                        </div>
                        {rosData?.PINFL ? (
                          <>
                            <div class="number">
                              <label class="sc-gsFSXq_dVuJAY" for="promo_code">
                                <div class="label">Promo Code</div>
                                <div class="i_target">
                                  <div class="input_body">
                                    <input
                                      type="text"
                                      name="promo_code"
                                      placeholder=""
                                      // value=""
                                    />
                                  </div>
                                </div>
                              </label>
                            </div>
                            <div class="btns">
                              <button
                                type="button"
                                class="sc-imWYAI iFEioe"
                                // style="margin-right: 20px;"
                              >
                                Submit
                              </button>
                            </div>
                          </>
                        ) : null}
                      </>
                    ) : null}
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
