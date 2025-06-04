"use strict";

const people = [
  { id: 1, name: "Joseph Smith", img: "joseph-smith.jpg" },
  { id: 2, name: "Oliver Cowdery", img: "oliver-cowdery.jpg" },
  { id: 3, name: "Martin Harris", img: "martin-harris.jpg" },
  { id: 4, name: "David Whitmer", img: "david-whitmer.jpg" },
  { id: 5, name: "Emma Smith", img: "emma-smith.jpg" },
  { id: 6, name: "Moroni", img: "moroni.jpg" },
  { id: 7, name: "John the Baptist", img: "john-the-baptist.jpg" },
  { id: 8, name: "Hyrum Smith", img: "hyrum-smith.jpg" },
];

const bios = {
  1: "Joseph Smith was the first prophet of the Restoration and founder of The Church of Jesus Christ of Latter-day Saints.",
  2: "Oliver Cowdery was one of the Three Witnesses and a key scribe during the translation of the Book of Mormon.",
  3: "Martin Harris helped finance the Book of Mormon and was one of the Three Witnesses.",
  4: "David Whitmer was one of the Three Witnesses and hosted Joseph during the Book of Mormon translation.",
  5: "Emma Smith, wife of Joseph Smith, was the first president of the Relief Society and helped with the translation.",
  6: "Moroni was the last Nephite prophet who appeared to Joseph Smith and delivered the golden plates.",
  7: "John the Baptist appeared to Joseph and Oliver to restore the Aaronic Priesthood after they prayed to know what the Lord would have them do regarding baptism.",
  8: "Hyrum Smith, Joseph's older brother, was a steadfast supporter and was martyred alongside Joseph in Carthage Jail. He adamently defended The Book of Mormon and sought to help others to come to a knowledge of its truthfulness."
};

// Create card pairs: one for image, one for name
const createCards = () => {
  const cards = [];
  people.forEach(({ id, name, img }) => {
    cards.push(
      { id: `${id}-img`, personId: id, type: "img", content: img },
      { id: `${id}-name`, personId: id, type: "name", content: name }
    );
  });
  // Shuffle cards
  return cards.sort(() => Math.random() - 0.5);
};

const MatchingGame = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [gameCompleted, setGameCompleted] = React.useState(false);
  const [cards, setCards] = React.useState(createCards());
  const [flipped, setFlipped] = React.useState([]);
  const [matched, setMatched] = React.useState([]);
  const [disableAll, setDisableAll] = React.useState(false);

  const handleCardClick = (index) => {
    if (disableAll) return;
    if (flipped.includes(index) || matched.includes(cards[index].personId)) return;

    if (flipped.length === 0) {
      setFlipped([index]);
    } else if (flipped.length === 1) {
      const firstIndex = flipped[0];
      const secondIndex = index;

      setFlipped([firstIndex, secondIndex]);
      setDisableAll(true);

      if (
        cards[firstIndex].personId === cards[secondIndex].personId &&
        cards[firstIndex].type !== cards[secondIndex].type
      ) {
        setTimeout(() => {
          const newMatched = [...matched, cards[firstIndex].personId];
          setMatched(newMatched);
          setFlipped([]);
          setDisableAll(false);
          if (newMatched.length === people.length) {
            setShowModal(true);
            setGameCompleted(true);
          }
        }, 1000);
      } else {
        setTimeout(() => {
          setFlipped([]);
          setDisableAll(false);
        }, 1500);
      }
    }
  };

  const InfoSection = () => (
    <div style={{ marginTop: "40px", textAlign: "center" }}>
      {!gameCompleted ? (
        <p style={{ fontSize: "1.2rem", color: "#555" }}>
          Complete the game to learn more about these early Church figures!
        </p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
            gap: "20px",
            marginTop: "20px",
            padding: "20px",
            backgroundColor: "#f5f5f5",
            borderRadius: "20px",
          }}
        >
          {people.map((person) => (
            <div
              key={person.id}
              style={{
                backgroundColor: "#fff",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                padding: "15px",
                textAlign: "center",
              }}
            >
              <img
                src={person.img}
                alt={person.name}
                style={{
                  width: "100%",
                  maxHeight: "550px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
              <h3 style={{ marginTop: "10px", color: "#004d40" }}>{person.name}</h3>
              <p style={{ fontSize: "0.95rem", color: "#444" }}>{bios[person.id]}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const cardStyle = {
    perspective: "1000px",
    width: "110px",
    height: "150px",
    margin: "10px",
    cursor: "pointer",
  };

  const cardInnerStyle = (isFlipped) => ({
    position: "relative",
    width: "100%",
    height: "100%",
    textAlign: "center",
    transition: "transform 0.6s",
    transformStyle: "preserve-3d",
    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    borderRadius: "12px",
  });

  const cardFaceStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: "12px",
    backfaceVisibility: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Georgia', serif",
    fontWeight: "bold",
    fontSize: "1.1rem",
  };

  const cardFrontStyle = {
    ...cardFaceStyle,
    backgroundColor: "#004d40", // Emerald green dark
    color: "#d4af37", // Golden
  };

  const cardBackStyle = {
    ...cardFaceStyle,
    backgroundColor: "#d4af37", 
    color: "#004d40", 
    transform: "rotateY(180deg)",
    padding: "10px",
    boxSizing: "border-box",
  };

    return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "3.5rem",
          fontWeight: "800",
          paddingTop: "150px",
          margin: "1rem 0",
          color: "#d4af37",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
          letterSpacing: "2px",
          fontFamily: "'Georgia', serif"
        }}
      >
        MATCHING GAME
      </h1>
      <div
        style={{
          maxWidth: "520px",
          margin: "40px auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          justifyItems: "center",
        }}
        aria-label="Matching Game: Match the person with their name"
        role="grid"
      >
        {cards.map((card, index) => {
          const isFlipped =
            flipped.includes(index) || matched.includes(card.personId);
          return (
            <div
              key={card.id}
              style={cardStyle}
              onClick={() => handleCardClick(index)}
              role="gridcell"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleCardClick(index);
                }
              }}
              aria-pressed={isFlipped}
              aria-label={
                isFlipped
                  ? card.type === "img"
                    ? `${people.find((p) => p.id === card.personId).name}'s image`
                    : card.content
                  : "Hidden card"
              }
            >
              <div style={cardInnerStyle(isFlipped)}>
                <div style={cardFrontStyle}></div>
                <div style={cardBackStyle}>
                  {card.type === "img" ? (
                    <img
                      src={card.content}
                      alt={`${people.find((p) => p.id === card.personId).name}`}
                      style={{
                        maxWidth: "90px",
                        maxHeight: "120px",
                        borderRadius: "10px",
                        boxShadow: "0 0 8px #d4af37",
                      }}
                    />
                  ) : (
                    <span>{card.content}</span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Game Over Lightbox */}
      {showModal && (
        <div style={{
          position: "fixed",
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000,
        }}>
          <div style={{
            background: "#fff",
            padding: "2rem",
            borderRadius: "15px",
            textAlign: "center",
            position: "relative",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          }}>
            <button
              onClick={() => setShowModal(false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "15px",
                background: "transparent",
                border: "none",
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
              aria-label="Close modal"
            >
              &times;
            </button>
            <h2 style={{ margin: "0", fontSize: "2rem", color: "#046307" }}>
              🎉 Congratulations! 🎉
            </h2>
            <p>You matched everyone correctly.</p>
          </div>
        </div>
      )}

      <InfoSection />
    </>
  );
}

const domContainer = document.querySelector("#matching-game");
ReactDOM.render(<MatchingGame />, domContainer);