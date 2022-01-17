import React, { Component } from 'react';
import './accordion.scss'
class Exp extends Component {
  render() {
    return (
      <div className='Expbody'>
        <div class="row">
  <div class="col" data-aos="fade-right">
  <br />
    <h2>Mes <b>Formations</b></h2>
    <div class="tabs">
      <div class="tab">
        <input type="checkbox" id="chck1" />
        <label class="tab-label" for="chck1">Item 1</label>
        <div class="tab-content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!
        </div>
      </div>
      <div class="tab">
        <input type="checkbox" id="chck2" />
        <label class="tab-label" for="chck2">Item 2</label>
        <div class="tab-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
        </div>
      </div>
      <div class="tab">
        <input type="checkbox" id="chck3" />
        <label class="tab-label" for="chck3">Item 2</label>
        <div class="tab-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
        </div>
      </div>
      <div class="tab">
        <input type="checkbox" id="chck4" />
        <label class="tab-label" for="chck4">Item 2</label>
        <div class="tab-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
        </div>
      </div>
      <div class="tab">
        <input type="checkbox" id="chck5" />
        <label class="tab-label" for="chck5">Item 2</label>
        <div class="tab-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
        </div>
      </div>
    </div>
  </div>
  <br />
  <div class="col" data-aos="fade-left">
    <br />
  <h2>Mes <b>Expériences</b></h2>
    <div class="tabs">
      <div class="tab">
        <input type="radio" id="rd1" name="rd" />
        <label class="tab-label" for="rd1">Item 1</label>
        <div class="tab-content">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, facilis.
        </div>
      </div>
      <div class="tab">
        <input type="radio" id="rd2" name="rd" />
        <label class="tab-label" for="rd2">Item 2</label>
        <div class="tab-content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, aut.
        </div>
      </div>
      <div class="tab">
        <input type="radio" id="rd3" name="rd" />
        <label class="tab-label" for="rd3">Item 2</label>
        <div class="tab-content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, aut.
        </div>
      </div>
      <div class="tab">
        <input type="radio" id="rd4" name="rd" />
        <label class="tab-label" for="rd4">Item 2</label>
        <div class="tab-content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, aut.
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
    );
  }
}

export default Exp;