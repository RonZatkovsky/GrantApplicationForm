import React from "react";
import { Startup } from "../components/Startup";
import { Business } from "../components/Business";

export const Form=()=>{
    return(
    <div className='row mt-5'>
      {/*Pills navbar betwen new businesses and 6-12 month businesses */}
      <ul class="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="pills-startup-tab" data-bs-toggle="pill" data-bs-target="#pills-startup" type="button" role="tab" aria-controls="pills-startup" aria-selected="true">Startup Business Grant</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="pills-business-tab" data-bs-toggle="pill" data-bs-target="#pills-business" type="button" role="tab" aria-controls="pills-business" aria-selected="false">6–12 Month Business Owner Grant</button>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">
        {/*Startup pill start */}
        <div class="tab-pane fade show active" id="pills-startup" role="tabpanel" aria-labelledby="pills-startup-tab">
          <Startup/>
        </div>
        {/*6-12 Business start */}
        <div class="tab-pane fade" id="pills-business" role="tabpanel" aria-labelledby="pills-business-tab">
          <Business/>
        </div>
      </div>
    </div>
    )
}