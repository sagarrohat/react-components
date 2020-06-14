import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui comments">
      <ApprovalCard>
        <div>
          <h4>Warning</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName() + " " + faker.name.lastName()}
          content={faker.lorem.sentence()}
          postedAt="Today at 4:30PM"
          imageSrc={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName() + " " + faker.name.lastName()}
          content={faker.lorem.sentence()}
          postedAt="Today at 4:33PM"
          imageSrc={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName() + " " + faker.name.lastName()}
          content={faker.lorem.sentence()}
          postedAt="Today at 4:36PM"
          imageSrc={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
