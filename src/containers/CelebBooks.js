import React, { Component } from "react";
import Aux from "../hoc/Aux";
import Modal from "../components/UI/Modal/Modal";
import PeopleCards from "../components/PeopleCards/PeopleCards";
import data from "../data/people.json";
import BookList from "../components/BookList/BookList";
import Navigation from "../components/Navigation/Navigation";

class CelebBooks extends Component {
  state = {
    searchText: "",
    showBook: false,
    selectedPerson: 0,
    people: data.people,
    filteredPeople: data.people
  };

  searchTextChangedHandler = e => {
    const input = e.target.value.toLowerCase().trim();
    const people = this.state.people;

    let filtered = people.filter(person =>
      person.name.toLowerCase().includes(input)
    );

    this.setState({ filteredPeople: filtered });
  };

  closeBooksModalHandler = () => {
    this.setState({ showBook: false, selectedPerson: 0 });
  };

  selectPersonHandler = key => {
    this.setState({
      showBook: true,
      selectedPerson: key
    });
  };

  render() {
    return (
      <Aux>
        <Modal
          show={this.state.showBook}
          modalClosed={this.closeBooksModalHandler}
        >
          <BookList
            person={this.state.people[this.state.selectedPerson]}
          ></BookList>
        </Modal>
        <Navigation changed={this.searchTextChangedHandler}></Navigation>
        <PeopleCards
          people={this.state.filteredPeople}
          click={this.selectPersonHandler}
        ></PeopleCards>
      </Aux>
    );
  }
}

export default CelebBooks;
