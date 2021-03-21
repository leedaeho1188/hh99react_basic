import React from 'react'
import styled from 'styled-components'
import {useSelector} from "react-redux"
const Progress = (props) => {
  const bucket_list = useSelector(state => state.bucket.list);
  let count = 0;
  bucket_list.map((l, idx) => {
    if(l.completed){
      count++;
    }
  })

  return (
    <ProgressBar>
      <HightLight width={(count/bucket_list.length)*100 + '%'}></HightLight>
      <Dot></Dot>
    </ProgressBar>
  )
}

const ProgressBar = styled.div`
  background: #eee;
  width:100%;
  height: 20px;
  display: flex;
  border-radius: 10px;
  align-items: center;
`
const HightLight = styled.div`
  background: orange;
  width: ${(props) => props.width};
  height: 20px;
  transition: width 1s;
  border-radius: 10px
`
const Dot = styled.div`
  background: #fff;
  border: 5px solid orange;
  box-sizing : border-box;
  margin: 0px 0px 0px -10px;
  width: 40px;
  height: 40px;
  border-radius: 20px;

`


export default Progress