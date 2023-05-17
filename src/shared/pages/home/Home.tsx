import { useNavigate } from "react-router-dom"

export const Home = () => {
  const navigate = useNavigate()

  return (
    <>
      home

      <br />

      <button
        className="app-button mt-2"
        onClick={() => navigate("introduction")}>
          Intro
      </button>
    </>
  )
}
