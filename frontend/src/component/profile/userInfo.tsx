import { useEffect, useState } from "react"

export default function UserInfo(props:any) {
  // useEffect(()=> {
  //   if (JSON.stringify(props.userInfo.gender) === JSON.stringify("W")) {
  //     console.log('남잔데영?')
  //   } else {
  //     console.log('여잔데여?')
  //   }
  // })
  return (
    <>
      {/* <p>테스트 : {mw}</p> */}
      <h3>연령대: {JSON.stringify(props.userInfo.age)}</h3>
      <h3>성별: {JSON.stringify(props.userInfo.gender)}</h3>
      <h3>선호장르: 고민중</h3>
      <h3>활동지역: {JSON.stringify(props.userInfo.small_region)}</h3>
    </>
  )
}