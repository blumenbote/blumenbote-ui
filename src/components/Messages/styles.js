import styled from 'styled-components'

export const MessagesContainer = styled.div`
  width: 100%;
  height: 85vh;
`

export const HeaderProfile = styled.div`
  display: flex;
  > div {
    > p {
      margin-left: 10px;
    }
  }
`
export const Image = styled.div`
  width: 15%;
   > img {
    width: 100%;
    border-radius: 16px;
  }
`

export const Chat = styled.div`
  display: flex;
  overflow: auto;
  height: 55vh;
  flex-direction: column;
`

export const MessageConsole = styled.div`
  display: inline-flex;
  justify-content: center;
  font-size: 0.8em;
  border-radius: 97px;

`

export const MessageBusiness = styled.div`
  display: flex;
  font-size: 0.8em;
`

export const MessageCustomer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex-wrap: wrap;
  font-size: 0.8em;
`

export const BubbleConsole = styled.div`
  border-radius: 97px;
  padding: 15px;
  max-width: 30%;
  margin-bottom: 10px;
  background: #EFEFEF;
  text-align: center;
  height: auto;
  overflow: hidden;
  overflow-wrap: break-word;
  > p{
    text-align: right;
    font-size: 0.8em;
    margin-block-start: initial;
    margin-block-end: initial;
  }
`

export const BubbleBusines = styled.div`
  border-radius: 97px 97px 97px 0px;
  padding: 15px;
  max-width: 60%;
  margin-bottom: 10px;
  background: #EFEFEF;
  height: auto;
  overflow: hidden;
  > p{
    text-align: right;
    font-size: 0.8em;
    margin-block-start: initial;
    margin-block-end: initial;
  }
`

export const BubbleCustomer = styled.div`
  border-radius: 97px 97px 0px 97px;
  padding: 15px;
  max-width: 60%;
  margin-bottom: 10px;
  background: #D81212;
  color: white;
  overflow-wrap: break-word;
  overflow: hidden;
  > img{
    border-radius: 97px;
  }
  > p{
    text-align: right;
    font-size: 0.8em;
    margin-block-start: initial;
    margin-block-end: initial;
  }
`
export const SendForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px 30px;

`

export const Send = styled.form`
  background: #FAFAFA;
  align-items: center;
  display: flex;
  margin-top: 3px;
  height: auto;
  > input {
    flex: 1;
    height: auto;
  }
    > label {
      width: 20px;
      height: 20px;
      padding: 0px 10px;
        > input {
          display: none;
        }
        > svg{
          width: 100%;
          height: 100%;
        }
      
    }
  
  > button{

     > svg {
       margin-right: 10px;
       width: 1em;
       height: 1em; 
       vertical-align: middle
     }
    
  }

  > button[name]{
    margin-right: 5px;
  }
`