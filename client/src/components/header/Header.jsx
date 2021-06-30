import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <h1 style={{color: "babypink" , fontSize: "50px"}}>BloGGer ADDA</h1>
        {/* <span className="headerTitleLg">Blog</span> */}
      </div>
      <img
        className="headerImg"
        src="https://img.freepik.com/free-photo/toy-bricks-table_144627-48267.jpg?size=626&ext=jpg"
        alt=""
      />
    </div>
  );
}
