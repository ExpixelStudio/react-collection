export default function UserCard({ user }) {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,
  } = user;

  const createdDate = new Date(created_at);

  return (
    <div className="user">
      <div>
         <a href={`https://github.com/${login}`}><img src={avatar_url} className="avatar" alt="profile avatar" /></a>
      </div>

      <div className="name-container">
        <a href={`https://github.com/${login}`}>{login || name}</a>
        <p>
          User joined on{" "}
          {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
            month: "short",
          })} ${createdDate.getFullYear()}`}
        </p>
      </div>

      <div className="profile-info">
         <div>
            <h4>Public Repos</h4>
            <p>{public_repos}</p>
         </div>
         <div>
            <h4>Followers</h4>
            <p>{followers}</p>
         </div>
         <div>
            <h4>Following</h4>
            <p>{following}</p>
         </div>
      </div>
    </div>
  );
}
