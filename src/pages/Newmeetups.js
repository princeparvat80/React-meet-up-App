import React from "react";
import {useHistory} from 'react-router-dom'
import NewMeetupForm from "../Components/meetups/NewMeetupForm";

function NewmeetupsPage() {
    const history = useHistory();
  // ***********************Dooing API initgration*****************************************************
  function getuserdataHandeler(MeetupData) {
    fetch(
      "https://react-meetups-80ed7-default-rtdb.firebaseio.com/newmeetup.json",
      {
        method: "POST",
        body: JSON.stringify(MeetupData),
        headers: {
          "Content-type": "application/json",
        },
      }
    ).then(()=>{
        history.replace('/');
    });
  }
  //********** */ The above function will store the data in firebase, which is filled by user in new meetups form******************

  return (
    <div>
      <NewMeetupForm getuserdata={getuserdataHandeler} />
    </div>
  );
}

export default NewmeetupsPage;
