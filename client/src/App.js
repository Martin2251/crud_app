import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Crud Application</h1>
      <div className="form">
        <label>Book Name</label>
        <input type="text" name="bookName" />
        <label>Book Review</label>
        <input type="text" name="review" />
        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
