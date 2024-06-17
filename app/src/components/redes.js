export default function Redes({ user }) {
  return (
    <div className="contact-social clearfix">
      {" "}
      {/* Redes Sociales */}
      <ul className="list-titles">
        <li>LinkedIn</li>
        <li>Github</li>
      </ul>
      <ul className="list-content">
        {" "}
        {/* REMEMBER TO PUT THE URL ON THE HREF TAG  */}
        <li>
          <a href={user.linkedinUrl}>{user.linkedinUser}</a>
        </li>{" "}
        {/* YOUR TWITTER USER  */}
        <li>
          <a href={user.githubUrl}>{user.githubUser}</a>
        </li>{" "}
        {/* YOUR GITHUB USER  */}
      </ul>
    </div>
  );
}
