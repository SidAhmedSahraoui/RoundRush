import React, { Fragment, useState } from "react";
import useStyles from "./style";
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
//type
import Task from "../../../img/task.svg";
import Task2 from "../../../img/task2.svg";
import Macro from "../../../img/macro.svg";
import { v4 as uuid } from "uuid"
const Dashboard: React.FC = () => {
  const classes = useStyles();
  const [title, setTitle] = useState("Marketing");
  const clickHandler = (name: string) => {
    setTitle((title) => name);
  };
  const tasks = [
    {
      name: "LD Website",
      code: "LW",
      color: "#DB54FD",
    },
    {
      name: "LD Marketing",
      code: "LM",
      color: "#61D26F",
    },
    {
      name: "RoundRush",
      code: "R",
      color: "#1FAAE9",
    },
    {
      name: "RoundRush Website",
      code: "RW",
      color: "#4086E0",
    },
    {
      name: "DevOps",
      code: "DO",
      color: "#EEC301",
    },
    {
      name: "MicroServices",
      code: "MS",
      color: "#FD612C",
    },
    {
      name: "Deep Learning",
      code: "DL",
      color: "#FD612C",
    },
    {
      name: "SpringBoot",
      code: "SP",
      color: "#1FAAE9",
    },
    {
      name: "Java",
      code: "J",
      color: "#61D26F",
    },
  ];

  const todos = [
    {
      priorety: 4,
      type: "task",
      code: "VMS-20",
      title: "Certe, inquam, pertinax non intell...",
      parent: "LD Website",
      color: "#61D26F",
    },
    {
      priorety: 4,
      type: "task2",
      code: "VMS-11",
      title: "Ac hac et ac tristique luctus.",
      parent: "Roundrush",
      color: "#1FAAE9",
    },
    {
      priorety: 3,
      type: "macro",
      code: "VMS-28",
      title: "Magna bibendum nibh mi habitant.",
      parent: "Marketing",
      color: "#1FAAE9",
    },
    {
      priorety: 3,
      type: "task",
      code: "VMS-22",
      title: "Ac hac et ac tristique luctus.",
      parent: "LD Website",
      color: "#61D26F",
    },
    {
      priorety: 2,
      type: "task2",
      code: "VMS-11",
      title: "Varius ultricies vitae eget.",
      parent: "LD Website",
      color: "#7A6FEF",
    },
    {
      priorety: 1,
      type: "macro",
      code: "VMS-22",
      title: "Certe, inquam, pertinax non intell...",
      parent: "LD Website",
      color: "#7A6FEF",
    },
  ];
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
                <Fragment key={uuid()} >
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
                    <img src={todo.type === "task" ? Task : todo.type === "task2" ? Task2 : Macro} alt="" />
                  </div>
                  <div className="code">
                    <h1>{todo.code}</h1>
                  </div>
                  <div className="title">
                    <h2>{todo.title}</h2>
                  </div>
                  <div style={{ backgroundColor: todo.color }} className="other">
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
