use rand::{ thread_rng, seq::SliceRandom };

#[derive(Debug)]
struct Deck {
  cards: Vec<String>,
}

impl Deck {
  fn new() -> Self {
    let mut cards = vec![];
    let suits = ["Spades", "Diamonds", "Hearts", "Clubs"];
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

    Deck { cards }
  }
}

fn main() {
  let deck = Deck::new();

  println!("Deck: {:#?}", deck);
}
