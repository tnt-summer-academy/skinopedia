import React from "react";
import Header from "../components/header";
import Logo from "../components/logo";
import Footer from "../components/footer";

export class Flashcards extends React.Component {
  render() {
    return (
      <>
        <Logo />
        <Header page="1" />
        <Footer />
      </>
    );
  }
}