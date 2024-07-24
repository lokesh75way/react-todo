import { createSlice } from "@reduxjs/toolkit";

const items: ListItem[] = [
  { id: 1, label: "List 1" },
  { id: 2, label: "List 2" },
  { id: 3, label: "List 3" },
  { id: 4, label: "List 4" },
];

interface ListState {
  items: ListItem[];
}

const initialState: ListState = {
  items: items,
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addList: () => {},
  },
});

export default listSlice.reducer;
