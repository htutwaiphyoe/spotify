# Mastering Rust

Installation

[installation](https://www.rust-lang.org/tools/install)

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

```bash
cargo new <projectName>

cargo run

cargo run -q
```

```rust
struct Deck {
  cards: Vec<String>,
}

#[derive(Debug)]

{:?}

{:#?}

array => []
vector => vec![]

mutable vs immutable => mut

associated functions vs methods => &self

implicit return => no return and semicolon in last executed expression
```

crate means package or library

standard library => doc.rust-lang.org/std

external library => crates.io

```bash
cargo add rand
```
