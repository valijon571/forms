import React from "react";
import axios from "axios";
import InputMask from "react-input-mask";
import { Link } from "react-router-dom";
import { Step0Style } from "./Step0Style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Step0 = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    gov_number: false,
    tech_passport_seria: false,
    tech_passport_number: false,
    user_not: false,
  });
  const [obj, setObj] = useState({
    gov_number: "",
    tech_passport_seria: "",
    tech_passport_number: "",
  });
  const [resData, setrResData] = useState({});
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("swefdwefwe");
    let t = true,
      err = {};
    if (!obj.gov_number) {
      t = false;
      err = { ...err, gov_number: true };
    }
    if (!obj.tech_passport_seria) {
      t = false;
      err = { ...err, tech_passport_seria: true };
    }
    if (!obj.tech_passport_number) {
      t = false;
      err = { ...err, tech_passport_number: true };
    }
    if (t) {
      console.log("ax");
      axios
        .post("https://apiinson.yarbek.uz/api/v1/gazbalon/vehicle", {
          gov_number: obj.gov_number,
          tech_passport_seria: obj.tech_passport_seria,
          tech_passport_number: obj.tech_passport_number,
        })
        .then((r) => {
          setrResData(r?.data?.data ?? {});
          // navigate("/Step1");
        })
        .catch((e) => {})
        .finally(() => {
          setLoading(false);
        });
    } else {
      console.log("errrr");
      setLoading(false);
      setErrors(err);
    }
  };

  return (
    <>
      <Step0Style>
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
              <form onSubmit={onSubmit}>
                <div class="row">
                  <div class="select_target">
                    <label>Гос. номер</label>
                    <br />
                    <div class="input_body">
                      <InputMask
                        // type="text"
                        placeholder="01A123AB"
                        name="gov_number"
                        mask="kklkkkll"
                        formatChars={{
                          k: "[0-9]",
                          l: "[A-Z]",
                          "*": "[A-Za-z0-9]",
                        }}
                        value={obj?.gov_number}
                        onChange={(e) => {
                          setObj({ ...obj, gov_number: e.target.value });
                          setErrors({ ...errors, gov_number: false });
                        }}
                      />
                      {errors?.gov_number ? (
                        <div style={{ color: "red" }}>xato</div>
                      ) : null}
                    </div>
                  </div>
                  <div class="doc_number">
                    <label>Серия и номер тех.паспорта</label>
                    <div class="inputs">
                      <div class="seria">
                        <div class="i_target">
                          <div class="input_body">
                            <InputMask
                              // type="text"
                              mask="ddd"
                              formatChars={{
                                d: "[A-Z]",
                                "*": "[A-Za-z0-9]",
                              }}
                              placeholder="ABD"
                              name="tech_passport_seria"
                              value={obj?.tech_passport_seria}
                              onChange={(e) => {
                                setObj({
                                  ...obj,
                                  tech_passport_seria: e.target.value,
                                });
                                setErrors({
                                  ...errors,
                                  tech_passport_seria: false,
                                });
                              }}
                            />
                            {errors?.tech_passport_seria ? (
                              <div style={{ color: "red" }}>xato</div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                      <div class="number">
                        <div class="i_target">
                          <div class="input_body">
                            <InputMask
                              // type="text"
                              placeholder="1234567"
                              name="tech_passport_number"
                              mask="nnnnnnn"
                              formatChars={{
                                n: "[0-9]",
                                "*": "[A-Za-z0-9]",
                              }}
                              value={obj?.tech_passport_number}
                              onChange={(e) => {
                                setObj({
                                  ...obj,
                                  tech_passport_number: e.target.value,
                                });
                                setErrors({
                                  ...errors,
                                  tech_passport_number: false,
                                });
                              }}
                            />
                            {errors?.tech_passport_number ? (
                              <div style={{ color: "red" }}>xato</div>
                            ) : null}
                            {errors?.user_not === true ? (
                              <div style={{ color: "red" }}>
                                Tizimga kirib bo'lmad. qayta kiriting!
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {resData?.orgname ? (
                    <>
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
                                  disabled={true}
                                  value={resData?.model_name}
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
                                  disabled={true}
                                  value={resData?.issue_year}
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
                                disabled={true}
                                value={resData?.orgname}
                              />
                            </div>
                          </div>
                        </label>
                      </div>
                    </>
                  ) : null}
                </div>
                <hr />
                <div class="btns">
                  {loading ? (
                    "Yuklanmoqda"
                  ) : (
                    <button type="submit" class="sc-imWYAI_fJvLDQ">
                      Найти
                    </button>
                  )}
                  {resData?.orgname ? (
                    <>
                      <div class="btns">
                        <Link
                          to="/Step2"
                          type="button"
                          class="sc-imWYAI_fJvLDQ"
                        >
                          Найти
                        </Link>

                        <Link to="/" type="button" class="sc-jXbUNg_kChvNU">
                          Tozalash
                        </Link>
                      </div>
                    </>
                  ) : null}
                </div>
              </form>
            </header>
          </div>
        </div>
      </Step0Style>
    </>
  );
};
export default Step0;
