import useTimer from "../hooks/useTimer";

const TimeDisplay = () => {
  const seconds = useTimer(0);
  const seconds2 = useTimer(10);

  return (
    <>
      <p>경과 시간 : {seconds}초</p>
      <p>경과 시간 : {seconds2}초</p>
    </>
  );
};

export default TimeDisplay;
