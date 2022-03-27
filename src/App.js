import React, { useState } from "react";
import ComponentBlock from "./ComponentBlock";

function App() {
  // const [show, setShow] = useState(false);

  const onClickParams = [
    {
      name: "onClick",
      variants: ["blue", "black", "grey"],
      desc: "Функция которая выполняется при нажатии",
    },
    {
      name: "onClick",
      variants: ["blue", "black", "grey"],
      desc: "Функция которая выполняется при нажатии",
    },
  ];

  return (
    <div className="App">
      {/* <button onClick={() => setShow(!show)}>test</button> */}
      <div
        className={"sidebar"}
        // style={show ? { display: "block" } : { display: "none" }}
      >
        <a href={"#"}>About</a>
        <a href={"#"}>Main</a>
        <a href={"#button"}>Button</a>
        <a href={"#"}>Slider</a>
      </div>
      <div style={{ width: 800, margin: "0 auto" }}>
        {/* <div className={"logo"}>DOCO-DOCO</div> */}
        {/* Block */}
        <ComponentBlock
          status={false}
          name={"Button"}
          description={"Обычная кнопка, с гибкой настройкой:"}
          params={onClickParams}
          code={`import React, {useState} from "react";
          import Button from "components/lib/Button/button";
          
          const App = () => {
            return (
              <>
                <Button variant={"blue"} size={"big"}>
                  Корзина
                </Button>
              </>
            );
          };
          export default App;`}
        />
        {/* Block end */}
        {/* Block */}
        <ComponentBlock
          status={true}
          name={"Button"}
          description={"Обычная кнопка, с гибкой настройкой:"}
          params={onClickParams}
          code={`import React, {useState} from "react";
          import Button from "components/lib/Button/button";
          
          const App = () => {
            return (
              <>
                <Button variant={"blue"} size={"big"}>
                  Корзина
                </Button>
              </>
            );
          };
          export default App;`}
        />
        {/* Block end */}
        {/* Block */}
        <ComponentBlock
          status={false}
          name={"Button"}
          description={"Обычная кнопка, с гибкой настройкой:"}
          params={onClickParams}
          code={`import React, {useState} from "react";
          import Button from "components/lib/Button/button";
          
          const App = () => {
            return (
              <>
                <Button variant={"blue"} size={"big"}>
                  Корзина
                </Button>
              </>
            );
          };
          export default App;`}
        />
        {/* Block end */}
      </div>
    </div>
  );
}

export default App;
