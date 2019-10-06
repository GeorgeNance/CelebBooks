import React, { Component } from "react";
import Aux from "../hoc/Aux";
import Modal from "../components/UI/Modal/Modal";
import PeopleCards from "../components/PeopleCards/PeopleCards";
import data from "../data/people.json";
import BookList from "../components/BookList/BookList";

class CelebBooks extends Component {
  state = {
    searchText: "",
    showBook: false,
    selectedPerson: 0,
    people: data.people
  };

  closeBooksModalHandler = () => {
    this.setState({ showBook: false, selectedPerson: 0 });
  };

  selectPersonHandler = key => {
    const updatedPeople = [...this.state.people];

    if (!updatedPeople[key].loaded) {
      updatedPeople[key].books = updatedPeople[key].books.map((book, index) => {
        let url =
          "https://www.googleapis.com/books/v1/volumes?q=isbn:" +
          book.isbn +
          "&key=AIzaSyC3BNy44JJUB5oTyC7aG6XtsGp_u9Q9-E0";
        fetch(url)
          .then(res => res.json())
          .then(res => {
            let item = res.items[0].volumeInfo;
            if (item.imageLinks) {
              book.image = item.imageLinks.thumbnail;
            }
          })
          .catch(error => console.log(error));
        return book;
      });
      updatedPeople[key].loaded = true;
    }

    this.setState({
      showBook: true,
      selectedPerson: key,
      people: updatedPeople
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
            books={this.state.people[this.state.selectedPerson].books}
          ></BookList>
        </Modal>
        <PeopleCards
          people={this.state.people}
          click={this.selectPersonHandler}
        ></PeopleCards>
      </Aux>
    );
  }
}

export default CelebBooks;
