import React, { useState } from "react";
import ComponentBlock from "./ComponentBlock";

function App() {
  const [show, setShow] = useState(false);

  const onClickParams = [
    {
      name: "onClick",
      type: "function",
      variants: [],
      desc: "Функция которая выполняется при нажатии",
    },
    {
      name: "variant",
      type: "string",
      variants: ["blue", "black", "grey", "outline-grey", "outline-black"],
      desc: "Стиль кнопки",
    },
    {
      name: "size",
      type: "string",
      variants: ["big", "small"],
      desc:
        "Размер кнопки большая или маленькая, если параметр не указан, то кнопка будет стандратного среднего размера",
    },
    {
      name: "disabled",
      type: "boolean",
      variants: ["true", "false"],
      desc: "Активная кнопка или нет",
    },
    {
      name: "gap",
      type: "string",
      variants: ["15px 15px 15px 15px"],
      desc: "Добавляет css стиль отступа у кнопки",
    },
    {
      name: "link",
      type: "string",
      variants: [],
      desc: "Активная кнопка или нет",
    },
    {
      name: "children",
      type: "JSX.Element / ReactNode",
      variants: [],
      desc: "Данные которые вставляются между тегами кнопки",
    },
    {
      name: "padding",
      type: "string",
      variants: ["5px 5px 5px 5px"],
      desc: "Отступы кнопки",
    },
    {
      name: "fontSize",
      type: "number",
      variants: [],
      desc: "Размер шрифта кнопки",
    },
    {
      name: "width",
      type: "string",
      variants: [],
      desc: "Фиксированная ширина кнопки",
    },
    {
      name: "className",
      type: "string",
      variants: [],
      desc: "Сторонний класс для кнопки",
    },
  ];

  const textfieldParams = [
    {
      name: "label",
      type: "string",
      variants: [],
      desc: "Placeholder который будет находиться в текстовом поле",
    },
    {
      name: "filled",
      type: "boolean",
      variants: ["true"],
      desc: "Серый фон для текстового поля",
    },
  ];

  return (
    <div className="App">
      {/* <button onClick={() => setShow(!show)}>test</button> */}
      <div
        className={"sidebar"}
        // style={show ? { display: "block" } : { display: "none" }}
      >
        <a href={"#"}>Back to top</a>
        <a href={"#button"}>Button</a>
        <a href={"#textfield"}>Textfield</a>
      </div>
      <div style={{ width: 800, margin: "0 auto" }}>
        {/* Block */}
        <ComponentBlock
          status={false}
          name={"Button"}
          link={"button"}
          description={"Обычная кнопка, с гибкой настройкой:"}
          params={onClickParams}
          code={`
          const App = () => {
            return (
              <>
                <Button variant={"blue"} size={"big"}>
                  Корзина
                </Button>
              </>
            );
          };
          export default App;
          `}
        />
        {/* Block end */}
        {/* Block */}
        <ComponentBlock
          status={false}
          name={"Textfield"}
          link={"textfield"}
          description={"Гибкий текстовый инпут:"}
          params={textfieldParams}
          code={`
          const App = () => {
            return (
              <>
                <Textfield label={"Ваше имя"} filled={true} />
                <Textfield label={"Ваше имя"} />
              </>
            );
          };
          export default App;
          `}
        />
        {/* Block end */}
      </div>
    </div>
  );
}

export default App;
