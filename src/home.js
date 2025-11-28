import { Link, useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();

  const students = ["Alexa", "John", "Meera", "Rohan", "Riya"];

  return (
    <div style={{ padding: 20 }}>
      <h1>Student List</h1>
      <ul>
        {students.map((student) => (
          <li key={student}>
            <Link to={`/student/${student}`}>{student}</Link>
          </li>
        ))}
      </ul>

      <button
        onClick={() => navigate("/student/Riya")}
        style={{ marginTop: 20, padding: "10px 20px" }}
      >
        Go to Default Student (Riya)
      </button>
    </div>
  );
}

export default Home;
