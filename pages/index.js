function GlobalStyle(){
    return (
        <style global  jsx>{`
        *{
            background: black;
        }
        `}
        </style>
    );
}

function Title(props){
    console.log(props)
    const Tag = props.tag;
    return(
        <>
         <Tag>{props.children}</Tag>
         <style jsx>{`
        ${Tag} {
        color: red;
         font-size: 24px;
         font-weight:600;
         }
         `}</style>
         </>
    );
}

function HomePage() {
    return (
    <div>
        <GlobalStyle />
       <Title tag="h2"> Boas Vindas de Volta! </Title> 
       <h2>Discord - Alura Matrix </h2>
      
    </div>
    )
  }
  
  export default HomePage