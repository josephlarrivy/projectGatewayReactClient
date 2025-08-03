import KeysApi from "../utilities/API/KeysApi";





const GenerateApiKey = () => {



  const keysApirequest = new KeysApi()

  const requestNewApiKey = async () => {
    const response = await keysApirequest.requestNewApiKey("2WY4Euakuzt3", "Test Key One")
    console.log(response)
  }

  return (
    <div>
      <h1>generate api key</h1>
      <br />
      <button onClick={() => requestNewApiKey()}>request key</button>
    </div>
  )

}

export default GenerateApiKey;