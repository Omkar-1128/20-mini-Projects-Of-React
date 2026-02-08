import React from "react";
import Model from "./Model";

function ModelTest() {
  const HeaderContent = "User Registration Details";
  const BodyContent = `
Please review your details before submitting the form.
Make sure all required fields such as Name, Email, and Phone Number
are correctly filled. Incorrect information may lead to rejection
of your application.
`;
  const FooterContent = "Click 'Confirm' to proceed or 'Cancel' to go back.";

  return (
    <Model header={HeaderContent} body={BodyContent} footer={FooterContent} />
  );
}

export default ModelTest;
