import React from "react";
import "./ListToDo.scss";
import "./AddToDo.js";
import AddToDo from "./AddToDo.js";
import { toast } from "react-toastify";

class ListToDo extends React.Component {
  state = {
    ListToDo: [
      { id: "list1", title: "doing homeworks" },
      { id: "list2", title: "creating music" },
      { id: "list3", title: "fixing bugs" },
    ],
    EditTodo: {},
  };
  addNewToDo = (todo) => {
    this.setState({
      ListToDo: [...this.state.ListToDo, todo],
    });
    toast.success("Wow so easy!");
  };
  handleDeleteTodo = (todo) => {
    let currentTodo = this.state.ListToDo;
    currentTodo = currentTodo.filter((item) => item.id !== todo.id);
    this.setState({
      ListToDo: currentTodo,
    });
    toast.success("Delete succeed!");
  };
  handleEditTodo = (todo) => {
    //save
    let { ListToDo, EditTodo } = this.state;
    let isEmptyObj = Object.keys(EditTodo).length === 0;

    let ListToDoCopy = [...ListToDo];
    if (isEmptyObj === false && EditTodo.id === todo.id) {
      //Find index of specific object using findIndex method.
      let objIndex = ListToDoCopy.findIndex((item) => item.id === todo.id);
      if (!EditTodo.title) {
        ListToDoCopy[objIndex].title = todo.title;
        toast.warning(`You must not leave it blank!`);
        return;
      } else {
        //Update object's name property.
        ListToDoCopy[objIndex].title = EditTodo.title;
      }

      this.setState({
        ListToDo: ListToDoCopy,
        EditTodo: {},
      });
      toast.success("Update todo succeed!");
      return;
    }
    //edit
    this.setState({
      EditTodo: todo,
    });
  };
  handleOnChangeEditTodo = (event) => {
    let EditTodoCopy = { ...this.state.EditTodo };
    EditTodoCopy.title = event.target.value;
    this.setState({
      EditTodo: EditTodoCopy,
    });
  };
  render() {
    //let ListToDo = this.state.ListToDo;
    let { ListToDo, EditTodo } = this.state;
    let isEmptyObj = Object.keys(EditTodo).length === 0;
    return (
      <div className="list-todo-container">
        <AddToDo addNewToDo={this.addNewToDo} />
        <div className="content-todo">
          {ListToDo &&
            ListToDo.length > 0 &&
            ListToDo.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  {isEmptyObj === true ? (
                    <span>
                      {index + 1} - {item.title}
                    </span>
                  ) : (
                    <>
                      {item.id === EditTodo.id ? (
                        <span>
                          {index + 1} -{" "}
                          <input
                            value={EditTodo.title}
                            onChange={(event) => {
                              this.handleOnChangeEditTodo(event);
                            }}
                          />
                        </span>
                      ) : (
                        <span>
                          {index + 1} - {item.title}
                        </span>
                      )}
                    </>
                  )}

                  <div>
                    <button
                      className="edit"
                      onClick={() => {
                        this.handleEditTodo(item);
                      }}
                    >
                      {isEmptyObj === false && EditTodo.id === item.id
                        ? "Save"
                        : "Edit"}
                    </button>
                    <button
                      className="delete"
                      onClick={() => {
                        this.handleDeleteTodo(item);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default ListToDo;
