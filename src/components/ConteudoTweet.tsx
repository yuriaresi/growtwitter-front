import { Tweet } from "../models/Tweets.model";
import { CardTweet } from "./CardTweet";

interface TweetProps {
  tweets: Tweet[];
}


export function ConteudoTweet(props: TweetProps) {

  return (
    <>
      
      <div>
        {props.tweets.map((item) => {
          return <CardTweet key={item.id} tweet={item} />;
        })}
      </div>
    </>
  );
}
