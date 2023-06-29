import React, {
  useEffect,
  useState,
  useReducer,
} from "react";
import { Button } from "../components";
import useCounter from "../hooks/useCount";

const ACTION_TYPES = {
  SET_COUNT: "SET_COUNT",
  SET_VALUE_TO_ADD: "SET_VALUE_TO_ADD",
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.SET_COUNT:
      return { ...state, count: payload };
    case ACTION_TYPES.SET_VALUE_TO_ADD:
      return { ...state, valueToAdd: payload };

    default:
      throw new Error(
        `action type of ${type} is not found`
      );
  }
};

const CounterPage = ({ initialCount }) => {
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const handleOnChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    // if (typeof value !== "number") return;
    dispatch({
      type: ACTION_TYPES.SET_VALUE_TO_ADD,
      payload: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCount = state.valueToAdd + state.count;
    dispatch({
      type: ACTION_TYPES.SET_COUNT,
      payload: newCount,
    });
    console.log("form submitted");
  };

  const incrementCount = () => {
    const newCount = state.count + 1;
    dispatch({
      type: ACTION_TYPES.SET_COUNT,
      payload: newCount,
    });
  };
  const decrementCount = () => {
    const newCount = state.count - 1;
    dispatch({
      type: ACTION_TYPES.SET_COUNT,
      payload: newCount,
    });
  };

  return (
    <div className='mt-5 flex flex-col gap-2'>
      <h1>Count is: {state.count}</h1>
      <Button primary onClick={incrementCount}>
        Increment
      </Button>
      <Button danger onClick={decrementCount}>
        Decrement
      </Button>

      <form
        className='w-full h-full gap-5 border flex flex-col p-5 shadow-md'
        onSubmit={handleSubmit}
      >
        <label htmlFor='count'>Add your own value</label>
        <input
          name='count'
          id='count'
          className='border p-5'
          type='number'
          value={state.valueToAdd}
          onChange={handleOnChange}
        />
        <Button secondary type='submit'>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CounterPage;
