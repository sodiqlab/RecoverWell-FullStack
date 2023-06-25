export default function DiscussionCard({
  topic,
  description,
  onClick,
  discussionId,
}) {
  return (
    <div className="flex items-center justify-center m-2 ">
      <div
        onClick={onClick}
        id={discussionId}
        className="card w-96 bg-base-100 shadow-xl mt-5 cursor-pointer hover:bg-gray-100"
      >
        <div className="card-body">
          <h2 className="card-title">{topic}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
