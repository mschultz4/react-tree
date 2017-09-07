import React from "react";
import { render } from "react-dom";

import Tree from "../lib/Tree.js";

const data = {
  header: ["the stuff", "below"],
  another: ["I can't", "see through", { ThirdLevel: ["hello", "again"] }],
  again: "here no array"
};

render(
  <div>
  <pre>
{`{
  header: ["the stuff", "below"],
  another: ["I can't", "see through", { ThirdLevel: ["hello", "again"] }],
  again: "here no array"
}`}
  </pre>
    <Tree data={data} />
  </div>,
  document.getElementById("root")
);
