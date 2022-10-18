import { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { Button, FormField, Input, Label } from "../styles";

function NewAnime({ user, anime, setReviews, reviews}) {
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState("")
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    let newRev = {rating,
      comment,
      "anime_id": anime.id,
      "user_id": user.id   }
    fetch("/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRev),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        setReviews([...reviews, newRev])
        history.push("/");
        
      } else {
        r.json().then((err) => setErrors(err.error));
      }
    });
  }

  return (
    <Wrapper>
      <WrapperChild>
        <form onSubmit={handleSubmit}>
          <FormField>
            <Label htmlFor="rating">Rating</Label>
            <Input
              type="integer"
              id="name"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="comment">Comment</Label>
            <Input
              type="text"
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </FormField>
       
          <FormField>
            <Button color="primary" type="submit">
              {isLoading ? "Loading..." : "Submit Review"}
            </Button>
          </FormField>
          <FormField>             
      {errors? <div>{errors}</div>:null}
          </FormField>
        </form>
      </WrapperChild>
      
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
  gap: 24px;
`;

const WrapperChild = styled.div`
  flex: 1;
`;

export default NewAnime;