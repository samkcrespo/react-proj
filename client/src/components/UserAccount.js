import React from "react";

function UserAccount({ user }) {
  return (
    <div class="container rounded bg-white mt-5 mb-5">
      <div class="row">
        <div class="col-md-3 border-right">
          <div class="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              class="rounded-circle mt-5"
              alt=""
              width="150px"
              src="https://cdn3d.iconscout.com/3d/free/thumb/user-3814118-3187499.png"
            />
            <span class="font-weight-bold">{user.username}</span>
            <span class="text-black-50"></span>
            <span> </span>
          </div>
        </div>
        <div class="col-md-5 border-right">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h4 class="text-right">Profile Settings</h4>
            </div>
            <div class="row mt-2">
              <div class="col-md-6">
                <label class="labels">Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                  value=""
                />
              </div>
              <div class="col-md-6">
                <label class="labels">Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  value=""
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-12">
                <label class="labels">Mobile Number</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="enter phone number"
                  value=""
                />
              </div>

              <div class="col-md-12">
                <label class="labels">Email</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="enter email id"
                  value=""
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-6">
                <label class="labels">Country</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="country"
                  value=""
                />
              </div>
              <div class="col-md-6">
                <label class="labels">State/Region</label>
                <input
                  type="text"
                  class="form-control"
                  value=""
                  placeholder="state"
                />
              </div>
            </div>
            <div class="mt-5 text-center">
              <button class="btn btn-primary profile-button" type="button">
                Save Profile
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center experience">
              <span>Account Settings</span>
              <span class="border px-3 p-1 add-experience">
                <i class="fa fa-plus"></i>&nbsp;Personal
              </span>
              <span class="border px-3 p-1 add-experience">
                <i class="fa fa-plus"></i>&nbsp;Business
              </span>
            </div>
            <div class="col-md-12">
              <label class="labels">Additional Details</label>
              <input
                type="text"
                class="form-control"
                placeholder="additional details"
                value=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserAccount;
