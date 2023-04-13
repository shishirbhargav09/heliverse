import React from "react";
import { filterData } from "../Store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";

const Filter = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.user.allUsers);
  const data = useSelector((state) => state.user.users);
  const { genders, domains } = useSelector((state) => state.user);

  let genderFilter = [];
  let domainFilter = [];
  let availableFilter = [];

  const submitFilterHandler = (e) => {
    console.log(genderFilter);
    console.log(domainFilter);
    console.log(availableFilter);
    const genderfilterUsers = allUsers.filter((user) => {
      return genderFilter.includes(user.gender);
    });
    const domainfilterUsers = genderfilterUsers.filter((user) => {
      return domainFilter.includes(user.domain);
    });
    const availablefilterUsers = domainfilterUsers.filter((user) => {
        return availableFilter.includes(user.available);
      });

    dispatch(filterData(availablefilterUsers));
    console.log(availablefilterUsers);
  };

  return (
    <div className="left">
      <div className="left_fixed">
        <p>Genders :</p>
        <br />
        {genders.map((gender) => {
          return (
            <div key={Math.random()}>
              <input
                type="checkbox"
                name={gender}
                id={gender}
                value={gender}
                onChange={(e) => {
                  // console.log(genderFilter);

                  if (!genderFilter.includes(e.target.value)) {
                    genderFilter.push(e.target.value);
                  } else {
                    const index = genderFilter.indexOf(e.target.value);
                    genderFilter.splice(index, 1);
                    //   console.log(genderFilter);
                  }

                  // const filterUsers = allUsers.filter((user) => {
                  //     return genderFilter.includes(user.gender)
                  // })
                  // console.log(filterUsers);
                  // dispatch(filterData(filterUsers))
                }}
              />
              <label htmlFor={gender}>{gender}</label>
            </div>
          );
        })}

        <br />
        <p>Domain : </p>
        <br />
        {domains.map((domain) => {
          return (
            <div key={Math.random()}>
              <input
                type="checkbox"
                name={domain}
                id={domain}
                value={domain}
                onChange={(e) => {
                  // console.log(e.target.value);
                  // console.log(domainFilter);

                  if (!domainFilter.includes(e.target.value)) {
                    domainFilter.push(e.target.value);
                  } else {
                    const index = domainFilter.indexOf(e.target.value);
                    domainFilter.splice(index, 1);
                    //   console.log(domainFilter);
                  }

                  // const filterusers = data.filter((user) => {
                  //     return domainFilter.includes(user.domain)

                  // })
                  // dispatch(filterData(filterusers))
                  // console.log(filterusers)
                }}
              />
              <label htmlFor={domain}>{domain}</label>
            </div>
          );
        })}
        <br />
        <p>Availaible :</p>
        <br />

        <input
          type="checkbox"
          name="true"
          id="true"
          value="true"
          onChange={(e) => {
            console.log(availableFilter);
            if (!availableFilter.includes(e.target.value)) {
              availableFilter.push(e.target.value);
            } else {
              const index = availableFilter.indexOf(e.target.value);
              availableFilter.splice(index, 1);
              //   console.log(availableFilter);
            }

            const filterusers = data.filter((user) => {
              return availableFilter.includes(user.domain);
            });
            // dispatch(filterData(filterusers))
            // console.log(filterusers)
          }}
        />
        <label htmlFor="true">True</label>
        <br />
        <input
          type="checkbox"
          name="false"
          id="false"
          value="false"
          onChange={(e) => {
            console.log(availableFilter);
            if (!availableFilter.includes(e.target.value)) {
              availableFilter.push(e.target.value);
            } else {
              const index = availableFilter.indexOf(e.target.value);
              availableFilter.splice(index, 1);
              //   console.log(availableFilter);
            }
            const filterusers = data.filter((user) => {
              return availableFilter.includes(user.domain);
            });
            // dispatch(filterData(filterusers))
            // console.log(filterusers)
          }}
        />
        <label htmlFor="false">False</label>
        <br />
        <Button variant="contained" onClick={submitFilterHandler}>
          Apply Filters
        </Button>
      </div>
    </div>
  );
};

export default Filter;
