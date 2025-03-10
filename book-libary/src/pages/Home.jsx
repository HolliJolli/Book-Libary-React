import { useState } from "react";
import BookCard from "../components/BookCard";
import "../css/Home.css";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const books = [
    {
      title: "Horimiya",
      release_date: "2007-10-18",
      url: "https://i.redd.it/ua32zqvfh2b61.jpg",
    },
    {
      title: "Wotaku ni Koi wa Muzukashii",
      release_date: "2014-04-17",
      url: "https://preview.redd.it/bsph6fx2ipd41.jpg?width=1080&crop=smart&auto=webp&s=51c515248165084f49e31d460ef4123f60c43d43",
    },
    {
      title: "Kamibukuro-kun wa Koishiteru",
      release_date: "Unknown",
      url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1617651571i/55844363.jpg",
    },
    {
      title: "A Business Proposal",
      release_date: "2018-07-31",
      url: "https://us-a.tapas.io/sa/63/5c482d20-3382-425d-bce7-7221e31e9fc4_z.jpg",
    },

    {
      title: "An Hour of Romance",
      release_date: "Unknown",
      url: "https://static.fnac-static.com/multimedia/PE/Images/FR/NR/1b/61/1c/18637083/1540-1/tsp20250219083338/An-hour-of-romance-T05.jpg",
    },

    {
      title: "A Sign of Affection",
      release_date: "2019-06-13",
      url: "https://m.media-amazon.com/images/I/91YMCLgbNLL._AC_UF894,1000_QL80_.jpg",
    },
    {
      title: "Kimi ni Todoke",
      release_date: "2005-09-13",
      url: "https://upload.wikimedia.org/wikipedia/en/5/53/KimitodoDVD1.jpg",
    },
    {
      title: "See You in My 19th Life",
      release_date: "2020",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2r5rUVU2c6kiJ1BVDwZfPBbOTe-_8yVVYjg&s",
    },

    {
      title: "My Love Story with Yamada-kun at Lv999",
      release_date: "2022",
      url: "https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Loving_Yamada_at_Lv999%21_volume_1_cover.jpg/220px-Loving_Yamada_at_Lv999%21_volume_1_cover.jpg",
    },
    {
      title: "Toradora!",
      release_date: "2006-03-10",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjcTP8hRTEYuV9DN1CvzVWZv4nJQeqOMIO4w&s",
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("");
  };

  return (
    <div className="home">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for Books"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="books-grid">
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
}
