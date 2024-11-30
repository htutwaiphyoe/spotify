struct Deck {
  cards: Vec<String>,
}

fn main() {
  let deck = Deck { cards: Vec::new() };
  println!("Deck: {:?}", deck);
}
