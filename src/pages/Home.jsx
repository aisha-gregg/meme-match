import React from "react";
import { Form } from "../components/Form";

import { Page } from "../components/Page";
import { Board } from "../components/Board";

export function Home() {
  return (
    <>
      <Page></Page>
      <Form></Form>
      <Board></Board>
    </>
  );
}
