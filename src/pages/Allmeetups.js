import React from 'react'
import {useState, useEffect} from 'react'
import MeetupList from '../Components/meetups/MeetupList';

// *******************This is the dummy data which was printed before: Now we will get the data from server **********************

// const DUMMY_DATA = [
//     {
//       id: 'm1',
//       title: 'This is a first meetup',
//       image:
//         'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//       address: 'Meetupstreet 5, 12345 Meetup City',
//       description:
//         'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     },
//     {
//       id: 'm2',
//       title: 'This is a second meetup',
//       image:
//         'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//       address: 'Meetupstreet 5, 12345 Meetup City',
//       description:
//         'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     },
//   ];

// *******************This is the dummy data which was printed before: Now we will get the data from server **********************

function AllmeetupsPages() {
    const [isLoading, setisLoading] = useState(true);
    const [Loadmeetups, setLoadmeetups] = useState([])

    useEffect(()=>{
        setisLoading(true)
        fetch( 
            "https://react-meetups-80ed7-default-rtdb.firebaseio.com/newmeetup.json",
        ).then(response => {
            return response.json();

        }).then((data)=>{
            const meetups =[];

            for(const key in data ){
                const single_meetup={
                    id: key,
                    ...data[key]
                };
                meetups.push(single_meetup);
            }
            setisLoading(false)
            setLoadmeetups(meetups)
        })
    },[])
        
    if(isLoading){
        return(
            <section>
                <p>Loading.....</p>
            </section>
        )
    }
    

    return (
        <section>
          <h1>Meetups</h1>
            <ul>
                {/* {DUMMY_DATA.map((meetup)=> {
                    return<li key={meetup.id}>{meetup.title}</li>
                })} */}
{/* ***********************************Accsess Dumy data and print on Screen *************************************  */}
                {/* <MeetupList item = {DUMMY_DATA}/> */}
{/* ***********************************Accsess Dumy data and print on Screen *************************************  */}

                <MeetupList item = {Loadmeetups}/>

            </ul>
        </section>
    )
}

export default AllmeetupsPages
