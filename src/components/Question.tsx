import "../styles/question.scss";
import cx from "classnames";

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children: React.ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
};
const Question = ({
  content,
  author,
  children,
  isHighlighted = false,
  isAnswered = false,
}: QuestionProps) => {
  return (
    <div>
      <div
        className={cx([
          "question",
          {
            answered: isAnswered,
          },
          { highlighted: isHighlighted && !isAnswered },
        ])}
      >
        <p>{content}</p>
        <footer>
          <div className="user-info">
            <img src={author.avatar} alt={author.name} />
            <span>{author.name}</span>
          </div>
          <div>{children}</div>
        </footer>
      </div>
    </div>
  );
};

export default Question;
