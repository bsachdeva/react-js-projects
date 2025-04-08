import { UserProfile } from "./components/UserProfile";

function App() {
  const callMe = () => console.log("hello");

  return (
    <div>
      <h1>Root Component</h1>
      <UserProfile
        age={20}
        isLoggedIn={true}
        favoriteFoods={[{ name: "sushi" }]}
        callMe={callMe}
      />
    </div>
  );
}

export default App;
