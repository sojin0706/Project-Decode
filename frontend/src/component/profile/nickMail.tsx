export default function  NickMail(props:any){
  return (
    <>
      <h1>닉네임 : {JSON.stringify(props.userInfo.nick_name)}</h1>
    </>
  )
}