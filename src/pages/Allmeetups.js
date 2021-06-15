import React from 'react'
import MeetupItem from '../Components/meetups/MeetupItem';
import MeetupList from '../Components/meetups/MeetupList';
const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'This is a first meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
      id: 'm2',
      title: 'This is a second meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
  ];

function AllmeetupsPages() {
    return (
        <section>
          <h1>Meetups</h1>
            <ul>
                {/* {DUMMY_DATA.map((meetup)=> {
                    return<li key={meetup.id}>{meetup.title}</li>
                })} */}
                <MeetupList item = {DUMMY_DATA}/>

            </ul>
        </section>
    )
}

export default AllmeetupsPages
