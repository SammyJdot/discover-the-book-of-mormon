"use strict";

const App = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const styles = {
    container: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: "#f3f7f2",
      padding: "0",
      margin: "0",
    },
    header: {
      background: "linear-gradient(135deg, #046307, #0b9b15)",
      color: "#fbeec1",
      padding: "2.5rem",
      textAlign: "center",
      borderBottomLeftRadius: "30px",
      borderBottomRightRadius: "30px",
      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
    },
    title: {
      fontFamily: "'Great Vibes', cursive",
      fontSize: "3.5rem",
      margin: "0 0 0.5rem",
    },
    subtitle: {
      fontSize: "1.2rem",
      fontStyle: "italic",
    },
    nav: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "1rem",
      marginTop: "1rem",
      // position: "sticky",
    },
    navButton: {
      backgroundColor: "#c2a83e",
      color: "#ffffff",
      border: "none",
      padding: "0.75rem 1.5rem",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "1rem",
      fontWeight: "bold",
      transition: "background-color 0.3s ease",
      boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
      // position: "sticky",
    },
    section: {
      backgroundColor: "#ffffff",
      margin: "2rem auto",
      padding: "2rem",
      width: "90%",
      maxWidth: "800px",
      borderRadius: "20px",
      boxShadow: "0 6px 20px rgba(0, 100, 0, 0.1)",
      borderLeft: "8px solid #046307",
    },
    sectionTitle: {
      color: "#046307",
      fontSize: "2rem",
      marginBottom: "1rem",
      borderBottom: "2px solid #c2a83e",
      paddingBottom: "0.5rem",
    },
    paragraph: {
      fontSize: "1.1rem",
      lineHeight: "1.7",
      color: "#333",
    },
    h3: {
      color: "#c2a82e",
      fontFamily: "'Great Vibes', cursive",
      fontSize: "1.7rem",
      fontWeight: "bold",
    },
    imageLeft: {
      width: "500px",
      height: "auto",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      marginLeft: "150px",
    },
    imageRight: {
      width: "500px",
      height: "auto",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      marginRight: "150px",
    },
    
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Discover the Book of Mormon</h1>
        <p style={styles.subtitle}>A journey through history, doctrine, and impact</p>
      </header>

      <nav style={styles.nav}>
        {["history", "doctrine", "impact"].map((id) => (
          <button
            key={id}
            style={styles.navButton}
            onClick={() => scrollTo(id)}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#a58c2d")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#c2a83e")}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </button>
        ))}
      </nav>

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      <img src="history.jpg" alt="Translation" style={styles.imageLeft} />
      <section id="history" style={styles.section}>
      
      
        <div>
          <h2 style={styles.sectionTitle}>History of the Book of Mormon</h2>
          <p style={styles.paragraph}>
            The Book of Mormon holds a central place in the theology and history of The Church of Jesus Christ of Latter-day Saints, and as such has been described as the "keystone of our religion". 
            Its origin story is strongly connected with the religious revivalism of early nineteenth-century America, 
            especially in what came to be known as the “Burned-over District” of upstate New York. 
            In 1823, a young Joseph Smith was visited by the angel Moroni, who appeared to him and revealed 
            the existence of an ancient record written on golden plates (JSH 1:27-43). These plates contained 
            the religious history of ancient inhabitants of the American continent. Joseph found the plates buried in a nearby hill,
            known today as the Hill Cumorah. Four years after this initial visitation, Joseph was permitted to take the plates and begin 
            the work of translation, which would eventually result in the publication of the Book of Mormon. (Saints 38)
              <br></br>
              <br></br>
            <h3 style={styles.h3}>Translation</h3>
            The translation process of the Book of Mormon is fascinating, and considered miraculous even to this day.
            Joseph Smith described the method as involving divine instruments referred to as the Urim and Thummim.
            Additionally, "eyewitnesses reported that he also translated using a dark brown seer stone placed in a hat to exclude
            exterior light" (Joseph Smith Papers). He would place the interpreters or 
            the seer stone in a hat and see English words appear that represented the meaning of the ancient 
            text. Several people were instrumental in the translation process, including Joseph's wife, Emma, who helped in the translation process as a scribe. Other scribes included Oliver
            Cowdery and Martin Harris, who would go on to be two of the official three witnesses who saw the plates and were visited by an angel.
              <br></br>
              <br></br>
            Translation of the plates began in 1829, and was remarkably fast. Historical sources indicate that the majority of 
            the Book of Mormon was translated between 65 and 75 days (Insights)! Given that Joseph Smith had little formal education, the speed and scale of 
            the work have astonished scholars. This is often cited as evidence of divine assitance in the translation process, as the production of such
            a work is nothing short of a miracle.
              <br></br>
              <br></br>
            <h3 style={styles.h3}>Publication</h3>
            After completing the translation, Joseph Smith sought to publish the text. He faced a lot of pushback and resistance but eventually found a 
            willing printer in E. B. Grandin in Palmyra, New York (Grandin). To cover the printing costs, Martin Harris had to mortgage his farm (Saints 78). The first edition of 
            the Book of Mormon was published in March 1830, and over 5,000 copies were printed.
              <br></br>
              <br></br>
            Since those early days, The Book of Mormon has become one of the most widely distributed and translated books of scripture in world history. In fact, it is the most-requested book from the Library of Congress (Manzhos). 
            For Latter-day Saints, it functions as both a spiritual guide and a keystone of their faith. Church leaders have emphasized that the book was not only miraculous 
            in its coming forth but also essential for understanding the role of Jesus Christ in the Americas. Modern scholars continue to investigate the historical context of its translation, 
            the witnesses who affirmed its authenticity, and the revolutionary theology that it restored. It stands as a testament to a living God who continues to speak to His children even today.
              <br></br>
              <br></br>
          </p>
        </div>
        
      </section>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      <section id="doctrine" style={styles.section}>
        
          <div>
            <h2 style={styles.sectionTitle}>Doctrine Taught</h2>
            <p style={styles.paragraph}>
              David Osbourne quoted Joseph Smith as saying "The Book of Mormon is true, just what it purports to be, and for this testimony I expect to give an account in the day of judgment."
              <br></br>
              <br></br>
              <h3 style={styles.h3}>Doctrine of Christ</h3>
              The Book of Mormon is an incredible work of scripture that brings the reader uniquely close to Christ. It teaches simply and powerfully the Doctrine of Christ, in a way that even
              children can understand. From the very title page, The Book of Mormon states its purpose is to "[convince] the Jew and Gentile that Jesus is the Christ, the Eternal God."
              To accomplish its purpose, the book paints an intricate picture of the Plan of Salvation, helping us to better understand why we are here, and what we need to do to return to
              live with God. It describes Christ's infinite and eternal Atonement, expounds doctrine about the spirit world, and testifies of the literal resurrection, affirming Christ's divinity
              as the Son of God.
              <br></br>
              <br></br>
              <h3 style={styles.h3}>Gathering of Israel</h3>
              The Book of Mormon re-emphasizes the importance of the Gathering of Israel and the relationship God has with His covenant people. It teaches us that the promises God made to the descendents of
              Abraham, Isaac, and Jacob are still in effect even today. His hand is stretched out towards people in all nations, inviting them to come unto Christ and be grafted in to His covenant people.
              Central to that doctrine is the role that the Book of Mormon itself will play: a sign that the Lord has begun to fulfill His covenant (3 Nephi 21:7). The book not only preserves the voice of the
              ancient House of Israel but also extends that voice across the whole earth, calling scattered Israel home through the news that the gospel has been restored.
              <br></br>
              <br></br>
              <h3 style={styles.h3}>Restoration of the Priesthood</h3>
              Clearly taught in The Book of Mormon is the need for baptism by authority of God. As Joseph and Hyrum prayed about how to go about performing this sacred ordinance, they were visited by an angel,
              introducing himself as John the Baptist, and conferred upon them the Aaronic Priesthood, commanding them to be baptized (History volume A-1). Later, the Melchizedek Priesthood was also restored by Peter, James, and John.
              The restoration of the Priesthood enabled the Lord to administer saving ordinances once again upon the people of the world, and was a necessary part of the Restoration of the Gospel of Jesus Christ.
            </p>
          </div>
          
        
      </section>
      <img src="doctrine.jpg" alt="Doctrine" style={styles.imageRight} />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      <img src="impact.jpg" alt="Pioneers" style={styles.imageLeft} />
      <section id="impact" style={styles.section}>
      
        <div>
          <h2 style={styles.sectionTitle}>Impact on Lives</h2>
          <p style={styles.paragraph}>
            The most powerful aspect of the Book of Mormon is its ability to convert people to Christ and give them a powerful witness of the reality of His existence. From the very beginning, thousands of
            people recognized the power of God in the book, and were inspired to change their lives because of it. From the pioneers who risked their lives to cross the plains, to converts in recent days who
            are ostracized by friends and family for being baptized, the sacrifices and testimony of millions of people cry out in defense of the Book of Mormon. This book has had a wider impact on the world than
            possibly any other religious text since the Bible itself.
            <br></br>
            <br></br>
            <h3 style={styles.h3}>Witnesses</h3>
            Three witnesses (Oliver Cowdery, Martin Harris, and David Whitmer) saw an angel who showed them the golden plates and testified of their divinity. Eight more physically held the plates with no angel present.
            Any one of these witnesses could have gained a lot of money and fame for denying their testimony and proving the book to be a hoax. However, none did: every single one remained adament that the Book of Mormon
            was inspired of God throughout their lives. In fact, scholar Steven C. Harper notes that "the testimonies of the Three and Eight Witnesses printed in each copy of the Book of Mormon are some of the most compelling 
            evidence in favor of its miraculous revelation and translation." Harper notes that the written statements of the witnesses, official and unofficial, are remarkably consistent throughout their lives. This level of consistency
            and reliability across dozens of documents from all of these people is a significant historical evidence in favor of the divinity of The Book of Mormon.
            <br></br>
            <br></br>
            <h3 style={styles.h3}>Contemporary Times</h3>
            Critics of the Church often believed that "Mormonism" was just a passing fad. Shortly after the murder of Joseph Smith, the New York Herald printed "The death of [the prophet] will seal the fate of Mormonism. They cannot get
            another Joe Smith." The folly that these critics made was assuming that the faith of the Saints was tied to the life of Joseph Smith. In reality, while the Saints shared a deep reverance for the Prophet, their faith was placed
            in Jesus Christ, the Savior of the world, and it was strengthened by the Book of Mormon. Today it is easy to see just how wrong those critics were. Church membership is at an all-time high of 17.5 million members worldwide (Worldwide Statistics)
            and only continues to grow. Millions of people have read the Book of Mormon and gained a testimony of its truth. None of the modern growth would be possible without that book. And as the Church grows, people continue to come and see what The
            Book of Mormon can teach them about Jesus Christ.
            <br></br>
            <br></br>
            The Lord has established His Church in these last days. The Book of Mormon is central to His plan for this last dispensation, and He brought it forth at the perfect time to inspire and bless the lives of millions. Because of The Book of Mormon,
            the Restoration is ongoing even to this day, and will continue until that time comes when the Lord shall return again to reign upon the Earth.
          </p>
        </div>
        
      </section>
      </div>
      
        <nav style={styles.nav}>
          <button
            style={styles.navButton}
            onClick={() => scrollTo("app")}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#a58c2d")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#c2a83e")}
          >
            Back To Top
          </button>
        </nav>
    

      
    </div>
  );
}

const domContainer = document.querySelector("#app");
ReactDOM.render(<App />, domContainer);
