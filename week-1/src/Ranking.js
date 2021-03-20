import React from "react"
import styled from "styled-components";
import {useSelector, useDispatch} from "react-redux"

const Ranking = (props) => {
  const ranking = useSelector((state) => state.quiz.user_info)

  return (
    <RankContainer>
      <Topbar>
        <p>
          <span>{ranking.length}명</span>의 사람들이 퀴즈를 풀었습니다.
        </p>
      </Topbar>
      <RankWrap>
        {ranking.map((r, idx) => {
          return (
            <RankItem key={idx}>
              <RankUser>
                <p>
                  <b>{r.name}</b>
                </p>
                <p>{r.message}</p>
              </RankUser>
            </RankItem>
          );
        })}
      </RankWrap>

      <Button
        onClick={() => {
          window.location.href = '/';
        }}
      >
        다시 하기
      </Button>
    </RankContainer>
  );
};

const RankContainer = styled.div`
  width: 100%;
  padding-bottom: 100px;
`;

const Topbar = styled.div`
  position: fixed;
  top:0;
  left: 0;
  width: 100vw;
  min-height: 50px;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  & > p {
    text-align: center;
  }

  & > p > span {
    border-radius: 30px;
    background-color: #fef5d4;
    font-weight: 600;
    padding: 4px 8px;
  }
`;

const RankWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 58px;
`;

const RankItem = styled.div`
  width: 80vw;
  margin: 8px auto;
  display: flex;
  border-radius: 5px;
  border: 1px solid #ddd;
  padding: 8px 16px;
  align-items: center;
  background-color: ${props => props.highlight? "#ffd6aa" : "#ffffff"}
`;

const RankNum = styled.div`
  text-align: center;
  font-size: 2em;
  font-weight: 600;
  padding: 0px 16px 0px 0px;
  border-right: 1px solid #ddd;
`;

const RankUser = styled.div`
  padding: 8px 16px;
  text-align: left;
  & > p{
    &:first-child > b{
      border-bottom: 2px solid #212121;
    }
    margin: 0px 0px 8px 0px;
  }
`;

const Button = styled.button`
position: fixed;
bottom: 5vh;
left: 0;
  padding: 8px 24px;
  background-color: ${(props) => (props.outlined ? "#ffffff" : "#dadafc")};
  border-radius: 30px;
  margin: 0px 10vw;
  border: 1px solid #dadafc;
  width: 80vw;
`;



export default Ranking