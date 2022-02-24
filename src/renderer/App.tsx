import './styles/App.css';
import './styles/bootstrap.min.css';
import './styles/fontawesome/css/all.min.css';
import { Router, Routes, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import SidePanel from './components/SidePanel';
import MainPage from './components/MainPage';

// const Hello = () => {
//   return (
//     <div>
//       <div className="Hello">
//         <img width="200px" alt="icon" src={icon} />
//       </div>
//       <h1>electron-react-boilerplate</h1>
//       <div className="Hello">
//         <a
//           href="https://electron-react-boilerplate.js.org/"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <button type="button">
//             <span role="img" aria-label="books">
//               📚
//             </span>
//             Read our docs
//           </button>
//         </a>
//         <a
//           href="https://github.com/sponsors/electron-react-boilerplate"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <button type="button">
//             <span role="img" aria-label="books">
//               🙏
//             </span>
//             Donate
//           </button>
//         </a>
//       </div>
//     </div>
//   );
// };

export default function App() {
  return (
    <Router location={''}>
      <Container fluid className="mainContainer">
        <Row>
          <Col xs={3} style={{"padding": "0"}}>
            <SidePanel />
          </Col>
          <Col xs={9}>
            <Routes>
              <Route path="/" element={<MainPage />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}
