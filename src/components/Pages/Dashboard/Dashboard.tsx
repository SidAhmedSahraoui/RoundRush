import React, { Fragment, useState } from "react";
import useStyles from "./style";
// images & icons
import Bell from "../../../img/bell.svg";
import Add from "../../../img/add.svg";
import Dev from ".././../../img/dev.svg";
import { Icon } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
// priorety
import High from "../../../img/high.svg";
import Urgent from "../../../img/urgent.svg";
import Medium from "../../../img/medium.svg";
import Low from "../../../img/low.svg";
// type
import Task from "../../../img/task.svg";
import Task2 from "../../../img/task2.svg";
import Macro from "../../../img/macro.svg";
import { v4 as uuid } from "uuid";
// interface
import { dProps } from "../../../types/types";

const Dashboard: React.FC<dProps> = ({ tasks, todos }) => {
  const classes = useStyles();
  const [title, setTitle] = useState("Marketing");
  const clickHandler = (name: string) => {
    setTitle((title) => name);
  };

  return (
    <>
      <main className={classes.main}>
        <nav>
          <h1>Dashboard</h1>
          <div className="icons">
            <img src={Bell} alt="bell" />
            <img src={Add} alt="add" />
          </div>
        </nav>
        <span></span>
        <section>
          <nav>
            <div className="rec">
              <section>
                <h1 className="title">Welcome back, James</h1>
                <h5 className="sub">
                  in <strong>Marketing</strong> You have <strong>14</strong>{" "}
                  task to accomplish an <strong>10</strong> reviews left in your
                  current Iteration
                </h5>
              </section>
              <img src={Dev} alt="" />
            </div>
            <h1 className="title">Favorite Projects</h1>
            <section className="projects">
              {tasks.map((task) => (
                <div
                  key={task.name}
                  onClick={() => clickHandler(task.name)}
                  className="project">
                  <div style={{ backgroundColor: task.color }} className="rec">
                    {task.code}
                  </div>
                  <h4 className="pro-title">{task.name}</h4>
                </div>
              ))}
            </section>
          </nav>
          <span></span>
          <section className="tasks">
            <nav>
              <h1 className="title">{title}</h1>
              <h5>
                Go to the project <Icon component={ArrowForward} />
              </h5>
            </nav>
            <div className="head">
              <h3>Todos</h3>
              <div>
                <h1>12</h1>
              </div>
            </div>
            <div className="list">
              {todos.map((todo) => (
                <Fragment key={uuid()}>
                  <div className="card">
                    <div className="prio">
                      <img
                        src={
                          todo.priorety === 4
                            ? Urgent
                            : todo.priorety === 3
                            ? High
                            : todo.priorety === 2
                            ? Medium
                            : Low
                        }
                        alt=""
                      />
                    </div>
                    <div className="type">
                      <img
                        src={
                          todo.type === "task"
                            ? Task
                            : todo.type === "task2"
                            ? Task2
                            : Macro
                        }
                        alt=""
                      />
                    </div>
                    <div className="code">
                      <h1>{todo.code}</h1>
                    </div>
                    <div className="title">
                      <h2>{todo.title}</h2>
                    </div>
                    <div
                      style={{ backgroundColor: todo.color }}
                      className="other">
                      <h5>{todo.parent}</h5>
                    </div>
                  </div>
                  <span></span>
                </Fragment>
              ))}
            </div>
          </section>
        </section>
      </main>
    </>
  );
};
export default Dashboard;
