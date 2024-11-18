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
        <img src={avatar_url} className="avatar" alt="profile avatar" />
      </div>

      <div>
        <a href={`https://github.com/${login}`}>{login || name}</a>
        <p>
          User joined on{" "}
          {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
            month: "short",
          })} ${createdDate.getFullYear()}`}
        </p>
      </div>

      <div>
         <div>
            <p>Public Repos</p>
            <p>{public_repos}</p>
         </div>
         <div>
            <p>Followers</p>
            <p>{followers}</p>
         </div>
         <div>
            <p></p>
         </div>
      </div>
    </div>
  );
}
