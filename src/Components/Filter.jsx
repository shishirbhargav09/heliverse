import React from "react";
import { filterData } from "../Store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";

const Filter = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.user.allUsers);
  const { genders, domains, available } = useSelector((state) => state.user);
  let genderFilter = [];
  let domainFilter = [];
  let availableFilter = [];

  const submitFilterHandler = (e) => {
    console.log(genderFilter);
    console.log(domainFilter);
    console.log(availableFilter);
    if (
      genderFilter.length > 0 &&
      domainFilter.length > 0 &&
      availableFilter.length > 0
    ) {
      const genderfilterUsers = allUsers.filter((user) => {
        return genderFilter.includes(user.gender);
      });

      const domainfilterUsers = genderfilterUsers.filter((user) => {
        return domainFilter.includes(user.domain);
      });
      const availablefilterUsers = domainfilterUsers.filter((user) => {
        return availableFilter.includes(user.available.toString());
      });

      dispatch(filterData(availablefilterUsers));

      genderFilter = [];
      domainFilter = [];
      availableFilter = [];
      console.log(availablefilterUsers);
    } else if ( genderFilter.length > 0 &&
        domainFilter.length === 0 &&
        availableFilter.length === 0 ) {
      const genderfilterUsers = allUsers.filter((user) => {
        return genderFilter.includes(user.gender);
      });

      dispatch(filterData(genderfilterUsers));

      genderFilter = [];
      domainFilter = [];
      availableFilter = [];
      console.log(genderfilterUsers);
    } else if ( genderFilter.length ===0 &&
        domainFilter.length > 0 &&
        availableFilter.length === 0) {
        const domainfilterUsers = allUsers.filter((user) => {
          return domainFilter.includes(user.domain);
        });
  
        dispatch(filterData(domainfilterUsers));
  
        genderFilter = [];
        domainFilter = [];
        availableFilter = [];
        console.log(domainfilterUsers);
      }
     else if ( genderFilter.length > 0 &&
        domainFilter.length > 0 &&
        availableFilter.length === 0) {
        const genderfilterUsers = allUsers.filter((user) => {
            return genderFilter.includes(user.gender);
          });
    
          const domainfilterUsers = genderfilterUsers.filter((user) => {
            return domainFilter.includes(user.domain);
          });

      console.log(domainfilterUsers);
      dispatch(filterData(domainfilterUsers));
      genderFilter = [];
      domainFilter = [];
      availableFilter = [];
    } else if (
      domainFilter.length > 0 &&
      genderFilter.length === 0 &&
      availableFilter.length === 0
    ) {
      const domainfilterUsers = allUsers.filter((user) => {
        return domainFilter.includes(user.domain);
      });

      console.log(domainfilterUsers);
      dispatch(filterData(domainfilterUsers));
      genderFilter = [];
      domainFilter = [];
      availableFilter = [];
    }
    else if (
        domainFilter.length > 0 &&
        genderFilter.length === 0 &&
        availableFilter.length > 0
      ) {
        const domainfilterUsers = allUsers.filter((user) => {
          return domainFilter.includes(user.domain);
        });
        const availablefilterUsers = domainfilterUsers.filter((user) => {
            return availableFilter.includes(user.available.toString());
          });
  
        console.log(availablefilterUsers);
        dispatch(filterData(availablefilterUsers));
        genderFilter = [];
        domainFilter = [];
        availableFilter = [];
      }else if (
        domainFilter.length === 0 &&
        genderFilter.length > 0 &&
        availableFilter.length > 0
      ) {
        const genderfilterUsers = allUsers.filter((user) => {
          return genderFilter.includes(user.gender);
        });
        const availablefilterUsers = genderfilterUsers.filter((user) => {
            return availableFilter.includes(user.available.toString());
          });
  
        console.log(availablefilterUsers);
        dispatch(filterData(availablefilterUsers));
        genderFilter = [];
        domainFilter = [];
        availableFilter = [];
      }
       else {
      const availablefilterUsers = allUsers.filter((user) => {
        return availableFilter.includes(user.available.toString());
      });

      console.log(availablefilterUsers);
      dispatch(filterData(availablefilterUsers));
      genderFilter = [];
      domainFilter = [];
      availableFilter = [];
    }
  };

  return (
    <div className="left">
      <div className="left_fixed">
        <h4>Gender :</h4>
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
        <h4>Domain : </h4>
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
        <h3>Availaible :</h3>
        <br />
        {
            available.map((avl) => {
                return <div key={Math.random()}>
                    <input type="checkbox" name={avl} id={avl} value={avl}
                     onChange={(e) => {
                        console.log(availableFilter);
                        if (!availableFilter.includes(e.target.value)) {
                          availableFilter.push(e.target.value);
                        } else {
                          const index = availableFilter.indexOf(e.target.value);
                          availableFilter.splice(index, 1);
                          //   console.log(availableFilter);
                        }
                        
                        // dispatch(filterData(filterusers))
                        // console.log(filterusers)
                      }}
                    />
                    <label htmlFor={avl}>{avl}</label>
                </div>
            })
        }

        <br />
        <Button variant="contained" onClick={submitFilterHandler}>
          Apply Filters
        </Button>
      </div>
    </div>
  );
};

export default Filter;
