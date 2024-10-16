
import { useEffect, useState } from "react";
import { Button } from "../Components/ui/Button";
import  RandomJoke from "@/Components/Random-joke";
import { Link } from "lucide-react";

const MyRandomJoke: React.FC = () => {
    // Your component logic
  

interface jokeResponse { 
    setup:   string;
    punchline: string;
};
const  [joke, setjoke] = useState<string>("");

useEffect(()=>{
    fetchJoke();

}, []);

async function fetchJoke():Promise<void> {
try{ 
     const response = await fetch( "https://official-joke-api.appspot.com/random_joke")
    // const response = await fetch( "https://www.postman.com/cs-demo/public-rest-apis/folder/10o4jyf/jokes?action=share&source=copy-link&creator=38935471&ctx=documentation")
    const data : jokeResponse  = await response.json();
   setjoke (`${data.setup}-${data.punchline}`);

}catch (error) {
 console.error("Error fetching joke", error);
 setjoke("Failed to fetch joke . try again later");
};
}

return (
<div className="flex flex-col items-center justify-center h-screen bg-blue-700 p-4"> 
<div
  style={{
    backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhXzis4NTBOqII1GO2pM-bq4KAscXI-czGUA&s')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
    position: "absolute",
    top: 0,
    left: 0,
    opacity: 0.4,
    
  }}
>
</div>
<div className="bg-white rounded-2xl lg p-8 w-full max-w-md">
<h1 className="text-3xl font-bold-lg mb-4 text-[#040504] text-center "> Random Joke</h1>
<div className="bg-white rounded-lg p-6 mb-6 text-[#080808] text-lg text-center">
{joke  || "Click the button to get a random joke"} 
</div> 

<Button
  onClick={fetchJoke}
  className="bg-[#2cc539] hover:bg-[#ff6b6b]/90 text-white font-bold py-2 px-4 rounded">
   Get a new joke
</Button>

      
</div>
  
    </div>

);

}

export default MyRandomJoke
