import React, { useState } from 'react';

export default function Form(props) {

    const [member, setMember] = useState ( {
        name: "",
        email: "",
        role: "",
    })

    function handleChange(event){
        const updatedMember = { ...member, [event.target.name]: event.target.value };
        console.log(
            "handleChange",
            event.target.name,
            event.target.value,
            updatedMember
        );
        setMember(updatedMember);

        function handleSubmit(event) {
            event.preventDefault();
            console.log("Member State", member);
          }

          return (
            <form onSubmit={handleSubmit}>
              <fieldset>
                <legend>Become A Member</legend>
                <div>
                  <label for="name">
                    Name
                    <div className="col-sm-10">
                      <input
                        type="text"
                        name="member"
                        placeholder="Enter your name"
                        value={member.name}
                        onChange={handleChange}
                      />
                    </div>
                  </label>
                </div>
                <div>
                  <label for="Email">Email address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={member.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label for="Role">Role</label>
                  <input
                    type="text"
                    name="role"
                    placeholder="Enter your role"
                    onChange={handleChange}
                    value={member.role}
                  />
                </div>
                <button type="submit">
                  Submit
                </button>
              </fieldset>
            </form>
    );}
}