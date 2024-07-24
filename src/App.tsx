import { Route, Routes } from "react-router-dom";
import Basic from "./layouts/Basic";
import Home from "./pages/homepage";
import { ToastContainer, ToastContainerProps } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const toastContainerProps: ToastContainerProps = {
  position: 'top-right',
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  draggable: true,
}

function App() {
  return (
    <>
      <ToastContainer {...toastContainerProps} />
      <Routes>
        <Route element={<Basic />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
