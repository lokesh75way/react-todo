declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

interface User {
  _id: string;
  [key: string]: string;
}

interface Task {
  id: number;
  name: string;
  description: string;
  date: string;
  status: string;
  list: number;
}

interface ListItem {
  id: number;
  label: string;
}
