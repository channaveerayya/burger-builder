import React, { Component } from 'react'
import Button from "../../../components/UI/Button/Button";
import styles from "./ContactData.module.css";
class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            zipCode: ''
        }
    };
    render() {
        return (
          <div className={styles.ContactData}>
            <h4>Enter your contact Data</h4>
            <form>
              <input type="text" name="name" placeholder="Your Name" />
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
              />
              <input type="text" name="street" placeholder="street" />
               <input type="text" name="zipCode" placeholder="zipCode" />
                <Button btnType="Success">Order</Button>
            </form>
          </div>
        );
    }
}

export default ContactData;