import Card from "./components/Card";
import './App.css';

function App() {

  const firstCard = {
    title: "Title 1",
    text: "Text for the first card. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    src: "https://images.pexels.com/photos/2097628/pexels-photo-2097628.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
  }

  const secondCard = {
    title: "Title 2",
    text: "Text for the second card.  Proin id faucibus tellus. Suspendisse id libero faucibus, blandit lacus vel, tempor diam."
  }

  return (
    <div className={"container"}>
      <Card {...firstCard}>
        {
          <div className={"img-container"}>
            <img className="img-size d-block" src={firstCard.src} alt="изображение"/>
          </div>
        }
      </Card>

      <Card {...secondCard}/>
    </div>
  )
}

export default App;
