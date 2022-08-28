import React from "react";
import ShowTodo from "./ShowTodo";
import { useState } from "react";
import { Box, Button, Container, Input, Stack, WrapItem } from "@chakra-ui/react";
export default function Todo() {
  const [task, setTask] = useState("");
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = task;
    setData([...data, newData]);
    setTask("");
  };

  return (
    <Container>
      <Box className="todo">
        <form onSubmit={handleSubmit} >
          <Input
           htmlSize={25} width='auto'
            placeholder="New list name"
            type="text"
            name=""
            id=""
            value={task}
            onChange={handleChange}
            focusBorderColor='lime'
          />
         
          <Stack>
            <WrapItem>
            <Button type="submit" colorScheme='whatsapp'  >
              Add
            </Button>
            </WrapItem>
          </Stack>
        </form>

        {data.map((item, index) => {
          return (
            <Stack>
              <ShowTodo key={index} id={index} newTask={item} />
            </Stack>
          );
        })}
      </Box>
    </Container>
  );
}