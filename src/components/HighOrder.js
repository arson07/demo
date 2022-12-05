import React from "react";

export const UpdatedComp = (OriginalComp) => {
  class NewComp extends React.Component {
    render() {
      return <OriginalComp name="The user" />;
    }
  }

  return NewComp;
};
