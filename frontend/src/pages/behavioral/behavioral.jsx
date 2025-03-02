import "./behavioral.css";
// import Chatbot from "../../components/behavioral/chatbot.jsx";
import Header from "../../components/header/header.jsx";
import CTest from "../../components/behavioral/chatbot-test.jsx";

function Behavioral() {
  return (
    <div>
      <Header subtitle="Daily Behavioral Challenge" />
      <div className="body-container">
        <CTest />
      </div>
    </div>
  );
}

export default Behavioral;
