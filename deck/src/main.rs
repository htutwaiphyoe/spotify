#[derive(Debug)]
struct Deck {
  cards: Vec<String>,
}

fn main() {
  let mut cards = vec![];
  let suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
  let values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];

  for suit in suits {
    for value in values {
      cards.push(format!("{} of {}", value, suit));
    }
  }

  let deck = Deck { cards };
  println!("Deck: {:?}", deck);
}
