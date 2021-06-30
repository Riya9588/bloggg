import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg"
          alt=""
        />
        <p>
        Writing anything is to communicate with others, to stimulate interest or action from the reader. You may also use writing to help you to reflect on your experiences and learn from them. While at University a key way of assessing the progress and learning of students is via the written work you produce.When we write, therefore, we are either writing for ourselves or we are writing for others.When we write for ourselves it helps us to think, learn and understand. Writing for ourselves is a private affair though it may be shared with others.
        When we write for ourselves it helps us to think, learn and understand. Writing for ourselves is a private affair though it may be shared with others.When we write for others it is usually for assessment or publication for a wider readership.
Writing isnt a talent, its a way of life.Writing needs courage to face those days again, to suffer those lonely nights,to shed those tears again.
Amazing stories of a troubled teenager panicked between numerous emotions and finding her ways out!!
        </p>
      </div>
      <div className="sidebarItem">
      
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      
    </div>
  );
}
