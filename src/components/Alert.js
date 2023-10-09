import React from "react";

import AlertError from "./AlertError";
import AlertSuccess from "./AlertSuccess";

export default function Alert(props) {
  
  if(props.status) {
    return (      
      <AlertError text={props.text} />
    );
  } else {
    return (
      <AlertSuccess text={props.text} />
    );
  }
}
                                                                                             