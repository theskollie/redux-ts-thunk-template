import React, { useEffect } from "react";
import { fetchDogImages } from "../redux/dogs/dogsSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const GetDogImages = () => {
  const dispatch = useAppDispatch();
  const dogsState = useAppSelector((state) => state.dogs);

  useEffect(() => {
    dispatch(fetchDogImages());
  }, [dispatch]);

  const DisplayDogImages = (): JSX.Element => {
    const data = (
      <>
        {dogsState.images.map((image) => {
          return <img src={image} width="33%" alt="Super Dog Mode" />;
        })}
      </>
    );
    return data;
  };

  return (
    <>
      <h2>Store Images: {dogsState.images.length}</h2>
      <button onClick={() => dispatch(fetchDogImages())}>Get New Dogs</button>

      {dogsState.loading && <div className="lds-dual-ring"></div>}

      {dogsState.loading === false && dogsState.images.length ? (
        <div className="dogBox">
          <DisplayDogImages />
        </div>
      ) : null}
    </>
  );
};

export default GetDogImages;
