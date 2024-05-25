import React, { PureComponent, useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./DashBoard.scss";
import { getDashBoard } from "../../../services/apiService";

const DashBoard = (props) => {
  const [dataOverView, setDataOverView] = useState([]);
  const [dataChart, setDataChart] = useState([]);

  useEffect(() => {
    fetchDataOverView();
  }, []);
  const fetchDataOverView = async () => {
    const res = await getDashBoard();
    if (res && res.EC === 0) {
      setDataOverView(res.DT);
    }
    // console.log("res>>", res, "dataOverView", dataOverView);
  };
  const data = [
    {
      name: "Quizzes",
      t_quiz: dataOverView?.others?.countQuiz,
    },
    {
      name: "Questions",
      t_question: dataOverView?.others?.countQuestions,
    },
    {
      name: "Answers",
      t_answer: dataOverView?.others?.countAnswers,
    },
  ];
  return (
    <div className="DashBoard-container">
      <div className="title">
        <p>Analytics</p> Dash Board
      </div>
      <div className="content">
        <div className="c-left">
          <div className="left user">
            <span className="text-1">Total users</span>
            <span className="text-2">
              {dataOverView &&
              dataOverView.users &&
              dataOverView.users.total ? (
                <>{dataOverView.users.total}</>
              ) : (
                <>0</>
              )}
            </span>
          </div>
          <div className="left quizzes">
            <span className="text-1">Total quizzes</span>
            <span className="text-2">
              {dataOverView?.others?.countQuiz ? (
                <>{dataOverView.others.countQuiz}</>
              ) : (
                <>0</>
              )}
            </span>
          </div>
          <div className="left question">
            <span className="text-1">Total question</span>
            <span className="text-2">
              {dataOverView?.others?.countQuestions ? (
                <>{dataOverView.others.countQuestions}</>
              ) : (
                <>0</>
              )}
            </span>
          </div>
          <div className="left answer">
            <span className="text-1">Total answer</span>
            <span className="text-2">
              {dataOverView?.others?.countAnswers ? (
                <>{dataOverView.others.countAnswers}</>
              ) : (
                <>0</>
              )}
            </span>
          </div>
        </div>
        <div className="c-right">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              {/* <YAxis /> */}
              <Tooltip />
              <Legend />
              <Bar dataKey="t_quiz" stackId="a" fill="#8884d8" />
              <Bar dataKey="t_question" stackId="a" fill="#82ca9d" />
              <Bar dataKey="t_answer" fill="#ffc658" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
