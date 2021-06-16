import React from 'react'
import Card from '../Reusable-UI/Card'
import classes from './NewMeetupForm.module.css'
import {useRef} from 'react'

function NewMeetupForm(props) {
  
  //************************* UseRef used to Read the values from the form ************************************
  const TitleuseRefrence = useRef();
  const ImageuseRefrence = useRef();
  const AddressuseRefrence = useRef();
  const DiscriptionuseRefrence = useRef();
  

    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = TitleuseRefrence.current.value;
        const enteredimage = ImageuseRefrence.current.value;
        const enteredaddress = AddressuseRefrence.current.value;
        const enteredDiscription = DiscriptionuseRefrence.current.value;

        const MeetupData ={
          title: enteredTitle,
          image: enteredimage,
          address: enteredaddress,
          discription: enteredDiscription,
        }

        // ****************by the help of this prop we are sending the form data to Newmeetups.js ********************
       props.getuserdata(MeetupData);
        
    }
        
    return (
        <Card>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='title'>Meetup Title</label>
            <input type='text' required id='title' ref={TitleuseRefrence} />
          </div>
          <div className={classes.control}>
            <label htmlFor='image'>Meetup Image</label>
            <input type='url' required id='image' ref={ImageuseRefrence} />
          </div>
          <div className={classes.control}>
            <label htmlFor='address'>Address</label>
            <input type='text' required id='address' ref={AddressuseRefrence}/>
          </div>
          <div className={classes.control}>
            <label htmlFor='description'>Description</label>
            <textarea id='description' required rows='5' ref={DiscriptionuseRefrence}></textarea>
          </div>
          <div className={classes.actions}>
            <button>Add Meetup</button>
          </div>
        </form>
      </Card>
    )
}

export default NewMeetupForm
