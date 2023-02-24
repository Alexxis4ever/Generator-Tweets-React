import { ListaTweets } from "../../UI/ListaTweets/ListaTweets"
import { ContainerTweet } from "../ContainerTweet/ContainerTweet"


export const MainHome = () => {
  return (
    <main className='mainContent'>
        <ContainerTweet />
        <h2>Aquí se verán tus tweets archivados</h2>
        <ListaTweets />
    </main>
  )
}
