import CheckboxWithLabel from "@/Components/CheckboxWithLabel";
// import Link from "@/Components/Link";
import React from "react";

export default function page() {
  return (
    <div>
      Jest page
      {/* <Link page="" children={"hi"} /> */}
      <CheckboxWithLabel labelOn="label on!!" labelOff="label off!!" />
    </div>
  );
}
