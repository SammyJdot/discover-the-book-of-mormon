"use strict";

const sources = [
  {
    title: "Seer Stone",
    link: "https://www.josephsmithpapers.org/topic/seer-stone",
    author: "The Joseph Smith Papers",
    year: 2021
  },
  {
    title: "Saints: The Standard of Truth (Vol. 1)",
    link: "https://www.churchofjesuschrist.org/study/history/saints-v1",
    author: "The Church of Jesus Christ of Latter-day Saints",
    year: 2018,
  },
  {
    title: "Joseph Smith—History",
    link: "https://www.churchofjesuschrist.org/study/scriptures/pgp/js-h/1",
    author: "Joseph Smith (Pearl of Great Price)",
    year: "1838-1842",
  },
  {
    title: "How Long Did It Take Joseph Smith to Translate the Book of Mormon?",
    link: "https://scholarsarchive.byu.edu/cgi/viewcontent.cgi?article=2214&context=insights",
    author: "Insights: The Newsletter of the Neal A. Maxwell Institute for Religious Scholarship: Vol. 6: No. 1, Article 1",
    year: 1986,
  },
  {
    title: "Memorandum",
    link: "https://catalog.churchofjesuschrist.org/assets/162efea4-cb3f-459f-937f-949b3995e572/0/0#churchofjesuschrist",
    author: "E.B. Grandin",
    year: 1892,
  },
  {
    title: "The Most Desired Book",
    link: "https://www.deseret.com/faith/2024/09/21/book-of-mormon-rare-books-first-edition/",
    author: "Mariya Manzhos",
    year: 2024,
  },
  {
    title: "Recollections of the Prophet Joseph Smith",
    link: "https://history.churchofjesuschrist.org/faq/joseph-smith/quote-index?lang=eng",
    author: "David Osbourne",
    year: 1892,
  },
  {
    title: "Book of Mormon: Title Page",
    link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/bofm-title?lang=eng",
    author: "Moroni",
    year: "AD 421",
  },
  {
    title: "History, volume A-1",
    link: "https://catalog.churchofjesuschrist.org/",
    author: "Joseph Smith, transcribed by James Mulholland",
    year: 1829,
  },
  {
    title: "The Eleven Witnesses",
    link: "https://rsc.byu.edu/coming-forth-book-mormon/eleven-witnesses",
    author: "Steven C. Harper",
    year: 2015,
  },
  {
    title: "The Murder of Joe Smith, the Mormon Prophet",
    link: "https://chroniclingamerica.loc.gov/lccn/sn83030313/1844-07-08/ed-1/seq-2/",
    author: "New York Herald",
    year: 1844,
  },
  {
    title: "Worldwide Statistics",
    link: "https://newsroom.churchofjesuschrist.org/facts-and-statistics",
    author: "The Church of Jesus Christ of Latter-day Saints",
    year: 2025,
  },
];

const Bibliography = () => {
  return (
    <div
      style={{
        padding: "50px 20px",
        backgroundColor: "#f5f5f5",
        borderTop: "4px solid #046307",
        marginTop: "60px",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "2rem",
          marginBottom: "30px",
          color: "#046307",
        }}
      >
        📖 Bibliography & Sources
      </h2>

      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {sources.map((source, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              padding: "15px 20px",
              borderRadius: "10px",
              boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <p style={{ margin: 0, fontSize: "1rem", color: "#333" }}>
              <strong>{source.author}</strong> ({source.year}).{" "}
              <a
                href={source.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#046307", textDecoration: "underline" }}
              >
                {source.title}
              </a>
              .
            </p>
          </div>
        ))}
      </div>

      <p
        style={{
          textAlign: "center",
          marginTop: "40px",
          fontSize: "0.9rem",
          color: "#777",
        }}
      >
        Compiled with faith, caffeine, and divine assistance
      </p>
    </div>
  );
}

const domContainer = document.querySelector("#bibliography");
ReactDOM.render(<Bibliography />, domContainer);