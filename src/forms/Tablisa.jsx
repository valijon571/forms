import React from "react";
import axios from "axios";
import { TablisaStyle } from "./TablisaStyle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Tablisa = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    gov_number: false,
    tech_passport_seria: false,
    user_tech_passport_numbernot: false,
    user_not: false,
  });
  const [obj, setObj] = useState({
    gov_number: "",
    tech_passport_seria: "",
    user_tech_passport_numbernot: "",
  });
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
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
    if (!obj.user_tech_passport_numbernot) {
      t = false;
      err = { ...err, user_tech_passport_numbernot: true };
    }
    if (t) {
      axios
        .post("https://apiinson.yarbek.uz/api/v1/gazbalon/vehicle", {
          gov_number: obj.gov_number,
          tech_passport_seria: obj.tech_passport_seria,
          user_tech_passport_numbernot: obj.user_tech_passport_numbernot,
        })
        .then((r) => {
          localStorage.setItem("token", r?.data?.tokens?.access ?? "");
          navigate("/gaz");
        })
        .catch((e) => {
          console.log(e);
          if (e?.response?.status === 400) {
            setErrors((pV) => ({ ...pV, user_not: true }));
          }
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
      setErrors(err);
    }
  };

  return (
    <>
      <TablisaStyle>
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
                      <input
                        type="text"
                        placeholder="01A123AB"
                        name="gov_number"
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
                            <input
                              type="text"
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
                            <input
                              type="text"
                              placeholder="1234567"
                              name="tech_passport_number"
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
                </div>
                <hr />
                <div class="btns">
                  {loading ? (
                    "Yuklanmoqda"
                  ) : (
                    <button type="submit" class="sc-imWYAI fJvLDQ">
                      Найти
                    </button>
                  )}
                </div>
              </form>
            </header>
          </div>
        </div>
      </TablisaStyle>
    </>
  );
};
export default Tablisa;