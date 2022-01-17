import React, { Component } from "react";
import "./parcours.scss";


class Parcours extends Component {
  render() {
    return (
      <div>
        <div id="middle">
          <div className="Expbody">
            <div className="row">
              <div className="colA" data-aos="fade-right">
                <br />
                <h2>
                  Mes <b>Formations</b>
                </h2>
                <div className="tabsA">
                  <div className="tab">
                    <input type="checkbox" id="chck1" />
                    <label className="tab-label" htmlFor="chck1">
                      2019-2020 : Licence 3, Information-Communication
                    </label>
                    <div className="tab-content">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Ipsum, reiciendis!
                    </div>
                  </div>
                  <div className="tab">
                    <input type="checkbox" id="chck2" />
                    <label className="tab-label" htmlFor="chck2">
                      2020-2021 : Licence 2, Information-Communication
                    </label>
                    <div className="tab-content">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      A, in!
                    </div>
                  </div>
                  <div className="tab">
                    <input type="checkbox" id="chck3" />
                    <label className="tab-label" htmlFor="chck3">
                      2019-2020 : Licence 1, Information-Communication
                    </label>
                    <div className="tab-content">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      A, in!
                    </div>
                  </div>
                  <div className="tab">
                    <input type="checkbox" id="chck4" />
                    <label className="tab-label" htmlFor="chck4">
                      2017-2019 : Licence 1, Droit
                    </label>
                    <div className="tab-content">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      A, in!
                    </div>
                  </div>
                  <div className="tab">
                    <input type="checkbox" id="chck5" />
                    <label className="tab-label" htmlFor="chck5">
                      2017 : Bac Economique et Social
                    </label>
                    <div className="tab-content">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      A, in!
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="colA" data-aos="fade-left">
                <br />
                <h2>
                  Mes <b>Expériences</b>
                </h2>
                <div className="tabsA">
                  <div className="tab">
                    <input type="checkbox" id="rd1" name="rd" />
                    <label className="tab-label" htmlFor="rd1">
                      2021 : Préparateur de commandes chez la marque E.Leclerc
                    </label>
                    <div className="tab-content">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Eos, facilis.
                    </div>
                  </div>
                  <div className="tab">
                    <input type="checkbox" id="rd2" name="rd" />
                    <label className="tab-label" htmlFor="rd2">
                      2020 : Vendeur polyvalent, chez la marque BUT
                    </label>
                    <div className="tab-content">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Nihil, aut.
                    </div>
                  </div>
                  <div className="tab">
                    <input type="checkbox" id="rd3" name="rd" />
                    <label className="tab-label" htmlFor="rd3">
                      2019 : Préparateur de commandes chez la marque E.Leclerc
                    </label>
                    <div className="tab-content">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Nihil, aut.
                    </div>
                  </div>
                  <div className="tab">
                    <input type="checkbox" id="rd4" name="rd" />
                    <label className="tab-label" htmlFor="rd4">
                      2015 - 2016 - 2017 - 2018 : Animateur en colonie de
                      vacances
                    </label>
                    <div className="tab-content">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Nihil, aut.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Parcours;
