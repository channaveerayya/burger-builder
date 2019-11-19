import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import styles from "./ContactData.module.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      zipCode: ""
    },
    loading: false
  };
  orderHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "channu",
        address: {
          street: "BTM 1 layout",
          zipCode: "9980",
          country: "India"
        },
        email: "channucs0009@gmail.com"
      },
      deliveryMethod: "fastest"
    };
    axios
      .post("/orders.json", order)
      .then(res => {
        console.log(res);
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(error => {
        console.log(error);
        this.setState({ loading: false });
      });
  };
  render() {
    let form = (
      <form>
        <input type="text" name="name" placeholder="Your Name" />
        <input type="email" name="email" placeholder="Your Email Address" />
        <input type="text" name="street" placeholder="street" />
        <input type="text" name="zipCode" placeholder="zipCode" />
        <Button btnType="Success" clicked={this.orderHandler}>
          Order
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={styles.ContactData}>
        <h4>Enter your contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;