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

  fn shuffle(&mut self) {
    let mut rng = thread_rng();
    self.cards.shuffle(&mut rng);
  }

  fn deal(&mut self, mut count: usize) -> Vec<String> {
    if count > self.cards.len() {
      count = 5;
    }
    self.cards.split_off(self.cards.len() - count)
  }
}

fn main() {
  let mut deck = Deck::new();
  deck.shuffle();
  println!("Deck: {:#?}", deck);

  let hand = deck.deal(2);
  println!("Had: {:#?}", hand);
}
