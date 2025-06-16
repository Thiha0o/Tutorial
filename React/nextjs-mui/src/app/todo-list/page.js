"use client";
import * as React from "react";
import {
  Box,
  TextField,
  ButtonGroup,
  Button,
  Typography,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  Divider,
} from "@mui/material";
import { useState } from "react";
import SaveIcon from "@mui/icons-material/Save";
import EditIcon from "@mui/icons-material/Edit";
import RemoveIcon from "@mui/icons-material/Remove";
import AddTaskIcon from "@mui/icons-material/AddTask";
import UpdateIcon from "@mui/icons-material/Update";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [changedTask, setChangedTask] = useState("");
  const [taskIndex, setTaskIndex] = useState();

  //Active Button
  // const activeButtons = [
  //   <Button key="save" color="success" size="small" startIcon={<SaveIcon />}>
  //     SAVE
  //   </Button>,
  //   <Button key="edit" size="small" startIcon={<EditIcon />}>
  //     EDIT
  //   </Button>,
  //   <Button
  //     onClick={() => removeTask(index)}
  //     key="remove"
  //     color="error"
  //     size="small"
  //     startIcon={<RemoveIcon />}
  //   >
  //     REMOVE
  //   </Button>,
  // ];

  // //Clone of Active Buttons for Disabled Button
  // const disabledButtons = activeButtons.map((button) =>
  //   React.cloneElement(button, { disabled: true })
  // );

  //Add Task
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  //Remove Task
  const removeTask = (PassedIndexToRemove) => {
    setTasks((prevTasks) =>
      prevTasks.filter((_, index) => index != PassedIndexToRemove)
    );
  };

  //Update Task
  const updateTask = () => {
    if (changedTask.trim()) {
      setTasks((prevTasks) => {
        return prevTasks.map((task, index) =>
          index == taskIndex ? changedTask : task
        );
      });
      setChangedTask(null);
      setTaskIndex(null);
    }
  };

  //Trace what happen
  console.log("changedTask: ", changedTask);
  console.log("taskIndex", taskIndex);

  //Save task to a local laptop disk
  const saveTasksToFile = () => {
    const text = tasks.join("\n"); // One task per line
    const blob = new Blob([text], { type: "text/plain" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "tasks.txt"; // default filename
    link.click();
    URL.revokeObjectURL(link.href); // cleanup
  };

  return (
    <div>
      <Box
        component="form"
        sx={{ p: 2, display: "flex", justifyContent: "center" }}
      >
        <TextField
          variant="outlined"
          size="small"
          label="Task"
          id="inputTask"
          sx={{ mr: 2 }}
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addTask();
            }
          }}
        />
        <Button
          variant="outlined"
          type="button"
          size="medium"
          onClick={addTask}
          startIcon={<AddTaskIcon />}
        >
          Add task
        </Button>
      </Box>
      <Box>
        <Divider />
      </Box>
      {/* Task Input to Updat a Task */}
      {taskIndex != null || taskIndex != undefined ? (
        <Box
          component="form"
          sx={{
            height: 60,
            width: 800,
            mt: 4,
            mb: 2,
          }}
        >
          <TextField
            variant="outlined"
            size="small"
            label="Update task"
            sx={{ mr: 2 }}
            value={changedTask}
            onChange={(e) => setChangedTask(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                updateTask();
              }
            }}
          />
          <Button
            type="button"
            variant="outlined"
            size="medium"
            onClick={updateTask}
            sx={{ mr: 1 }}
            startIcon={<UpdateIcon />}
          >
            Update Task
          </Button>
          <Button
            size="medium"
            variant="outlined"
            color="secondary"
            onClick={() => {
              setTaskIndex(null);
              setChangedTask(null);
            }}
          >
            Cancel
          </Button>
        </Box>
      ) : (
        <Box
          component="form"
          sx={{
            height: 60,
            width: 800,
            mt: 4,
            mb: 2,
          }}
        >
          <Typography>Edit Area:</Typography>
        </Box>
      )}
      <Box>
        <Divider />
      </Box>
      <Box sx={{ marginTop: 2 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Task Name</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tasks.length > 0 ? (
                tasks.map((task, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {index}
                    </TableCell>
                    <TableCell align="right">{task}</TableCell>
                    <TableCell align="right">
                      <ButtonGroup size="small" aria-label="Small button group">
                        {/* {activeButtons} */}
                        <Button
                          color="success"
                          size="small"
                          startIcon={<SaveIcon />}
                          disabled={taskIndex != null}
                          onClick={saveTasksToFile}
                        >
                          SAVE
                        </Button>
                        <Button
                          size="small"
                          startIcon={<EditIcon />}
                          onClick={() => {
                            setTaskIndex(index);
                            setChangedTask(task);
                          }}
                          disabled={taskIndex != null}
                        >
                          EDIT
                        </Button>
                        <Button
                          onClick={() => {
                            removeTask(index);
                            setTaskIndex(null);
                            setChangedTask(null);
                          }}
                          color="error"
                          size="small"
                          startIcon={<RemoveIcon />}
                          disabled={taskIndex != null}
                        >
                          REMOVE
                        </Button>
                      </ButtonGroup>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    #
                  </TableCell>
                  <TableCell align="right">
                    😌 You're all caught up! No tasks.
                  </TableCell>
                  <TableCell align="right">
                    <ButtonGroup size="small" aria-label="Small button group">
                      {/* {disabledButtons} */}
                      <Button
                        color="success"
                        size="small"
                        startIcon={<SaveIcon />}
                        disabled
                      >
                        SAVE
                      </Button>
                      <Button size="small" startIcon={<EditIcon />} disabled>
                        EDIT
                      </Button>
                      <Button
                        onClick={() => removeTask(index)}
                        color="error"
                        size="small"
                        startIcon={<RemoveIcon />}
                        disabled
                      >
                        REMOVE
                      </Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}
